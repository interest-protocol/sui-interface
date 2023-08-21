import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Routes, RoutesEnum } from '@/constants';

import { EarnPoolItemProps } from '../earn.types';
import { EarnCardTokenIcon } from './earn-card-token-icon';
import HeaderItems from './header-items';

const PoolCard: FC<EarnPoolItemProps> = ({
  apr,
  fee,
  coin0,
  coin1,
  volume,
  liquidity,
  allocation,
  headerOption,
}) => {
  const t = useTranslations();
  const { push } = useRouter();
  const { dark } = useTheme() as Theme;

  return (
    <Box width="100%">
      <Box
        flex="1"
        bg="surface.containerLow"
        p="l"
        display="flex"
        flexDirection="column"
        gap="2xl"
        color="onSurface"
      >
        <HeaderItems {...headerOption} />
        <Box display="flex" flexWrap="wrap" gap="l">
          <Box gap="m" display="flex">
            <EarnCardTokenIcon type={coin0.type} />
            <EarnCardTokenIcon type={coin1.type} />
          </Box>
          <Box>
            <Typography
              as="span"
              variant="medium"
              color={dark ? 'white' : 'black'}
            >
              {`${coin0.symbol} - ${coin1.symbol}`}
            </Typography>
            <Typography variant="small" color="onSurfaceVariant">
              {`${apr.decimalPlaces(2).toString()}% ${t('common.apr')}`}
            </Typography>
          </Box>
        </Box>
        {/* <Box display="flex" gap="m" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('earn.cards.fee')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {fee}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="small"
              color="onSurfaceVariant"
              textTransform="capitalize"
            >
              {t('common.liquidity')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity}
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
              {volume}
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
              {allocation}
            </Typography>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
          gap="s"
        >
          <Button size="small" variant="outline" textAlign="center">
            <Typography variant="small" width="100%" textTransform="capitalize">
              {t('common.v2.navbar.swap')}
            </Typography>
          </Button>
          <Button
            size="small"
            variant="filled"
            textAlign="center"
            onClick={() =>
              push({ pathname: Routes[RoutesEnum.EarnDetails] }).then()
            }
          >
            <Typography variant="small" width="100%" textTransform="capitalize">
              {t('earn.cards.addLiquidity')}
            </Typography>
          </Button>
        </Box>*/}
      </Box>
    </Box>
  );
};

export default PoolCard;
