import { Box, RadioButton, Typography } from '@interest-protocol/ui-kit';
import {} from 'framer-motion';
import { not } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { DEFAULT_VALIDATOR } from '@/constants/lst';
import { useNetwork } from '@/hooks';

import { useBondsContext } from '../../../bonds.hooks';
import ValidatorSelector from './validator-selector';

const StakeValidator: FC = () => {
  const { network } = useNetwork();
  const {
    form: { setValue },
  } = useBondsContext();
  const [isValidatorManual, setIsValidatorManual] = useState(false);
  const [isValidatorAuto, setIsValidatorAuto] = useState(false);

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
      {isValidatorManual && <ValidatorSelector />}
    </>
  );
};

export default StakeValidator;
