import { BoxProps } from '@interest-protocol/ui-kit';

import { Locales } from '@/constants/locale';

export interface MenuDropdownProps {
  isOpen: boolean;
}

export interface MenuItemProps {
  isActive?: boolean;
  name: 'languages' | 'darkMode';
}

export interface LanguageMenuItemProps {
  name: 'title' | Locales;
}

export interface MenuDesktopProps {
  isOpen: boolean;
  handleClose: () => void;
}

export interface MenuMobileProps {
  isOpen: boolean;
  isSettings: boolean;
  handleOpenSettings: () => void;
}

export interface MenuButtonProps {
  isOpen: boolean;
  handleOpen: () => void;
  handleClose: () => void;
}

export interface MenuBackButtonProps {
  showButton: boolean;
  handleBack: () => void;
}

export interface MenuItemWrapperProps
  extends Partial<Pick<BoxProps, 'surface'>> {
  onClick?: () => void;
}
