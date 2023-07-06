import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { SUISVG } from '@/components/svg/v2';

interface MediumCardProps {
  isPool?: boolean;
  isPosition?: boolean;
}

const MediumCard: FC<MediumCardProps> = ({ isPool, isPosition }) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();
  return (
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
        <Button
          variant="filled"
          size="small"
          bg="#FED7AA"
          py="0.375rem"
          px="1rem"
        >
          <Typography variant="small" margin="0 auto" color="#92400E">
            {t('earn.buttons.volatile')}
          </Typography>
        </Button>
        <Button variant="filled" size="small" bg="#D9F99D">
          <Typography variant="small" margin="0 auto" color="#3F6212">
            {t('earn.buttons.farm')}
          </Typography>
        </Button>
      </Box>
      <Box display="flex">
        <Box gap="0.75rem" display="flex">
          <Box
            bg="cyan"
            color="inverseOnSurface"
            p=".5rem"
            borderRadius=".25rem"
          >
            <SUISVG maxHeight="100%" maxWidth="100%" width="2rem" />
          </Box>
          <Box
            bg="primary"
            color="inverseOnSurface"
            p=".5rem"
            borderRadius=".25rem"
          >
            <SUISVG maxHeight="100%" maxWidth="100%" width="2rem" />
          </Box>
        </Box>
        <Box ml="0.938rem">
          <Typography
            as="span"
            variant="medium"
            color={dark ? 'white' : 'black'}
          >
            SUI{' '}
          </Typography>
          -
          <Typography
            as="span"
            variant="medium"
            color={dark ? 'white' : 'black'}
          >
            {' '}
            BTCB
          </Typography>
          <Typography variant="small" color="onSurfaceVariant">
            304.66% {t('earn.infoCards.apr')}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap=".75rem" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="small" color="onSurfaceVariant">
            {t('earn.cardInformations.fee')}
          </Typography>
          <Typography variant="small" color={dark ? 'white' : 'black'}>
            0.3%
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="small" color="onSurfaceVariant">
            {t('earn.cardInformations.liquidity')}
          </Typography>
          <Typography variant="small" color={dark ? 'white' : 'black'}>
            $10,123.01
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="small" color="onSurfaceVariant">
            {t('earn.cardInformations.volume24h')}
          </Typography>
          <Typography variant="small" color={dark ? 'white' : 'black'}>
            $3,123.01
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="small" color="onSurfaceVariant">
            {t('earn.cardInformations.allocationFarm')}
          </Typography>
          <Typography variant="small" color={dark ? 'white' : 'black'}>
            $1.7 M
          </Typography>
        </Box>
      </Box>
      {isPool ? (
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
      ) : isPosition ? (
        <Box>
          <Button size="small" width="calc(100% - 2.5rem)" variant="filled">
            <Typography variant="small" mx="auto">
              {t('earn.buttons.enter')}
            </Typography>
          </Button>
        </Box>
      ) : null}
    </Box>
  );
};

export default MediumCard;
