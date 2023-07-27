import { Dispatch, SetStateAction } from 'react';

export interface WalletItemProps extends WalletItemButtonProps {
  icon?: string;
}

export interface WalletItemButtonProps {
  name: string;
  hasInstalled?: boolean;
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
