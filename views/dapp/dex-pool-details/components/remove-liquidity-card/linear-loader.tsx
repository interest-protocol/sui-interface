import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { Box } from '@/elements';
import { LineLoaderSVG } from '@/svg';

import { LinearLoaderProps } from './remove-liquidity-card.types';

const LinearLoader: FC<LinearLoaderProps> = ({ control }) => {
  const loading = useWatch({ control, name: 'loading' });

  return loading ? (
    <Box mb="L">
      <LineLoaderSVG width="100%" />
    </Box>
  ) : null;
};

export default LinearLoader;
