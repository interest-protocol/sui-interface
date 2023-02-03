import { FC } from 'react';

import { Box } from '@/elements';
import { LineLoaderSVG } from '@/svg';

import { LinearLoaderProps } from './remove-liquidity-card.types';

const LinearLoader: FC<LinearLoaderProps> = ({ loading }) =>
  loading ? (
    <Box mb="L">
      <LineLoaderSVG width="100%" />
    </Box>
  ) : null;

export default LinearLoader;
