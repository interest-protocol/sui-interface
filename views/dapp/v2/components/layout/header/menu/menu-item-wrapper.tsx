import { Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { AppTheme } from '@/interface';

import { MenuItemWrapperProps } from './menu.types';

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const MenuItemWrapper: FC<PropsWithChildren<MenuItemWrapperProps>> = ({
  onClick,
  children,
}) => {
  const { dark } = useTheme() as AppTheme<Theme>;

  return (
    <Motion
      py="l"
      gap="l"
      px="xl"
      display="flex"
      cursor="pointer"
      minWidth="14rem"
      color="onSurface"
      onClick={onClick}
      alignItems="center"
      fontFamily="Roboto"
      variants={itemVariants}
      initial={itemVariants.closed}
      justifyContent="space-between"
      nHover={{ bg: dark ? '#FFFFFF1A' : '#86868614' }}
    >
      {children}
    </Motion>
  );
};

export default MenuItemWrapper;
