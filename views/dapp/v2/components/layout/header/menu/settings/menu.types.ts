import { Locales } from '@/constants/locale';

export interface GlobalMenuProps {
  setting: boolean;
  lang: boolean;
}

export interface MenuSettingsProps {
  isOpen: boolean;
  handleLanguage: () => void;
}

export interface MenuSettingsListProps {
  handleLanguage: () => void;
}

export interface MenuLanguageProps {
  isOpen: boolean;
  onBack?: () => void;
  locales: ReadonlyArray<Locales>;
}
