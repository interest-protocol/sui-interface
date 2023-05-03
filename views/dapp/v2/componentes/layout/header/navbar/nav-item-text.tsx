import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { NavItemTextProps } from './navbar.types';

const NavItemText: FC<PropsWithChildren<NavItemTextProps>> = ({
  children,
  isSelected,
}) => (
  <Box px={['2xl', '2xl', '2.75rem']} fontFamily="'Roboto'">
    <Typography variant="small" py="m">
      {children}
    </Typography>
    {isSelected && (
      <Motion
        p="3xs"
        bg="primary"
        width="1.875rem"
        layoutId="underline"
        borderTopLeftRadius="s"
        borderTopRightRadius="s"
      />
    )}
  </Box>
);

export default NavItemText;
