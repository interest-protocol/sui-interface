import stylin from '@stylin.js/react';
import { forwardRef, PropsWithChildren, RefAttributes } from 'react';

import { BoxElementProps, BoxProps } from '../box/box.types';

const RefBox = forwardRef(
  ({ as, ...props }: PropsWithChildren<BoxProps>, ref) => {
    const BoxElement = stylin<BoxElementProps & RefAttributes<unknown>>(
      as || 'div'
    )();

    return <BoxElement {...props} ref={ref} />;
  }
);

RefBox.displayName = 'RefBox';

export default RefBox;
