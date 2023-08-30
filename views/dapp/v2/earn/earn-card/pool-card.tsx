import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { formatDollars } from '@/utils';

import { PoolCardProps } from '../earn.types';
import { EarnCardTokenIcon } from './earn-card-token-icon';
import HeaderItems from './header-items';

const PoolCard: FC<PoolCardProps> = ({
  apr,
  tvl,
  coin0,
  coin1,
  stable,
  isSingleCoin,
  allocationPoints,
  totalAllocationPoints,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box width="100%">
      <Box
        p="l"
        flex="1"
        gap="2xl"
        display="flex"
        color="onSurface"
        flexDirection="column"
        bg="surface.containerLow"
      >
        <HeaderItems isStable={stable} />
        <Box display="flex" flexWrap="wrap" gap="l">
          <Box gap="m" display="flex">
            <EarnCardTokenIcon
              isSingleCoin={isSingleCoin}
              types={[coin0.type, coin1.type]}
            />
          </Box>
          <Box>
            <Typography
              as="span"
              variant="medium"
              color={dark ? 'white' : 'black'}
            >
              {`${isSingleCoin ? '' : `${coin0.symbol} - `}${coin1.symbol}`}
            </Typography>
            <Typography variant="small" color="onSurfaceVariant">
              {`${apr.decimalPlaces(2).toString()}% ${t('common.apr')}`}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap="m" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('earn.cards.fee')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {stable ? 0.05 : 0.3}%
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('common.tvl')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {formatDollars(tvl)}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('earn.overview.volume')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {0}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('common.allocation')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {allocationPoints
                .dividedBy(totalAllocationPoints)
                .multipliedBy(100)
                .decimalPlaces(2)
                .toString()}
              %
            </Typography>
          </Box>
        </Box>
        <Box gap="s" display="flex" flexDirection={['column', 'column', 'row']}>
          <Button
            size="small"
            variant="outline"
            textAlign="center"
            width={['auto', 'auto', '100%']}
          >
            <Typography variant="small" width="100%" textTransform="capitalize">
              {t('common.v2.navbar.swap')}
            </Typography>
          </Button>
          {!isSingleCoin && (
            <Button
              size="small"
              variant="filled"
              textAlign="center"
              width={['auto', 'auto', '100%']}
              // onClick={() =>
              //   push({ pathname: Routes[RoutesEnum.EarnDetails] }).then()
              // }
            >
              <Typography
                variant="small"
                width="100%"
                textTransform="capitalize"
              >
                {t('earn.cards.addLiquidity')}
              </Typography>
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default PoolCard;
