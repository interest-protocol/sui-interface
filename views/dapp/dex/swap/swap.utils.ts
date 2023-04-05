import { TransactionBlock } from '@mysten/sui.js';
import { DynamicFieldInfo } from '@mysten/sui.js/src/types/dynamic_fields';
import BigNumber from 'bignumber.js';
import { isEmpty, last, pathOr } from 'ramda';

import { DEX_BASE_TOKEN_ARRAY, DexFunctions, OBJECT_RECORD } from '@/constants';
import { FixedPointMath } from '@/sdk';
import {
  addCoinTypeToTokenType,
  createVectorParameter,
  getCoinsFromPoolType,
} from '@/utils';

import {
  FindMarketArgs,
  FindSwapAmountOutput,
  GetSwapPayload,
  PoolsMap,
  SwapPathObject,
} from './swap.types';

export const parsePools = (
  data: undefined | DynamicFieldInfo[],
  isStable: boolean
) => {
  if (!data) return {};

  return data.reduce((acc, elem) => {
    const type = elem.objectType.split(isStable ? 'SPool' : 'VPool');

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
export const findMarket = ({
  data,
  network,
  tokenOutType,
  tokenInType,
}: FindMarketArgs): ReadonlyArray<SwapPathObject> => {
  if (isEmpty(data)) return [];

  const pool = pathOr(
    null,
    [addCoinTypeToTokenType(tokenInType), addCoinTypeToTokenType(tokenOutType)],
    data
  );

  // No Hop Swap X -> Y
  if (pool) {
    const poolType = (pool as DynamicFieldInfo).objectType;
    const [coinXType, coinYType] = getCoinsFromPoolType(poolType);

    return [
      {
        baseTokens: [],
        tokenInType,
        tokenOutType,
        functionName:
          tokenInType === coinXType ? DexFunctions.SwapX : DexFunctions.SwapY,
        typeArgs: [coinXType, coinYType],
      },
    ];
  }

  // One Hop Swap
  return DEX_BASE_TOKEN_ARRAY[network].reduce(
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
            functionName: DexFunctions.OneHopSwap,
            typeArgs: [tokenInType, element, tokenOutType],
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
  poolsMap,
  network,
}: GetSwapPayload): TransactionBlock | null => {
  if (isEmpty(poolsMap)) return null;
  if (!tokenIn || !tokenIn.value) return null;

  const path = findMarket({
    data: poolsMap,
    network,
    tokenOutType,
    tokenInType: tokenIn.type,
  });

  if (!path.length) return null;

  const firstSwapObject = path[0];

  const amount = FixedPointMath.toBigNumber(tokenIn.value, tokenIn.decimals);

  const safeAmount = amount.decimalPlaces(0, BigNumber.ROUND_DOWN);

  const txb = new TransactionBlock();
  const objects = OBJECT_RECORD[network];

  const firstCoinVector = createVectorParameter({
    txb,
    coinsMap,
    amount: safeAmount.toString(),
    type: tokenIn.type,
  });

  // no hop swap
  if (!firstSwapObject.baseTokens.length) {
    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
      typeArguments: firstSwapObject.typeArgs,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.object(objects.DEX_STORAGE_STABLE),
        firstCoinVector,
        txb.pure(safeAmount.toString()),
        txb.pure('0'),
      ],
    });
    return txb;
  }

  // One Hop Swap
  if (firstSwapObject.baseTokens.length === 1) {
    txb.moveCall({
      target: `${objects.PACKAGE_ID}::interface::${firstSwapObject.functionName}`,
      typeArguments: firstSwapObject.typeArgs,
      arguments: [
        txb.object(objects.DEX_STORAGE_VOLATILE),
        txb.object(objects.DEX_STORAGE_STABLE),
        firstCoinVector,
        txb.pure(amount.decimalPlaces(0, BigNumber.ROUND_DOWN).toString()),
        txb.pure('0'),
      ],
    });
    return txb;
  }

  return null;
};

export const findSwapAmountOutput = ({
  data,
  packageId,
}: FindSwapAmountOutput) => {
  if (!data) return 0;
  if (!data.events.length) return 0;

  // no hop swap

  const lastEvent = last(data.events);

  if (lastEvent?.packageId !== packageId) return 0;

  return (
    pathOr(null, ['parsedJson', 'coin_x_out'], lastEvent) ??
    pathOr(0, ['parsedJson', 'coin_y_out'], lastEvent)
  );
};
