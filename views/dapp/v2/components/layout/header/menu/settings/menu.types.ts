import { Locales } from '@/constants/locale';

export interface GlobalMenuProps {
  setting: boolean;
  lang: boolean;
}

export interface MenuLanguageProps {
  locales: ReadonlyArray<Locales>;
}

export interface MenuSettingsListHeaderProps {
  handleButton: () => void;
  isOpen: boolean;
}
