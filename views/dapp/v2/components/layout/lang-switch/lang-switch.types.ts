import { Locales } from '@/constants/locale';

export interface LangSwitchDropdownProps {
  isOpen: boolean;
  locales: ReadonlyArray<Locales>;
}
