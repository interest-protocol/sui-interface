import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

import Box from '../box';
import { BoxProps } from '../box/box.types';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled(Box)<PropsWithChildren<BoxProps>>`
  animation: ${rotate} infinite 1.5s linear;
`;

export default Rotate;
