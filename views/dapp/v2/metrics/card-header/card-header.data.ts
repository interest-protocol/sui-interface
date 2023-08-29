import { TFilter } from './card-header.types';

export const TRANSLATION_KEYS: Record<
  TFilter,
  'allTime' | 'oneMonth' | 'fourTeenDays' | 'daily'
> = {
  all: 'allTime',
  month: 'oneMonth',
  halfMonth: 'fourTeenDays',
  daily: 'daily',
};
