import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import StepTitle from '../../step-title';
import StakeInput from './stake-input';
import StakeMaturity from './stake-maturity';
import StakeValidator from './stake-validator';

const BondsStakeForm: FC = () => {
  const t = useTranslations();

  return (
    <Box mt="xl" display="flex" flexDirection="column" gap="xl">
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectMaturity')} step={1} />
        <StakeMaturity />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectAmount')} step={2} />
        <StakeInput />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectValidator')} step={3} />
        <StakeValidator />
      </Box>
    </Box>
  );
};

export default BondsStakeForm;
