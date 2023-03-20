import stylin from '@stylin.js/react';
import { PropsWithChildren } from 'react';
import InfiniteScroll_, { Props } from 'react-infinite-scroll-component';

import { BoxElementProps } from '../box/box.types';

const InfiniteScroll = stylin<PropsWithChildren<BoxElementProps & Props>>(
  InfiniteScroll_ as any
)();

export default InfiniteScroll;
