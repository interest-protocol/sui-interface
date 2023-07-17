import { Locales } from '@/constants/locale';

export interface LangSwitchDropdownProps {
  isOpen: boolean;
  onClick?: () => void;
  locales: ReadonlyArray<Locales>;
}
