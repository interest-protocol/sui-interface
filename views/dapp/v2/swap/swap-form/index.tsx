import { Box, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DownArrowSVG } from '@/components/svg/v2';

import SwapFormField from './swap-form-field';
import SwapFormPreview from './swap-form-preview';

const SwapFields: FC = () => {
  const { dark } = useTheme() as Theme;

  return (
    <Box display="flex" justifyContent="center" my="l">
      <Box
        width="2.5rem"
        height="2.5rem"
        cursor="pointer"
        borderRadius="m"
        border="1px solid"
        alignItems="center"
        display="inline-flex"
        justifyContent="center"
        color={dark ? 'textSoft' : 'text'}
        borderColor={dark ? 'textAccent' : '#757680'}
      >
        <DownArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Box>
    </Box>
  );
};

const SwapForm: FC = () => (
  <Box maxWidth="35.25rem" width="100%" pt="7rem">
    <SwapFormField field="from" balance="0.000" />
    <SwapFields />
    <SwapFormField field="to" balance="0.000" />
    <SwapFormPreview />
  </Box>
);

export default SwapForm;
