import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import {} from 'framer-motion';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { DEFAULT_VALIDATOR } from '@/constants/lst';
import { useNetwork } from '@/hooks';

import { useBondsContext } from '../../../bonds.hooks';
import ValidatorSelector from './validator-selector';

const StakeValidator: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const {
    form: { setValue, control },
  } = useBondsContext();
  const { validatorType } = useWatch({
    control,
  });

  const [isValidatorManual, setIsValidatorManual] = useState(
    validatorType == 'manual'
  );

  const [isValidatorAuto, setIsValidatorAuto] = useState(
    validatorType == 'auto'
  );

  useEffect(() => {
    if (validatorType == 'none') {
      setIsValidatorAuto(false);
      setIsValidatorManual(false);
    }
  }, [validatorType]);

  useEffect(() => {
    if (isValidatorAuto) setValue('validator', DEFAULT_VALIDATOR[network]);
  }, [isValidatorAuto]);

  return (
    <>
      <Box display="grid" gap="l" gridTemplateColumns="1fr 1fr" mt="s" py="s">
        <Box display="flex" gap="m" alignItems="center">
          <RadioButton
            defaultValue={isValidatorAuto}
            onClick={() => {
              setIsValidatorAuto(not);
              setIsValidatorManual(false);
              setValue('validatorType', !isValidatorAuto ? 'auto' : 'none');
            }}
          />
          <Typography variant="medium">
            {t('lst.bonds.stake.form.automated')}
          </Typography>
        </Box>
        <Box display="flex" gap="m" alignItems="center">
          <RadioButton
            defaultValue={isValidatorManual}
            onClick={() => {
              setIsValidatorManual(not);
              setIsValidatorAuto(false);
              setValue('validatorType', !isValidatorManual ? 'manual' : 'none');
            }}
          />
          <Typography variant="medium">
            {t('lst.bonds.stake.form.manual')}
          </Typography>
        </Box>
      </Box>
      {isValidatorManual && <ValidatorSelector />}
    </>
  );
};

export default StakeValidator;
