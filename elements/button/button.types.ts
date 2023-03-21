import { StylinComponentProps } from '@stylin.js/react';
import { ButtonHTMLAttributes, ElementType, RefAttributes } from 'react';

export type ButtonElementProps = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'color' | 'translate'
> &
  RefAttributes<unknown>;

export interface ButtonProps extends StylinComponentProps, ButtonElementProps {
  as?: ElementType;
  variant: 'primary' | 'secondary' | 'tertiary' | 'neutral';
}
