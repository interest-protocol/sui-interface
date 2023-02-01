import { Network, SuiObjectInfo } from '@mysten/sui.js';
import { UnserializedSignableTransaction } from '@mysten/sui.js/src/signers/txn-data-serializers/txn-data-serializer';
import { DevInspectResults } from '@mysten/sui.js/src/types';
import { has, isEmpty, pathOr, propOr } from 'ramda';

import { Web3ManagerState } from '@/components/web3-manager/web3-manager.types';
import {
  COIN_TYPE,
  DEX_BASE_TOKEN_ARRAY,
  DEX_PACKAGE_ID,
  DEX_STORAGE_STABLE,
  DEX_STORAGE_VOLATILE,
} from '@/constants';
import { FixedPointMath } from '@/sdk';
import { addCoinTypeToTokenType } from '@/utils';

import { GetSwapPayload, PoolsMap, SwapPathObject } from './swap.types';

export const parsePools = (data: undefined | SuiObjectInfo[]) => {
  if (!data) return {};

  return data.reduce((acc, elem) => {
    const type = elem.type.split('VPool');

    const tokensTypes = type[1].split(',');
    const tokenInType = tokensTypes[0].substring(1);
    const tokenOutType = tokensTypes[1].substring(1, tokensTypes[1].length - 2);

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

export const getCoinIds = (
  coinsMap: Web3ManagerState['coinsMap'],
  type: string
) => {
  if (isEmpty(coinsMap)) return [];
  if (type === COIN_TYPE[Network.DEVNET].SUI) {
    const suiObjects = [...coinsMap[type].objects];
    const gasObjectIndex = suiObjects
      .sort((a, b) => (+a! > +b! ? 1 : -1))
      .findIndex((elem) =>
        FixedPointMath.toBigNumber(elem.balance || '0').gte(
          FixedPointMath.toBigNumber(5000)
        )
      );
    return suiObjects
      .filter((_, index) => index !== gasObjectIndex)
      .map((elem) =>
        pathOr('', ['details', 'data', 'fields', 'id', 'id'], elem)
      );
  }

  console.log('>> coinsMap ::', coinsMap);
  console.log('>> type ::', type);

  return coinsMap[type].objects.map((elem) => elem.coinObjectId);
};

export const getSwapPayload = ({
  tokenIn,
  tokenOutType,
  coinsMap,
  volatilesPools,
}: GetSwapPayload): UnserializedSignableTransaction | null => {
  if (isEmpty(volatilesPools)) return null;

  const path = findMarket(volatilesPools, tokenIn.type, tokenOutType);

  const firstSwapObject = path[0];

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
          FixedPointMath.toBigNumber(
            tokenIn.value,
            tokenIn.decimals
          ).toString(),
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
        gasBudget: 11000,
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
          FixedPointMath.toBigNumber(
            tokenIn.value,
            tokenIn.decimals
          ).toString(),
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
