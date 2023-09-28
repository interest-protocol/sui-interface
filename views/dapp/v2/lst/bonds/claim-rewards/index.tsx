import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { noop } from 'swr/_internal';

import { useModal } from '@/hooks';

import { useBondsContext } from '../bonds.hooks';
import BondsFormConfirmModal from '../components/modal/confirm-modal';
import BondsFormFailModal from '../components/modal/fail-modal';
import BondsFormLoadingModal from '../components/modal/loading-modal';
import TransactionSummaryContainer from '../components/transaction-summary';
import BondsClaimRewardsMaturity from './maturity';
import NonRewards from './non-rewards';

const BondsClaimRewards: FC = () => {
  const hasRewards = false;

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
    form.setValue('maturity', { date: '', epoch: '' });
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

  if (hasRewards) return <NonRewards />;

  return (
    <Box
      gap="l"
      flexDirection="column"
      gridTemplateColumns="3fr 2fr"
      display={['flex', 'flex', 'flex', 'grid']}
    >
      <BondsClaimRewardsMaturity />
      <TransactionSummaryContainer
        handleClear={handleClear}
        handleSubmit={handleSubmit}
        submitText={t('lst.bonds.clamRewards.title')}
      />
    </Box>
  );
};

export default BondsClaimRewards;
