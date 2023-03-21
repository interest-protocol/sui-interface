import stylin from '@stylin.js/react';
import { FC, PropsWithChildren } from 'react';

import { BoxElementProps, BoxProps } from './box.types';

const Box: FC<PropsWithChildren<BoxProps>> = ({ as, ...props }) => {
  const StyledBox = stylin<BoxElementProps>(as || 'div')();

  return <StyledBox {...props} />;
};

export default Box;
