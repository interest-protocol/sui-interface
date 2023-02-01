import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, Typography } from '@/elements';

import { LiquidityDetailsCardProps } from '../../dex-pool-details.types';
import LiquidityDetailsCardLine from './liquidity-details-card-line';

const LiquidityDetailsCard: FC<LiquidityDetailsCardProps> = ({
  lines,
  isStable,
}) => {
  const t = useTranslations();
  return (
    <Box
      p="L"
      width="100%"
      display="flex"
      bg="foreground"
      borderRadius="M"
      flexDirection="column"
    >
      <Typography
        width="100%"
        fontSize="S"
        variant="normal"
        textTransform="uppercase"
      >
        {t('common.liquidity')}
      </Typography>
      <Box
        py="M"
        px="L"
        my="XL"
        borderRadius="L"
        color="textSecondary"
        bg="bottomBackground"
        border="0.09rem solid"
      >
        {lines.map((line) => (
          <LiquidityDetailsCardLine
            key={v4()}
            value={line.value}
            symbol={line.symbol}
            address={line.address}
            isFetchingInitialData={line.isFetchingInitialData}
          />
        ))}
      </Box>
      <Box>
        <Typography
          variant="normal"
          lineHeight="2rem"
          textTransform="capitalize"
        >
          {t('common.type')}:{' '}
          <Typography
            as="strong"
            variant="normal"
            fontWeight="600"
            fontSize="inherit"
          >
            {t(isStable ? 'common.stable' : 'common.volatile', {
              count: 1,
            })}
          </Typography>
        </Typography>
        <Typography variant="normal" lineHeight="2rem">
          {t('dexPoolPairAddress.sectionCustomDetail2')}:{' '}
          <Typography
            as="strong"
            variant="normal"
            fontWeight="600"
            fontSize="inherit"
          >
            {isStable ? '0.05' : '0.3'}%
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default LiquidityDetailsCard;
