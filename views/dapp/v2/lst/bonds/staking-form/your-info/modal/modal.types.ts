import { PropsWithChildren, ReactNode } from 'react';

export interface PreviewTransactionProps {
  handleClose: () => void;
  depositFee: number;
  rewards: string;
  lines: ReadonlyArray<LineWrapperProps>;
  onClick: () => void;
  isStake: boolean;
}

export interface HeaderModalProps {
  title: string;
  handleClose: () => void;
  withoutBack?: boolean;
}

export interface LineWrapperInputProps {
  Icon: ReactNode;
  token: {
    main: string;
    secondary: string;
  };
  reverse?: boolean;
}

export interface LineWrapperProps {
  title: string;
  fields: ReadonlyArray<PropsWithChildren<LineWrapperInputProps>>;
}
