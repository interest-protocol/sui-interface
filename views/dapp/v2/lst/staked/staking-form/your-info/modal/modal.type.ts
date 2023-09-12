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
}

export interface LineWrapperProps {
  title: string;
  Icon: ReactNode;
  token: {
    main: string;
    secondary: string;
  };
  reverse?: boolean;
}
