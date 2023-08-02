import { Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { wrapperVariants } from '@/constants';

import { MenuSettingsProps } from '../menu.types';
import MenuSettingsContent from './settings-list';

const MenuSettings: FC<MenuSettingsProps> = ({ isOpen, openLanguageMenu }) => (
  <Motion
    right="0"
    top="3rem"
    zIndex={1}
    initial="closed"
    borderRadius="m"
    position="absolute"
    bg="surface.container"
    variants={wrapperVariants}
    textTransform="capitalize"
    animate={isOpen ? 'open' : 'closed'}
    pointerEvents={isOpen ? 'auto' : 'none'}
  >
    <MenuSettingsContent openLanguageMenu={openLanguageMenu} />
  </Motion>
);

export default MenuSettings;
