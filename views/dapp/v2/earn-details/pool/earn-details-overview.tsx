import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useEffect, useState } from 'react';

import { getMetric } from '@/api/metrics';
import { MiddlePaperSVG, SwapCurveSVG, VolumeSVG } from '@/components/svg/v2';
import { OBJECT_ID_TO_PAIR, Pair } from '@/constants';
import { capitalize, formatDollars } from '@/utils';

const EarnPoolOverview: FC<{ stable: boolean; objectId: string }> = ({
  stable,
  objectId,
}) => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  const [[tvl, volume], setPoolInfo] = useState<[number, number]>([0, 0]);

  const pair: Pair = OBJECT_ID_TO_PAIR[objectId];

  useEffect(() => {
    getMetric('get-pool-info', `pair=${pair}`).then(({ a, b }) =>
      setPoolInfo([a, b])
    );
  }, []);

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
          {stable ? 0.05 : 0.3}%
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
              {capitalize(t('common.tvl'))}
            </Box>
          }
        >
          {formatDollars(tvl ?? 0, 2)}
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
          {formatDollars(volume ?? 0, 2)}
        </InfoCard>
      </Box>
    </Box>
  );
};

export default EarnPoolOverview;
