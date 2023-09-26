import { ReactNode } from 'react';

export interface SelectCardProps {
  value?: boolean;
  title?: ReactNode;
  content?: ReactNode;
  onSelect?: (value: boolean) => void;
}
