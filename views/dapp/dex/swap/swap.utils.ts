import { UnserializedSignableTransaction } from '@mysten/sui.js/src/signers/txn-data-serializers/txn-data-serializer';
import { DevInspectResults } from '@mysten/sui.js/src/types';
import { DynamicFieldInfo } from '@mysten/sui.js/src/types/dynamic_fields';
import BigNumber from 'bignumber.js';
import { has, isEmpty, pathOr, propOr } from 'ramda';

import {
  DEX_BASE_TOKEN_ARRAY,
  DEX_PACKAGE_ID,
  DEX_STORAGE_STABLE,
  DEX_STORAGE_VOLATILE,
} from '@/constants';
import { FixedPointMath } from '@/sdk';
import { addCoinTypeToTokenType } from '@/utils';
import { getCoinIds } from '@/utils';

import { GetSwapPayload, PoolsMap, SwapPathObject } from './swap.types';

export const parsePools = (data: undefined | DynamicFieldInfo[]) => {
  if (!data) return {};

  return data.reduce((acc, elem) => {
    const type = elem.objectType.split('VPool');

    const tokensTypes = type[1].split(',');
    const tokenInType = tokensTypes[0].trim().substring(1);
    const tokenOutType = tokensTypes[1]
      .trim()
      .substring(0, tokensTypes[1].length - 2);

    const parsedTokenIn = addCoinTypeToTokenType(tokenInType);
    const parsedTokenOut = addCoinTypeToTokenType(tokenOutType);

    if (!acc[parsedTokenIn]) acc[parsedTokenIn] = {};
    if (!acc[parsedTokenOut]) acc[parsedTokenOut] = {};

    return {
      ...acc,
      [parsedTokenIn]: {
        ...acc[parsedTokenIn],
        [parsedTokenOut]: elem,
      },
      [parsedTokenOut]: {
        ...acc[parsedTokenOut],
        [parsedTokenIn]: elem,
      },
    };
  }, {} as PoolsMap);
};

// TODO Need to add two hop swap logic
export const findMarket = (
  data: PoolsMap,
  tokenInType: string,
  tokenOutType: string
): ReadonlyArray<SwapPathObject> => {
  if (isEmpty(data)) return [];

  const pool =
    data[addCoinTypeToTokenType(tokenInType)][
      addCoinTypeToTokenType(tokenOutType)
    ];

  // No Hop Swap X -> Y
  if (pool)
    return [
      {
        baseTokens: [],
        tokenInType,
        tokenOutType,
      },
    ];

  // One Hop Swap
  return DEX_BASE_TOKEN_ARRAY.reduce(
    (acc, element): ReadonlyArray<SwapPathObject> => {
      const firstPool = pathOr(
        null,
        [addCoinTypeToTokenType(tokenInType), addCoinTypeToTokenType(element)],
        data
      );
      const secondPool = pathOr(
        null,
        [addCoinTypeToTokenType(tokenOutType), addCoinTypeToTokenType(element)],
        data
      );

      if (firstPool && secondPool)
        return [
          ...acc,
          {
            baseTokens: [element],
            tokenOutType,
            tokenInType,
          },
        ];

      return acc;
    },
    [] as ReadonlyArray<SwapPathObject>
  );
};

export const getAmountMinusSlippage = (
  value: BigNumber,
  slippage: string
): BigNumber => {
  const slippageBn = FixedPointMath.toBigNumber(+slippage, 3);
  const newAmount = value
    .minus(value.multipliedBy(slippageBn).dividedBy(new BigNumber(100000)))
    .decimalPlaces(0, BigNumber.ROUND_DOWN);

  return newAmount.eq(value) ? newAmount.minus(new BigNumber(1)) : newAmount;
};

export const getSwapPayload = ({
  tokenIn,
  tokenOutType,
  coinsMap,
  volatilesPools,
}: GetSwapPayload): UnserializedSignableTransaction | null => {
  if (isEmpty(volatilesPools)) return null;
  if (!tokenIn.value) return null;

  const path = findMarket(volatilesPools, tokenIn.type, tokenOutType);

  if (!path.length) return null;

  const firstSwapObject = path[0];

  const amount = FixedPointMath.toBigNumber(tokenIn.value, tokenIn.decimals);

  // no hop swap
  if (!firstSwapObject.baseTokens.length) {
    return {
      kind: 'moveCall',
      data: {
        function: 'swap',
        gasBudget: 9000,
        module: 'interface',
        packageObjectId: DEX_PACKAGE_ID,
        typeArguments: [
          firstSwapObject.tokenInType,
          firstSwapObject.tokenOutType,
        ],
        arguments: [
          DEX_STORAGE_VOLATILE,
          DEX_STORAGE_STABLE,
          getCoinIds(coinsMap, firstSwapObject.tokenInType),
          [],
          amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString(),
          '0',
          '0',
        ],
      },
    };
  }

  // One Hop Swap
  if (firstSwapObject.baseTokens.length === 1) {
    return {
      kind: 'moveCall',
      data: {
        function: 'one_hop_swap',
        gasBudget: 9000,
        module: 'interface',
        packageObjectId: DEX_PACKAGE_ID,
        typeArguments: [
          firstSwapObject.tokenInType,
          firstSwapObject.tokenOutType,
          firstSwapObject.baseTokens[0],
        ],
        arguments: [
          DEX_STORAGE_VOLATILE,
          DEX_STORAGE_STABLE,
          getCoinIds(coinsMap, firstSwapObject.tokenInType),
          [],
          amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString(),
          '0',
          '0',
        ],
      },
    };
  }

  return null;
};

export const findSwapAmountOutput = (
  data: DevInspectResults | undefined,
  tokenOutType: string
) => {
  if (!data) return 0;
  const event = data.effects.events?.find((event) => {
    if (!has('coinBalanceChange', event)) return false;

    const coinBalanceChange = event.coinBalanceChange;

    const changeType = propOr(null, 'changeType', coinBalanceChange);

    if (changeType !== 'Receive') return false;

    const packageId = propOr(null, 'packageId', coinBalanceChange);

    if (packageId !== DEX_PACKAGE_ID) return false;

    const coinType = propOr(null, 'coinType', coinBalanceChange);

    if (!coinType || coinType !== tokenOutType) return false;

    const amount = propOr(null, 'amount', coinBalanceChange);

    return !!amount;
  });

  if (!event) return 0;

  return pathOr(0, ['coinBalanceChange', 'amount'], event);
};
