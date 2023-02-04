import { ButtonHTMLAttributes, CSSProperties, ElementType } from 'react';
import {
  BackgroundProps,
  BorderProps,
  ColorProps,
  DisplayProps,
  FlexboxProps,
  LayoutProps,
  PositionProps,
  ShadowProps,
  SpaceProps,
  TypographyProps,
} from 'styled-system';

import { TStyles } from '@/stylin/stylin.types';

export interface ButtonProps
  extends ColorProps,
    SpaceProps,
    PositionProps,
    BorderProps,
    LayoutProps,
    FlexboxProps,
    DisplayProps,
    ShadowProps,
    BackgroundProps,
    TypographyProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'color'> {
  as?: ElementType;
  hover?: TStyles;
  active?: TStyles;
  cursor?: CSSProperties['cursor'];
  variant: 'primary' | 'secondary' | 'tertiary' | 'neutral';
}
