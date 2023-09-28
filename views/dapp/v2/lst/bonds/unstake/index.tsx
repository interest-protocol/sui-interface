import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';

import { EXPLORER_URL } from '@/constants';
import { useModal, useNetwork } from '@/hooks';

import { useBondsContext } from '../bonds.hooks';
import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummary from '../components/transaction-summary';
import BondsUnstakeForm from './unstake-form';
import BondsUnstakeHeader from './unstake-header';

const LSTBondsUnstake: FC = () => {
  const t = useTranslations();

  const { network } = useNetwork();
  const { form } = useBondsContext();
  const { setModal, handleClose } = useModal();
  const [isLoading, setIsLoading] = useState(false);

  const openModal = (type: 'loading' | 'success' | 'error', txUrl?: string) => {
    setModal(
      {
        loading: <BondsFormLoadingModal handleClose={handleClose} />,
        error: <BondsFormFailModal handleClose={handleClose} />,
        success: (
          <BondsFormConfirmModal
            onClick={handleClose}
            handleClose={handleClose}
            viewInExplorerLink={txUrl!}
          />
        ),
      }[type],
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
      }
    );
  };

  const handleSubmit = async () => {
    try {
      setIsLoading(true);
      openModal('loading');

      // TODO: submit unstake

      const explorerLink = `${EXPLORER_URL[network]}/txblock/$txdigest`; // TODO: add tx type
      openModal('success', explorerLink);
    } catch {
      openModal('error');
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    form.setValue('maturity', { date: '', epoch: '' });
    form.setValue('amount', '0');
  };

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        gap="xl"
        width="100%"
        display="grid"
        alignItems="flex-start"
        gridTemplateColumns={['1fr', '1fr', '3fr 2fr']}
      >
        <Box
          p="xl"
          width="100%"
          borderRadius="m"
          color="onSurface"
          bg="surface.container"
        >
          <BondsUnstakeHeader />
          <BondsUnstakeForm />
        </Box>
        <TransactionSummary
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          submitText={t('common.unstake', { isLoading: Number(isLoading) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsUnstake;
