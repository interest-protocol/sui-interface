import { ReactNode } from 'react';

export interface TooltipProps {
  tooltipContent: string | ReactNode;
  arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
  tooltipPosition: 'top' | 'bottom' | 'left' | 'right';
}
