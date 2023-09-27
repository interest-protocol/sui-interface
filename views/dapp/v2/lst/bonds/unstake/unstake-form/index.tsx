import { Box } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import StepTitle from '../../step-title';
import UnstakeInput from './unstake-input';
import UnstakeMaturity from './unstake-maturity';
import UnstakeTokens from './unstake-tokens';

const BondsUnstakeForm: FC = () => {
  const t = useTranslations();

  return (
    <Box my="xl" display="flex" flexDirection="column" gap="xl">
      <Box>
        <StepTitle step={1} title={t('lst.bonds.unstake.form.selectRedeem')} />
        <UnstakeTokens />
      </Box>
      <Box>
        <StepTitle
          step={2}
          title={t('lst.bonds.unstake.form.selectMaturity')}
        />
        <UnstakeMaturity />
      </Box>
      <Box>
        <StepTitle step={3} title={t('lst.bonds.unstake.form.selectAmount')} />
        <UnstakeInput />
      </Box>
    </Box>
  );
};

export default BondsUnstakeForm;
