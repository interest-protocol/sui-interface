import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { noop } from 'swr/_internal';

import { useModal } from '@/hooks';

import { useBondsContext } from '../bonds.hooks';
import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummary from '../components/transaction-summary';
import BondsStakeForm from './stake-form';
import BondsStakeHeader from './stake-header';

const LSTBondsStake: FC = () => {
  const t = useTranslations();
  const { form } = useBondsContext();
  const { setModal, handleClose } = useModal();
  const txUrlMock = 'https://burrrd.club';

  const handleSubmit = () => {
    openModal('loading');
    setTimeout(() => {
      openModal('success');
    }, 4000);
  };

  const handleClear = () => {
    form.setValue('maturity', { date: '', id: '' });
    form.setValue('amount', '0');
  };

  const openModal = (type: 'loading' | 'success' | 'error') => {
    setModal(
      {
        loading: <BondsFormLoadingModal handleClose={handleClose} />,
        error: <BondsFormFailModal handleClose={handleClose} />,
        success: (
          <BondsFormConfirmModal
            onClick={noop}
            handleClose={handleClose}
            viewInExplorerLink={txUrlMock}
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

  return (
    <Box variant="container" display="flex">
      <Box
        gap="xl"
        width="100%"
        display="grid"
        gridTemplateColumns={['1fr', '1fr', '3fr 2fr']}
      >
        <Box
          p="xl"
          width="100%"
          borderRadius="m"
          color="onSurface"
          bg="surface.container"
        >
          <BondsStakeHeader />
          <BondsStakeForm />
        </Box>
        <TransactionSummary
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          submitText={t('common.stake', { isLoading: Number(false) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsStake;
