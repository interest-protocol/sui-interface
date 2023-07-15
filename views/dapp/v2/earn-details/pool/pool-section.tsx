import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { MiddlePaperSVG, SwapCurveSVG, VolumeSVG } from '@/components/svg/v2';

import AddLiquidityCard from './pool-card/add-liquidity';
import RemoveLiquidityCard from './pool-card/remove-liquidity';

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
                  <MiddlePaperSVG
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
                  <SwapCurveSVG
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
                  <VolumeSVG
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
        display="grid"
        gridTemplateColumns={[
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, 1fr)',
          'repeat(auto-fit, minmax(17rem, 1fr))',
        ]}
        gap={['0.5rem', '0.5rem', '0.5rem', '1.5rem']}
      >
        <AddLiquidityCard />
        <RemoveLiquidityCard />
      </Box>
    </Box>
  );
};

export default EarnPoolSection;
