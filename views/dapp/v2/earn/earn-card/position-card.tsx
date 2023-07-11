import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { EarnPositionItemProps } from '../earn.types';
import { EarnCardTokenIcon } from './earn-card-token-icon';

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
              {fee}%
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {`${t('earn.cardInformations.liquidity')}  ${token1.symbol}`}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity.token1}
            </Typography>
          </Box>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="small" color="onSurfaceVariant">
              {`${t('earn.cardInformations.liquidity')}  ${token2.symbol}`}
            </Typography>
            <Typography variant="small" color={dark ? 'white' : 'black'}>
              {liquidity.token2}
            </Typography>
          </Box>
          {farmIPX && (
            <Box display="flex" justifyContent="space-between">
              <Typography variant="small" color="onSurfaceVariant">
                Farm aIPX
              </Typography>
              <Typography variant="small" color={dark ? 'white' : 'black'}>
                {farmIPX}
              </Typography>
            </Box>
          )}
        </Box>
        <Box mt={!farmIPX ? '2rem' : 'unset'}>
          <Button size="small" width="calc(100% - 2.5rem)" variant="filled">
            <Typography variant="small" mx="auto">
              {t('earn.buttons.enter')}
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PositionCard;
