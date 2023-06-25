import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { PlusCircleSVG } from '@/svg';

import { CardLendProps } from '../lend.types';
import NormalCard from './normal';

const Card: FC<CardLendProps> = ({
  icon,
  description,
  isTrendUp,
  trendAmount,
  symbol,
  amount,
  isLoading,
}) => {
  const t = useTranslations();
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
      bg={icon == 'special' ? 'primary.primaryContainer' : 'unset'}
    >
      {icon == 'special' ? (
        <Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width={['2rem', '2rem', '2rem', '2.5rem']}
            height={['2rem', '2rem', '2rem', '2.5rem']}
            bg="onSurface"
            color="inverseOnSurface"
            borderRadius="0.25rem"
            mb={['0.45rem', '0.45rem', '0.45rem', '0.875rem']}
          >
            <PlusCircleSVG
              maxWidth="1.125rem"
              maxHeight="1.125rem"
              width="1.125rem"
              height="1.125rem"
            />
          </Box>
          <Box>
            <Typography
              variant="medium"
              color="onSurface"
              fontSize={['s', 's', 's', 'm']}
            >
              {t('common.v2.lend.rewards')}
            </Typography>
            <Typography
              variant="small"
              color="onSurfaceVariant"
              fontSize={['xs', 'xs', 'xs', 's']}
            >
              {t('Lend.collectTokens')}
            </Typography>
          </Box>
        </Box>
      ) : (
        <NormalCard
          icon={icon}
          description={description}
          isTrendUp={isTrendUp}
          trendAmount={trendAmount}
          symbol={symbol}
          amount={amount}
          isLoading={isLoading}
        />
      )}
    </Box>
  );
};

export default Card;
