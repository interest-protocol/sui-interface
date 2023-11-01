import { TFilter } from './card-header.types';

export const TRANSLATION_KEYS: Record<
  TFilter,
  'allTime' | 'oneMonth' | 'fourTeenDays' | 'daily' | 'total'
> = {
  total: 'total',
  all: 'allTime',
  month: 'oneMonth',
  halfMonth: 'fourTeenDays',
  daily: 'daily',
};
