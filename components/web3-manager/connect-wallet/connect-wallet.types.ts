import { Dispatch, SetStateAction } from 'react';

export interface IWalletItem {
  name: string;
  icon?: string;
  installLink?: string;
}

export interface WalletItemProps extends WalletItemButtonProps {
  icon?: string;
}

export interface WalletItemButtonProps {
  name: string;
  installLink?: string;
  openWalletModal?: (walletName: string) => void;
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
