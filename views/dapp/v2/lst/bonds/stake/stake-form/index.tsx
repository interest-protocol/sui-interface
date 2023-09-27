import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import StepTitle from '../../step-title';
import StakeInput from './stake-input';
import StakeMaturity from './stake-maturity';

const BondsStakeForm: FC = () => {
  const t = useTranslations();

  return (
    <Box my="xl" display="flex" flexDirection="column" gap="xl">
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectMaturity')} step={1} />
        <StakeMaturity />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectAmount')} step={2} />
        <StakeInput suiPrice={1} exchangeRate={1} totalBalance={BigNumber(0)} />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectValidator')} step={3} />
        <Box display="grid" gap="l" gridTemplateColumns="1fr 1fr" mt="s">
          <Box display="flex" gap="m">
            <RadioButton />
            <Typography variant="medium">Automated</Typography>
          </Box>
          <Box display="flex" gap="m">
            <RadioButton />
            <Typography variant="medium">Manual</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BondsStakeForm;
