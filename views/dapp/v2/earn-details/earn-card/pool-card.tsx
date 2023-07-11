import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EarnPoolItemProps } from '../earn.types';
import { EarnCardTokenIcon } from './earn-card-token-icon';

const PoolCard: FC<EarnPoolItemProps> = ({
  token1,
  token2,
  apr,
  fee,
  liquidity,
  volume,
  allocation,
  headerOption,
}) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();
  return (
    <Box width="100%">
      <Box
        flex="1"
        bg="surface.containerLow"
        p="1rem"
        display="flex"
        flexDirection="column"
        gap="1.5rem"
        color="onSurface"
      >
        <Box display="flex" gap=".5rem">
          {headerOption.isVolatile && (
            <Button variant="filled" size="small" bg="#FED7AA">
              <Typography variant="small" margin="0 auto" color="#92400E">
                {t('earn.buttons.volatile')}
              </Typography>
            </Button>
          )}
          {headerOption.isStable && (
            <Button variant="filled" size="small" bg="#A5F3FC">
              <Typography variant="small" margin="0 auto" color="#155E75">
                {t('earn.buttons.stable')}
              </Typography>
            </Button>
          )}
          {headerOption.isFarm && (
            <Button variant="filled" size="small" bg="#D9F99D">
              <Typography variant="small" margin="0 auto" color="#3F6212">
                {t('earn.buttons.farm')}
              </Typography>
            </Button>
          )}
        </Box>
        <Box display="flex" flexWrap="wrap" gap="0.938rem">
          <Box gap="0.75rem" display="flex">
            <EarnCardTokenIcon type={token1.type} />
            <EarnCardTokenIcon type={token2.type} />
          </Box>
          <Box>
            <Typography
              as="span"
              variant="medium"
              color={dark ? 'white' : 'black'}
            >
              {`${token1.symbol} - ${token2.symbol}`}
            </Typography>
            <Typography variant="small" color="onSurfaceVariant">
              {`${apr}% ${t('earn.infoCards.apr')}`}
            </Typography>
          </Box>
        </Box>
        <Box display="flex" gap=".75rem" flexDirection="column">
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {t('earn.cardInformations.fee')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {fee}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {t('earn.cardInformations.liquidity')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {t('earn.cardInformations.volume24h')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {volume}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {t('earn.cardInformations.allocationFarm')}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {allocation}
            </Typography>
          </Box>
        </Box>
        <Box
          display="grid"
          gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
          gap="0.5rem"
        >
          <Button size="small" variant="outline" textAlign="center">
            <Typography variant="small" width="100%">
              {t('earn.buttons.swap')}
            </Typography>
          </Button>
          <Button size="small" variant="filled" textAlign="center">
            <Typography variant="small" width="100%">
              {t('earn.buttons.addLiquidity')}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PoolCard;
