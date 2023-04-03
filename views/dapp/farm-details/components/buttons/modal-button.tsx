import { TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import { OBJECT_RECORD } from '@/constants';
import { Box, Button } from '@/elements';
import { useNetwork, useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  processSafeAmount,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';

import { ModalButtonProps } from './buttons.types';

const ModalButton: FC<ModalButtonProps> = ({
  farm,
  mutateFarms,
  mutatePools,
  mutatePendingRewards,
  getValues,
  isStake,
  resetForm,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { coinsMap, account } = useWeb3();
  const { network } = useNetwork();

  const handleWithdrawTokens = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      const value = getValues().amount;
      if (
        farm.accountBalance.isZero() ||
        !+value ||
        farm.accountBalance.lt(+value)
      ) {
        throw new Error(t('farmsDetails.errors.noTokens'));
      }
      setLoading(true);

      const amount = FixedPointMath.toBigNumber(
        value,
        farm.lpCoin.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const safeAmount = amount.gt(farm.accountBalance)
        ? farm.accountBalance
        : amount;

      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::interface::unstake`,
        typeArguments: [farm.lpCoin.type],
        arguments: [
          txb.object(objects.IPX_STORAGE),
          txb.object(objects.IPX_ACCOUNT_STORAGE),
          txb.pure(safeAmount.toString()),
        ],
      });

      const tx = await signAndExecuteTransactionBlock({
        transactionBlock: txb,
        requestType: 'WaitForEffectsCert',
        options: { showEffects: true },
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
      incrementTX(account ?? '');
    } finally {
      mutatePools();
      mutatePendingRewards();
      mutateFarms();
      setLoading(false);
      resetForm();
    }
  };

  const handleUnstake = () =>
    showToast(handleWithdrawTokens(), {
      loading: capitalize(t('common.unstake', { isLoading: 1 })),
      error: propOr('common.error', 'message'),
      success: capitalize(t('common.success')),
    });

  const handleDepositTokens = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      const value = getValues().amount;
      if (farm.lpCoinData.totalBalance.isZero() || !+value) {
        throw new Error(t('error.generic'));
      }

      setLoading(true);

      const amount = FixedPointMath.toBigNumber(
        value,
        farm.lpCoin.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const safeAmount = processSafeAmount(amount, farm.lpCoin.type, coinsMap);
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.PACKAGE_ID}::interface::stake`,
        typeArguments: [farm.lpCoin.type],
        arguments: [
          txb.object(objects.IPX_STORAGE),
          txb.object(objects.IPX_ACCOUNT_STORAGE),
          txb.makeMoveVec({
            objects: coinsMap[farm.lpCoin.type].objects.map((x) =>
              txb.object(x.coinObjectId)
            ),
          }),
          txb.pure(safeAmount.toString()),
        ],
      });
      const tx = await signAndExecuteTransactionBlock({
        transactionBlock: txb,
        requestType: 'WaitForEffectsCert',
        options: { showEffects: true },
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
      incrementTX(account ?? '');
    } finally {
      mutatePools();
      mutatePendingRewards();
      mutateFarms();
      setLoading(false);
      resetForm();
    }
  };

  const handleStake = () =>
    showToast(handleDepositTokens(), {
      loading: capitalize(t('common.stake', { isLoading: 1 })),
      error: propOr('common.error', 'message'),
      success: capitalize(t('common.success')),
    });

  const onSubmit = async () => await (isStake ? handleStake : handleUnstake)();

  return (
    <Button
      ml="L"
      flex="1"
      display="flex"
      variant="primary"
      alignItems="center"
      justifyContent="center"
      bg={loading ? 'accentActive' : 'accent'}
      nHover={{ bg: 'accentActive' }}
      onClick={onSubmit}
      disabled={loading}
    >
      {loading && (
        <Box mr="M" width="1rem">
          <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
        </Box>
      )}
      {capitalize(t('common.confirm', { isLoading: Number(loading) }))}
    </Button>
  );
};

export default ModalButton;
