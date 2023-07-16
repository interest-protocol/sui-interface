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
import { capitalize } from '@/utils';

import { EarnPositionItemProps } from '../earn.types';
import { EarnCardTokenIcon } from './earn-card-token-icon';
import HeaderItems from './header-items';

const PositionCard: FC<EarnPositionItemProps> = ({
  token1,
  token2,
  apr,
  fee,
  liquidity,
  farmIPX,
  headerOption,
}) => {
  const { dark } = useTheme() as Theme;
  const { push } = useRouter();
  const t = useTranslations();
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
        <Box display="flex" flexWrap="wrap" gap="0.938rem">
          <Box gap="m" display="flex">
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
              {`${apr}% ${t('common.apr')}`}
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
              {fee}%
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {`${capitalize(t('common.liquidity'))}  ${token1.symbol}`}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity.token1}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {`${capitalize(t('common.liquidity'))}  ${token2.symbol}`}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity.token2}
            </Typography>
          </Box>
          {farmIPX && (
            <Box display="flex" justifyContent="space-between">
              <Typography variant="small" color="onSurfaceVariant">
                {capitalize(t('common.liquidity'))} aIPX
              </Typography>
              <Typography variant="small" color={dark ? 'white' : 'black'}>
                {farmIPX}
              </Typography>
            </Box>
          )}
        </Box>
        <Box mt={!farmIPX ? '3xl' : 'unset'}>
          <Button
            size="small"
            width="calc(100% - 2.5rem)"
            variant="filled"
            onClick={() =>
              push({ pathname: Routes[RoutesEnum.EarnDetails] }).then()
            }
          >
            <Typography variant="small" mx="auto" textTransform="capitalize">
              {t('common.enter')}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PositionCard;
