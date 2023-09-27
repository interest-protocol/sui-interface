import { ReactNode } from 'react';

export interface SelectCardProps {
  title?: ReactNode;
  checked?: boolean;
  content?: ReactNode;
  onSelect?: (value: boolean) => void;
}
