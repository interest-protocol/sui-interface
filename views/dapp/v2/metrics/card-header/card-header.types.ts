import { Dispatch, SetStateAction } from 'react';

export type TFilter = 'all' | 'month' | 'halfMonth' | 'daily';

export interface CardHeaderProps {
  title: string;
  activeFilter?: TFilter;
  filters?: Array<TFilter>;
  setFilter?: Dispatch<SetStateAction<TFilter>>;
}
