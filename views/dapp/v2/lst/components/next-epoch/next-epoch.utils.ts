import { DateTimeFormatOptions } from 'next-intl';

import { Locales } from '@/constants/locale';

export interface EpochProgressBarProps {
  endDate: number;
  duration: number;
  size?: 'normal' | 'small';
}

export const getTimeAMPM = (date: Date): string => {
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'pm' : 'am';

  return `${hours % 12 ?? 12}:${minutes < 10 ? 0 : ''}${minutes}${ampm}`;
};

export const getRelativeDate = (startDate: Date, locale: Locales): string => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return startDate.toLocaleDateString(locale, options as DateTimeFormatOptions);
};
