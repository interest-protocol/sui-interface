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
      gap="2rem"
      color="onSurface"
    >
      <Box display="flex" gap=".5rem">
        <Button variant="filled" size="small" bg="#FED7AA">
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
      <Box display="flex" gap=".75rem">
        <Box bg="cyan" color="inverseOnSurface" p=".5rem" borderRadius=".25rem">
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
        <Box marginLeft="1.5rem">
          <Typography
            as="span"
            variant="large"
            color={dark ? 'white' : 'black'}
          >
            SUI{' '}
          </Typography>
          -
          <Typography
            as="span"
            variant="large"
            color={dark ? 'white' : 'black'}
          >
            BTCB
          </Typography>
          <Typography variant="medium" color="onSurfaceVariant">
            304.66% {t('earn.infoCards.apr')}
          </Typography>
        </Box>
      </Box>
      <Box display="flex" gap=".75rem" flexDirection="column">
        <Box display="flex" justifyContent="space-between">
          <Typography variant="medium" color="onSurfaceVariant">
            {t('earn.cardInformations.fee')}
          </Typography>
          <Typography variant="medium" color={dark ? 'white' : 'black'}>
            0.3%
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="medium" color="onSurfaceVariant">
            {t('earn.cardInformations.liquidity')}
          </Typography>
          <Typography variant="medium" color={dark ? 'white' : 'black'}>
            $10,123.01
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="medium" color="onSurfaceVariant">
            {t('earn.cardInformations.volume24h')}
          </Typography>
          <Typography variant="medium" color={dark ? 'white' : 'black'}>
            $3,123.01
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="medium" color="onSurfaceVariant">
            {t('earn.cardInformations.allocationFarm')}
          </Typography>
          <Typography variant="medium" color={dark ? 'white' : 'black'}>
            $1.7 M
          </Typography>
        </Box>
      </Box>
      {isPool ? (
        <Box display="flex" gap=".5rem">
          <Button flex="1" size="small" width="100%" variant="outline">
            <Typography variant="small" margin="0 auto">
              {t('earn.buttons.swap')}
            </Typography>
          </Button>
          <Button flex="1" size="small" variant="filled">
            <Typography variant="small" margin="0 auto">
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
