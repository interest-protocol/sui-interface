import { PropsWithChildren, ReactNode } from 'react';

export interface PreviewTransactionProps {
  handleClose: () => void;
  depositFee: number;
  rewards: string;
  lines: ReadonlyArray<PropsWithChildren<LineWrapperProps>>;
  onClick: () => void;
  isStake: boolean;
}

export interface HeaderModalProps {
  title: string;
  handleClose: () => void;
  withoutBack?: boolean;
}

export interface LineWrapperProps {
  title: string;
  token: string;
  Icon: ReactNode;
}
