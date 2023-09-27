import { Box } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
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
        <StepTitle title={t('lst.bonds.unstake.form.selectRedeem')} step={1} />
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
        <StepTitle title={t('lst.bonds.unstake.form.selectAmount')} step={3} />
        <UnstakeInput
          suiPrice={1}
          exchangeRate={1}
          totalBalance={BigNumber(0)}
        />
      </Box>
    </Box>
  );
};

export default BondsUnstakeForm;
