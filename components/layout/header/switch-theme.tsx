import { FC } from 'react';

import Box from '@/elements/box';
import { MoonSVG, SunSVG } from '@/svg';

import { SwitchThemeProps } from '../layout.types';

const SwitchTheme: FC<SwitchThemeProps> = ({ changeTheme, dark }) => (
  <Box
    px="S"
    height="2.8rem"
    alignItems="center"
    display="inline-flex"
    justifyContent="center"
    onClick={changeTheme}
    color="text"
    cursor="pointer"
    nHover={{ color: 'accent' }}
  >
    {!dark ? (
      <MoonSVG
        width="1rem"
        maxHeight="3rem"
        maxWidth="3rem"
        fill="currentColor"
      />
    ) : (
      <SunSVG
        width="1rem"
        maxHeight="3rem"
        maxWidth="3rem"
        fill="currentColor"
      />
    )}
  </Box>
);

export default SwitchTheme;
