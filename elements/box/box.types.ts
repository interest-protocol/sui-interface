import { StylinComponentProps } from '@stylin.js/react';
import { HTMLAttributes } from 'react';

export type BoxElementProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'color' | 'translate'
>;

export interface BoxProps extends StylinComponentProps, BoxElementProps {
  as?: keyof JSX.IntrinsicElements;
}
