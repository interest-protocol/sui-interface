import { CSSProperties, InputHTMLAttributes, ReactNode } from 'react';
import {
  BorderProps,
  ColorProps,
  DisplayProps,
  LayoutProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { BoxProps } from '../box/box.types';
import { TStyles } from './../../stylin/stylin.types';

export interface InputFieldProps
  extends ColorProps,
    SpaceProps,
    BorderProps,
    DisplayProps,
    LayoutProps,
    ShadowProps,
    TypographyProps,
    Omit<
      InputHTMLAttributes<HTMLInputElement>,
      'color' | 'width' | 'height' | 'size'
    > {
  focus?: TStyles;
}

export interface InputProps extends InputFieldProps {
  Prefix?: ReactNode;
  Suffix?: ReactNode;
  Bottom?: ReactNode;
  shieldProps?: BoxProps;
  onClickPrefix?: () => void;
  onClickSuffix?: () => void;
  outline?: CSSProperties['outline'];
}
