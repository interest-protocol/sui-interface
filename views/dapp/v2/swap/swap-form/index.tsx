import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DownArrowSVG } from '@/components/svg/v2';

import SwapFormField from './swap-form-field';
import SwapFormPreview from './swap-form-preview';

const SwapFields: FC = () => (
  <Box display="flex" justifyContent="center" my="l">
    <Box
      width="2.5rem"
      height="2.5rem"
      borderRadius="m"
      color="textSoft"
      border="1px solid"
      alignItems="center"
      display="inline-flex"
      borderColor="textAccent"
      justifyContent="center"
    >
      <DownArrowSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
    </Box>
  </Box>
);

const SwapForm: FC = () => (
  <Box gridColumn="1/-1" width="35.25rem" pt="4xl" mt="4xl">
    <Box pt="4xl">
      <SwapFormField field="from" balance="0.000" />
      <SwapFields />
      <SwapFormField field="to" balance="0.000" />
      <SwapFormPreview />
    </Box>
  </Box>
);

export default SwapForm;
