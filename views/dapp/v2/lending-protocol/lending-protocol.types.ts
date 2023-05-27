import { ReactNode } from 'react';

export interface CardWrapperProps {
  position: 'left' | 'right';
  buttonDescription: string;
  children?: ReactNode | undefined;
}

export interface CardSectionProps {
  title: string;
  isModal?: boolean;
  lines: ReadonlyArray<LineCardProps>;
}

export interface LineCardProps {
  description: string;
  value: string;
  Icon?: ReactNode;
}

export interface InputSectionProps {
  title: string;
  amount: string;
  Icon: ReactNode;
  placeholder: string;
}

export interface ModalLoadingProps {
  message: string;
}
