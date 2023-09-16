import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export interface OverviewItem {
  description: string;
  Icon:
    | FC<
        SVGProps & {
          filled?: boolean | undefined;
        }
      >
    | FC<SVGProps>;
  value: number;
}

export interface OverviewRowProps {
  data: ReadonlyArray<OverviewItem>;
}

export interface OverviewProps extends OverviewRowProps {
  title: string;
  isLoading?: boolean;
  error?: boolean;
}
