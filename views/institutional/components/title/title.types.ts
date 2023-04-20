import { TypographyProps } from '@interest-protocol/ui-kit';
import { PropsWithChildren } from 'react';

export type TitleProps = PropsWithChildren<
  Omit<
    TypographyProps,
    | 'onAnimationStart'
    | 'onDragStart'
    | 'transition'
    | 'onDragEnd'
    | 'variant'
    | 'onDrag'
    | 'ref'
  >
>;
