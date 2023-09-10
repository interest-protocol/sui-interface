import { Motion } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import {
  fadeTabTransitions,
  scaleTabTransitions,
  slideTabTransitions,
} from '@/constants';

const TabsTransition: FC<
  PropsWithChildren<{ type?: 'fade' | 'slide' | 'scale' }>
> = ({ type, children }) => {
  return (
    <Motion
      initial="out"
      animate="in"
      transformOrigin="top"
      variants={
        type === 'fade'
          ? fadeTabTransitions
          : type === 'slide'
          ? slideTabTransitions
          : type === 'scale'
          ? scaleTabTransitions
          : fadeTabTransitions
      }
    >
      {children}
    </Motion>
  );
};

export default TabsTransition;
