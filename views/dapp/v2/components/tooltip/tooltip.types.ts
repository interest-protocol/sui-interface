import { ReactNode } from 'react';

export interface TooltipProps {
  content: string | ReactNode;
  inverseBackground?: boolean;
}
