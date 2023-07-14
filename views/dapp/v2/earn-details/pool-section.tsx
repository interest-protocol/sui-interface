import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { DollarSVG } from '@/svg';

import LiquidityCardAdd from './liquidity-card/add';
import LiquidityCardRemove from './liquidity-card/remove';

const EarnPoolSection: FC = () => {
  const { dark } = useTheme() as Theme;

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box display="grid" gridColumn="1/-1">
        <Box
          gap="8px"
          display="grid"
          overflowX="auto"
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <InfoCard
            info=""
            title={
              <Box as="span" display="flex" alignItems="center" gap="m">
                <Box
                  as="span"
                  width="1.3rem"
                  height="1.3rem"
                  alignItems="center"
                  borderRadius="full"
                  bg="inverseSurface"
                  display="inline-flex"
                  justifyContent="center"
                  color={dark ? 'black' : 'white'}
                >
                  <DollarSVG
                    maxWidth="0.75rem"
                    maxHeight="0.75rem"
                    width="100%"
                  />
                </Box>
                Fee
              </Box>
            }
          >
            $82,123.01
          </InfoCard>
          <InfoCard
            info=""
            title={
              <Box as="span" display="flex" alignItems="center" gap="m">
                <Box
                  as="span"
                  width="1.3rem"
                  height="1.3rem"
                  alignItems="center"
                  borderRadius="full"
                  bg="inverseSurface"
                  display="inline-flex"
                  justifyContent="center"
                  color={dark ? 'black' : 'white'}
                >
                  <DollarSVG
                    maxWidth="0.75rem"
                    maxHeight="0.75rem"
                    width="100%"
                  />
                </Box>
                Liquidity
              </Box>
            }
          >
            $82,123.01
          </InfoCard>
          <InfoCard
            info={
              <Typography
                variant="small"
                as="span"
                color="secondary.onSecondaryContainer"
              >
                24h
              </Typography>
            }
            title={
              <Box as="span" display="flex" alignItems="center" gap="m">
                <Box
                  as="span"
                  width="1.3rem"
                  height="1.3rem"
                  alignItems="center"
                  borderRadius="full"
                  bg="inverseSurface"
                  display="inline-flex"
                  justifyContent="center"
                  color={dark ? 'black' : 'white'}
                >
                  <DollarSVG
                    maxWidth="0.75rem"
                    maxHeight="0.75rem"
                    width="100%"
                  />
                </Box>
                Volume
              </Box>
            }
          >
            $15,123.01
          </InfoCard>
        </Box>
      </Box>
      <Box
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['0.5rem', '0.5rem', '0.5rem', '1.5rem']}
      >
        <LiquidityCardAdd />
        <LiquidityCardRemove />
      </Box>
    </Box>
  );
};

export default EarnPoolSection;
