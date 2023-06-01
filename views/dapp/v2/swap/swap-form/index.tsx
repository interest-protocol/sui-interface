import { Box, Button, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DownArrowSVG } from '@/components/svg/v2';

import { SwapFieldProps, SwapProps } from '../swap.types';
import SwapFormField from './swap-form-field';
import SwapFormPreview from './swap-form-preview';

const SwapFields: FC<SwapFieldProps> = ({ setValue, getValues }) => {
  const { dark } = useTheme() as Theme;

  const handleClick = () => {
    const { to, from } = getValues();

    setValue('from', { ...to, value: '0.0' });
    setValue('to', { ...from, value: '0.0' });
  };

  return (
    <Box display="flex" justifyContent="center" my="l">
      <Button
        variant="icon"
        cursor="pointer"
        borderRadius="m"
        border="1px solid"
        alignItems="center"
        display="inline-flex"
        onClick={handleClick}
        justifyContent="center"
        color={dark ? 'textSoft' : 'text'}
        borderColor={dark ? 'textAccent' : '#757680'}
      >
        <DownArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Button>
    </Box>
  );
};

const SwapForm: FC<SwapProps> = ({ form }) => (
  <Box maxWidth="35.25rem" width="100%" pt="7rem">
    <SwapFormField name="from" form={form} />
    <SwapFields setValue={form.setValue} getValues={form.getValues} />
    <SwapFormField name="to" form={form} />
    <SwapFormPreview />
  </Box>
);

export default SwapForm;
