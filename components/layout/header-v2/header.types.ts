import { Dispatch, ReactNode, SetStateAction } from 'react';

export interface ConnectWalletProps {
  connectText?: ReactNode;
  connectedText?: ReactNode;
}

export interface MenuItemProps {
  label: string;
  url: string;
}

export interface SubOptionProps {
  isOpen: boolean;
  openLanguageOptions: boolean;
  setOpenLanguageOptions: Dispatch<SetStateAction<boolean>>;
}
