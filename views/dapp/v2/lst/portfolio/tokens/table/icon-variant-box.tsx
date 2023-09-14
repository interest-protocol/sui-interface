import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { ISuiPCSVG, ISuiSVG } from '@/svg';

import { IconVariantBoxProps } from '../../../lst.types';

const IconVariantBox: FC<IconVariantBoxProps> = ({ symbol }) => (
  <Box
    width="2.25rem"
    height="2.25rem"
    borderRadius="0.25rem"
    display="flex"
    justifyContent="center"
    alignItems="center"
    color="white"
    bg={symbol == 'SUI' ? '#6FBCF0' : 'unset'}
  >
    {symbol == 'SUI' ? (
      <SUISVG maxHeight="2.5rem" maxWidth="2.5rem" width="100%" height="100%" />
    ) : symbol == 'iSui' ? (
      <ISuiSVG
        maxHeight="2.25rem"
        maxWidth="2.25rem"
        width="100%"
        height="100%"
        filled
      />
    ) : (
      <ISuiPCSVG
        maxHeight="2.25rem"
        maxWidth="2.25rem"
        width="100%"
        height="100%"
        filled
      />
    )}
  </Box>
);

export default IconVariantBox;
