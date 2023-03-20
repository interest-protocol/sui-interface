import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes, RefAttributes } from 'react';

export type TypographyElementProps = Omit<
  HTMLAttributes<HTMLElement>,
  'color' | 'translate'
> &
  RefAttributes<unknown>;

export interface TypographyProps
  extends StylinComponentProps,
    TypographyElementProps {
  as?: keyof JSX.IntrinsicElements;
  variant:
    | 'title1'
    | 'title2'
    | 'title3'
    | 'title4'
    | 'normal'
    | 'large'
    | 'button'
    | 'small';
}
