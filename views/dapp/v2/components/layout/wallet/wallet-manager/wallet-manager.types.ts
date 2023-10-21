import { Dispatch, SetStateAction } from 'react';

export interface IWalletItem {
  name: string;
  icon?: string;
  displayName: string;
  installLink?: string;
}
export interface WalletItemButtonProps
  extends Pick<IWalletItem, 'installLink'> {
  handleConnect: () => void;
}

export interface WalletItemProps extends IWalletItem {
  openWalletModal: (walletName: string) => void;
}

export interface WalletManagerProps {
  openConnectWallet: boolean;
  setOpenConnectWallet: Dispatch<SetStateAction<boolean>>;
}

export interface WalletListSectionProps {
  setOpenWallet: Dispatch<SetStateAction<boolean>>;
  openWalletModal: (walletName: string) => void;
}
