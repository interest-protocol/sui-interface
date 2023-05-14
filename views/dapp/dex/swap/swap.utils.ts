import { GetCoinOutAmountArgs } from '@interest-protocol/sui-sdk/dist/sdk/sdk.types';
import { TransactionBlock } from '@mysten/sui.js';
import BigNumber from 'bignumber.js';
import { FixedPointMath } from 'lib';
import { isEmpty } from 'ramda';

import { createObjectsParameter } from '@/utils';

import { GetSwapCoinOutAmountPayloadArgs } from './swap.types';

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

export const getSwapCoinOutAmountPayload = ({
  tokenIn,
  tokenOutType,
  coinsMap,
  poolsMap,
  account,
}: GetSwapCoinOutAmountPayloadArgs): GetCoinOutAmountArgs | null => {
  if (isEmpty(poolsMap)) return null;
  if (!tokenIn || !tokenIn.value) return null;

  const amount = FixedPointMath.toBigNumber(tokenIn.value, tokenIn.decimals);

  const safeAmount = amount.decimalPlaces(0, BigNumber.ROUND_DOWN);

  const txb = new TransactionBlock();

  const coinInList = createObjectsParameter({
    txb,
    coinsMap,
    amount: safeAmount.toString(),
    type: tokenIn.type,
  });

  return {
    txb,
    coinInList,
    coinInAmount: safeAmount.toString(),
    coinInType: tokenIn.type,
    coinOutType: tokenOutType,
    dexMarkets: poolsMap,
    account: account ? account : undefined,
  };
};
