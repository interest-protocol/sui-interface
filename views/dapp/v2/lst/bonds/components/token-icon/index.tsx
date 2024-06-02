import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ISuiPSVG, ISuiSVG, ISuiYNSVG, SUISVG } from '@/components/svg/v2';

import { TokenIconProps } from './token-icon.type';

const TokenIcon: FC<TokenIconProps> = ({ id, size, lessRadius }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap="0.5rem"
  >
    <Box
      width={`${size}rem`}
      height={`${size}rem`}
      borderRadius={lessRadius ? '0.25rem' : 'full'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      bg={id == 'SUI' ? '#6FBCF0' : 'unset'}
    >
      {id == 'SUI' ? (
        <SUISVG
          maxHeight={`${size * 2}rem`}
          maxWidth={`${size * 2}rem`}
          width="100%"
          height="100%"
        />
      ) : id == 'iSui' ? (
        <ISuiSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
          filled
        />
      ) : id == 'iSUIP' ? (
        <ISuiPSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
        />
      ) : (
        <ISuiYNSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
        />
      )}
    </Box>
  </Box>
);

export default TokenIcon;
