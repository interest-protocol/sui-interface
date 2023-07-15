import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { PercentageSVG, UnionSVG } from '@/components/svg/v2';
import { DollarSVG } from '@/svg';

import StateInfo from './state-info';

const EarnFarmOverview: FC = () => {
  const { dark } = useTheme() as Theme;

  return (
    <Box display="grid" gridColumn="1/-1">
      <Box
        gap="8px"
        display="grid"
        overflowX="auto"
        gridTemplateColumns="repeat(4, 1fr)"
      >
        <InfoCard
          info={<StateInfo isUp={true} />}
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
                <UnionSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
              </Box>
              State
            </Box>
          }
        >
          Live
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
                  maxWidth="0.85rem"
                  maxHeight="0.85rem"
                  width="100%"
                />
              </Box>
              TLV
            </Box>
          }
        >
          $10,123.01
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
                <PercentageSVG
                  maxWidth="0.75rem"
                  maxHeight="0.75rem"
                  width="100%"
                />
              </Box>
              APR
            </Box>
          }
        >
          $3,123.01
        </InfoCard>
      </Box>
    </Box>
  );
};

export default EarnFarmOverview;
