import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import CardTop from '@/views/dapp/v2/lend/card/top';

import { APRCardProps } from './card.types';

const APRCard: FC<APRCardProps> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
  symbol,
  amount,
  isLoading,
  disabled,
}) => {
  return (
    <Box
      height="8.375rem"
      width={['unset', 'unset', 'unset', 'unset']}
      p="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border={icon == 'special' ? 'unset' : '1px dashed'}
      borderColor={icon == 'special' ? 'unset' : 'outline.outlineVariant'}
      borderRadius="4px"
      bg={
        icon == 'special'
          ? disabled
            ? 'surface.containerLow'
            : 'primary.primaryContainer'
          : 'unset'
      }
    >
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
          {isLoading ? (
            <Skeleton />
          ) : symbol == '%' ? (
            `${amount} ${symbol}`
          ) : (
            `${symbol} ${amount}`
          )}
        </Typography>
      </Box>
    </Box>
  );
};

export default APRCard;
