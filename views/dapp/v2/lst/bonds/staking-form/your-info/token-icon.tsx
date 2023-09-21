import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';
import { ISuiPCSVG, ISuiSVG, ISuiYNSVG } from '@/svg';

import { TokenIconProps } from './your-info.types';

const TokenIcon: FC<TokenIconProps> = ({ symbol, size, lessRadius }) => (
  <Box
    display="flex"
    justifyContent="space-between"
    alignItems="center"
    gap="0.5rem"
  >
    <Box
      width={[
        `${size / 2}rem`,
        `${size / 2}rem`,
        `${size / 2}rem`,
        `${size}rem`,
      ]}
      height={[
        `${size / 2}rem`,
        `${size / 2}rem`,
        `${size / 2}rem`,
        `${size}rem`,
      ]}
      borderRadius={lessRadius ? '0.25rem' : 'full'}
      display="flex"
      justifyContent="center"
      alignItems="center"
      color="white"
      bg={symbol == 'SUI' ? '#6FBCF0' : 'unset'}
    >
      {symbol == 'SUI' ? (
        <SUISVG
          maxHeight={`${size * 2}rem`}
          maxWidth={`${size * 2}rem`}
          width="100%"
          height="100%"
        />
      ) : symbol == 'iSui' ? (
        <ISuiSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
          filled
          rounded={!lessRadius}
        />
      ) : symbol == 'iSui-PC' ? (
        <ISuiPCSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
          filled
          rounded={!lessRadius}
        />
      ) : (
        <ISuiYNSVG
          maxHeight={`${size}rem`}
          maxWidth={`${size}rem`}
          width="100%"
          height="100%"
          filled
          rounded={!lessRadius}
        />
      )}
    </Box>
  </Box>
);

export default TokenIcon;