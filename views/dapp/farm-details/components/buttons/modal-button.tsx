import { useWalletKit } from '@mysten/wallet-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC, useState } from 'react';

import { incrementTX } from '@/api/analytics';
import {
  FARMS_PACKAGE_ID,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import { Box, Button } from '@/elements';
import { useWeb3 } from '@/hooks';
import { FixedPointMath } from '@/sdk';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  getCoinIds,
  processSafeAmount,
  showToast,
  showTXSuccessToast,
  sleep,
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
  const { signAndExecuteTransaction } = useWalletKit();
  const { coinsMap, account } = useWeb3();

  const handleWithdrawTokens = async () => {
    try {
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

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'unstake',
          gasBudget: 15000,
          module: 'interface',
          packageObjectId: FARMS_PACKAGE_ID,
          typeArguments: [farm.lpCoin.type],
          arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE, safeAmount.toString()],
        },
      });
      await showTXSuccessToast(tx);
      incrementTX(account ?? '');
      await sleep(3000);
      await Promise.all([
        mutateFarms((data) =>
          data
            ? [
                {
                  ...data[0],
                  accountBalance: data[0].accountBalance.minus(safeAmount),
                },
              ]
            : []
        ),
        mutatePendingRewards(0n),
      ]);
    } finally {
      mutatePools();
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
      const value = getValues().amount;
      if (farm.lpCoinData.totalBalance.isZero() || !+value) {
        throw new Error('Cannot deposit 0 tokens');
      }

      setLoading(true);

      const amount = FixedPointMath.toBigNumber(
        value,
        farm.lpCoin.decimals
      ).decimalPlaces(0, BigNumber.ROUND_DOWN);

      const safeAmount = processSafeAmount(
        amount,
        farm.lpCoin.type,
        coinsMap,
        15000
      );

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'stake',
          gasBudget: 15000,
          module: 'interface',
          packageObjectId: FARMS_PACKAGE_ID,
          typeArguments: [farm.lpCoin.type],
          arguments: [
            IPX_STORAGE,
            IPX_ACCOUNT_STORAGE,
            getCoinIds(coinsMap, farm.lpCoinData.type),
            safeAmount.toString(),
          ],
        },
      });
      await showTXSuccessToast(tx);
      incrementTX(account ?? '');
      await sleep(3000);
      await Promise.all([
        mutateFarms((data) =>
          data
            ? [
                {
                  ...data[0],
                  accountBalance: data[0].accountBalance.plus(safeAmount),
                },
              ]
            : []
        ),
        mutatePendingRewards(0n),
      ]);
    } finally {
      mutatePools();
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
      hover={{ bg: 'accentActive' }}
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
