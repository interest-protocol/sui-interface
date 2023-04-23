import { ReactNode } from 'react';

export interface ConnectWalletProps {
  connectText?: ReactNode;
  connectedText?: ReactNode;
}

export interface MenuItemProps {
  label: string;
  url: string;
}
