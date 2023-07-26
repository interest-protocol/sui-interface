export interface WalletItemProps extends WalletItemButtonProps {
  icon?: string;
}

export interface WalletItemButtonProps {
  name: string;
  hasInstalled?: boolean;
}
