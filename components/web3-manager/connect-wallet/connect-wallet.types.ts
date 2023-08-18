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

export interface ConnectWalletProps {
  openConnectWallet: boolean;
  setOpenConnectWallet: Dispatch<SetStateAction<boolean>>;
}

export interface IllustrationProps {
  setOpenWallet: Dispatch<SetStateAction<boolean>>;
}

export interface WalletListSectionProps extends IllustrationProps {
  openWalletModal: (walletName: string) => void;
}
