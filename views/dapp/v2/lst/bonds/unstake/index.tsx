import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useBondsContext } from '../bonds.hooks';
import TransactionSummary from '../components/transaction-summary';
import BondsUnstakeForm from './unstake-form';
import BondsUnstakeHeader from './unstake-header';

const LSTBondsUnstake: FC = () => {
  const t = useTranslations();

  const { form } = useBondsContext();

  const handleSubmit = () => console.log('>> submit ');
  const handleClear = form.reset;

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
          <BondsUnstakeHeader />
          <BondsUnstakeForm />
        </Box>
        <TransactionSummary
          handleClear={handleClear}
          handleSubmit={handleSubmit}
          submitText={t('common.unstake', { isLoading: Number(false) })}
        />
      </Box>
    </Box>
  );
};

export default LSTBondsUnstake;
