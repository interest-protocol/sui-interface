import { StylinComponentProps } from '@stylin.js/react';
import {
  CSSProperties,
  InputHTMLAttributes,
  ReactNode,
  RefAttributes,
} from 'react';

import { BoxProps } from '../box/box.types';

export type InputElementProps = RefAttributes<unknown> &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'color' | 'translate' | 'height' | 'width'
  >;

export interface InputFieldProps
  extends StylinComponentProps,
    InputElementProps {}

export interface InputProps extends InputFieldProps {
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  Bottom?: ReactNode;
  shieldProps?: BoxProps;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  outline?: CSSProperties['outline'];
}
