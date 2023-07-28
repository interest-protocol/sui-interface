import { Locales } from '@/constants/locale';

export interface GlobalMenuProps {
  setting: boolean;
  lang: boolean;
}

export interface MenuSettingsProps {
  isOpen: boolean;
  openLanguageMenu: () => void;
}

export interface MenuSettingsListProps {
  openLanguageMenu: () => void;
}

export interface MenuLanguageProps {
  isOpen: boolean;
  onBack?: () => void;
  locales: ReadonlyArray<Locales>;
}

export interface MenuSettingsListHeaderProps {
  handleButton: () => void;
  isOpen: boolean;
}
