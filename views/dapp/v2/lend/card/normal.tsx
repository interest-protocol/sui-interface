import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { CardLendProps } from '../lend.types';
import CardTop from './top';

const NormalCard: FC<CardLendProps> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
  amount,
  isLoading,
}) => {
  return (
    <>
      <CardTop
        icon={icon}
        description={description}
        isTrendUp={isTrendUp}
        trendAmount={trendAmount}
        isLoading={isLoading}
      />
      <Box>
        <Typography
          variant="title6"
          fontWeight="400"
          color="onSurface"
          fontSize={['0.95rem', '0.95rem', '0.95rem', '1.375rem']}
        >
          {isLoading ? <Skeleton /> : amount}
        </Typography>
      </Box>
    </>
  );
};

export default NormalCard;
