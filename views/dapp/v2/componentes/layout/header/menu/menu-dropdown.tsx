import { Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { MenuDropdownProps } from './menu.types';
import MenuItem from './menu-item';

const MENU_ITEMS: ReadonlyArray<'languages' | 'darkMode'> = [
  'darkMode',
  'languages',
];

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 24 },
  },
  closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
};

const wrapperVariants = {
  open: {
    clipPath: 'inset(0% 0% 0% 0% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.7,
      delayChildren: 0.3,
      staggerChildren: 0.1,
    },
  },
  closed: {
    clipPath: 'inset(10% 50% 90% 50% round 10px)',
    transition: {
      type: 'spring',
      bounce: 0,
      duration: 0.3,
    },
  },
};

const MenuDropdown: FC<MenuDropdownProps> = ({ isOpen }) => {
  const { dark } = useTheme() as Theme;

  return (
    <Motion
      right="0"
      zIndex={1}
      top="3rem"
      initial="closed"
      borderRadius="m"
      position="absolute"
      variants={wrapperVariants}
      animate={isOpen ? 'open' : 'closed'}
      bg={
        dark
          ? 'linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #1B1B1F'
          : 'linear-gradient(0deg, rgba(0, 85, 255, 0.08), rgba(0, 85, 255, 0.08)), #F2F0F4'
      }
      pointerEvents={isOpen ? 'auto' : 'none'}
    >
      {MENU_ITEMS.map((name) => (
        <Motion
          py="l"
          gap="l"
          px="xl"
          key={v4()}
          color="text"
          display="grid"
          cursor="pointer"
          alignItems="center"
          fontFamily="Roboto"
          variants={itemVariants}
          initial={itemVariants.closed}
          nHover={{ bg: dark ? '#FFFFFF1A' : '#86868614' }}
          gridTemplateColumns="1fr 8rem 1fr"
        >
          <MenuItem name={name} />
        </Motion>
      ))}
    </Motion>
  );
};

export default MenuDropdown;
