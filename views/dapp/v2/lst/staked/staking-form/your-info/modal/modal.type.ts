import { PropsWithChildren, ReactNode } from 'react';

import { CurrentValidatorProps } from '../your-info.types';

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
  Icon: ReactNode;
  token: {
    main: string;
    secondary: string;
  };
  reverse?: boolean;
}

export interface ValidatorListProps {
  handleClose: () => void;
  currentValidator: CurrentValidatorProps;
  fillValidator: (fillCurrentValidator: CurrentValidatorProps) => void;
}
