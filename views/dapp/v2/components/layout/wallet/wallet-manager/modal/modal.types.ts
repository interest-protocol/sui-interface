export interface WalletConnectLoadingProps {
  walletName: string;
}

export interface WalletConnectFailModalProps {
  handleClose: () => void;
}

export type WalletConnectResultProps = WalletConnectLoadingProps &
  WalletConnectFailModalProps;
