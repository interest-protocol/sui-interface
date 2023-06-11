export interface WalletDropdownProps {
  isOpen: boolean;
  loading: boolean;
  addressName: string | undefined;
  handleDisconnect: () => void;
}

export type WalletDropdownWrapperProps = WalletDropdownProps;

export interface WalletItemProps {
  name?: 'disconnect';
}
