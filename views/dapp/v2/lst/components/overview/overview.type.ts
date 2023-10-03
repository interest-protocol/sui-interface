import { DERIVATED_SUI_SYMBOL } from '../../lst.types';

export interface OverviewItem {
  description: string;
  type: DERIVATED_SUI_SYMBOL | 'users';
  value: number;
}

export interface OverviewRowProps {
  data: ReadonlyArray<OverviewItem>;
}

export interface OverviewProps extends OverviewRowProps {
  title: string;
  isLoading?: boolean;
}
