import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useBondsContext } from '../bonds.hooks';
import TransactionSummary from '../components/transaction-summary';
import BondsStakeForm from './stake-form';
import BondsStakeHeader from './stake-header';

const LSTBondsStake: FC = () => {
  const t = useTranslations();
  const { form } = useBondsContext();
  const handleSubmit = () => {
    console.log('>> submit <<');
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
          handleClear={form.reset}
          handleSubmit={handleSubmit}
          submitText={t('common.stake', { isLoading: Number(false) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsStake;