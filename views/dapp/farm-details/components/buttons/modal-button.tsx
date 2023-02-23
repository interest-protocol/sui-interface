import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC, useCallback, useState } from 'react';

import { Box, Button } from '@/elements';
import { LoadingSVG } from '@/svg';
import { capitalize, showToast } from '@/utils';

import { ModalButtonProps } from './buttons.types';

const ModalButton: FC<ModalButtonProps> = ({
  farm,
  handleClose,
  refetch,
  setHasAccount,
  isStake,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);

  const handleWithdrawTokens = useCallback(async () => {
    await refetch();
  }, [farm.stakingAmount.toString()]);

  const handleUnstake = () =>
    showToast(handleWithdrawTokens(), {
      loading: capitalize(t('common.unstake', { isLoading: 1 })),
      error: propOr('common.error', 'message'),
      success: capitalize(t('common.success')),
    });

  const handleDepositTokens = async () => {
    if (farm.balance.isZero()) return;

    setLoading(true);
    await refetch();
    setLoading(false);
    handleClose();
  };

  const handleStake = () =>
    showToast(handleDepositTokens(), {
      loading: capitalize(t('common.stake', { isLoading: 1 })),
      error: propOr('common.error', 'message'),
      success: () => {
        setHasAccount(true);
        return capitalize(t('common.success'));
      },
    });

  const onSubmit = async () => {
    isStake ? await handleStake() : await handleUnstake();
  };

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
