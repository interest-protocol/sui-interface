import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { COINS, TOKENS_SVG_MAP_V2 } from '@/constants';
import { CipherSVG, PercentageSVG, SuiSVG } from '@/svg';

import { SUI_BG_COLORS } from '../../lsd.data';
import StatsWrapper from './stats-wrapper';

const TokenIcon: FC<{ type: string }> = ({ type }) => {
  const SVG = TOKENS_SVG_MAP_V2[type] || TOKENS_SVG_MAP_V2.default;
  return <SVG maxHeight="3rem" maxWidth="3rem" width="100%" height="100%" />;
};

const Stats: FC = () => (
  <Box bg="surface.container" p="l" borderRadius="0.5rem">
    <Typography
      variant="extraSmall"
      fontSize="0.688rem"
      color="onSurface"
      mb="l"
      textTransform="capitalize"
    >
      Stats
    </Typography>
    <Box
      display="flex"
      justifyContent="space-between"
      flexWrap="wrap"
      gap="0.5rem"
    >
      <StatsWrapper description="TOTAL SUI STAKED" value="574.43" isCoin>
        <SuiSVG
          filled
          maxHeight="1.5rem"
          maxWidth="1.5rem"
          width="100%"
          height="100%"
        />
      </StatsWrapper>
      <StatsWrapper description="APY" value="100%">
        <PercentageSVG
          maxHeight="1.25rem"
          maxWidth="1.25rem"
          width="100%"
          height="100%"
        />
      </StatsWrapper>
      <StatsWrapper description="TOTAL REWARDS" value="$100">
        <CipherSVG
          maxHeight="2rem"
          maxWidth="2rem"
          width="100%"
          height="100%"
        />
      </StatsWrapper>
    </Box>
    <Box
      display="flex"
      justifyContent="space-between"
      mt="l"
      flexWrap="wrap"
      gap="0.5rem"
    >
      {[1, 2, 3].map(() => (
        <Box key={v4()}>
          <Typography
            variant="extraSmall"
            fontSize="0.688rem"
            color="onSurface"
            opacity={0.6}
            mb="0.625rem"
          >
            Total iSUI minted
          </Typography>
          <Box display="flex" alignItems="center" gap="0.5rem">
            <Box
              width="1.25rem"
              height="1.25rem"
              borderRadius="full"
              color="white"
              bg={SUI_BG_COLORS['iSUI-YC']}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                width="0.875rem"
                height="0.875rem"
                display="flex"
                justifyContent="center"
                alignItems="center"
              >
                <TokenIcon type={COINS[Network.TESTNET].SUI.type} />
              </Box>
            </Box>
            <Typography
              variant="extraSmall"
              fontSize="1.375rem"
              lineHeight="1.75rem"
              color="onSurface"
            >
              1.123
            </Typography>
          </Box>
        </Box>
      ))}
    </Box>
  </Box>
);

export default Stats;
