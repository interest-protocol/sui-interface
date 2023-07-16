import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { MiddlePaperSVG, SwapCurveSVG, VolumeSVG } from '@/components/svg/v2';
import { capitalize } from '@/utils';

const EarnPoolSectionOverview: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  return (
    <Box display="grid" gridColumn="1/-1">
      <Box
        gap="s"
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
              {capitalize(t('earnDetails.overview.fee'))}
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
              {capitalize(t('common.liquidity'))}
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
              {capitalize(t('earnDetails.overview.volume'))}
            </Box>
          }
        >
          $15,123.01
        </InfoCard>
      </Box>
    </Box>
  );
};

export default EarnPoolSectionOverview;
