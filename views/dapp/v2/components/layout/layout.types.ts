import { ReactNode } from 'react';

export interface LayoutProps {
  dashboard?: boolean;
  titlePage?: ReactNode;
}

export interface NetworkSwitchProps {
  withoutInfo?: boolean;
}
