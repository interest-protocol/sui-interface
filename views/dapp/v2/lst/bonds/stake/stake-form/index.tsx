import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useState } from 'react';

import StepTitle from '../../step-title';
import StakeInput from './stake-input';
import StakeMaturity from './stake-maturity';
import ValidatorSelect from './validator-select';

const BondsStakeForm: FC = () => {
  const t = useTranslations();
  const [isValidatorManual, setIsValidatorManual] = useState(false);
  const [isValidatorAuto, setIsValidatorAuto] = useState(false);

  return (
    <Box mt="xl" display="flex" flexDirection="column" gap="xl">
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectMaturity')} step={1} />
        <StakeMaturity />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectAmount')} step={2} />
        <StakeInput suiPrice={0} exchangeRate={1} totalBalance={BigNumber(0)} />
      </Box>
      <Box>
        <StepTitle title={t('lst.bonds.stake.form.selectValidator')} step={3} />
        <Box display="grid" gap="l" gridTemplateColumns="1fr 1fr" mt="s" py="s">
          <Box display="flex" gap="m" alignItems="center">
            <RadioButton
              defaultValue={isValidatorAuto}
              onClick={() => {
                setIsValidatorAuto(not);
                setIsValidatorManual(false);
              }}
            />
            <Typography variant="medium">Automated</Typography>
          </Box>
          <Box display="flex" gap="m" alignItems="center">
            <RadioButton
              defaultValue={isValidatorManual}
              onClick={() => {
                setIsValidatorManual(not);
                setIsValidatorAuto(false);
              }}
            />
            <Typography variant="medium">Manual</Typography>
          </Box>
        </Box>
        {isValidatorManual && <ValidatorSelect />}
      </Box>
    </Box>
  );
};

export default BondsStakeForm;
