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
import { VolumeLastSVG } from '@/components/svg/v2';
import { DollarSVG } from '@/svg';
import { formatDollars } from '@/utils';

import TVLCardInfo from './tvl-card-info';

const EarnOverview: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

  const [data, setData] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    Promise.all([
      getMetric('get-tvl'),
      getMetric('get-daily-trading-volume'),
    ]).then(setData);
  }, []);

  return (
    <Box display="flex" variant="container">
      <Box display="grid" gridColumn="1/-1">
        <Box
          gap="s"
          display="grid"
          overflowX="auto"
          gridTemplateColumns="repeat(4, 1fr)"
        >
          <InfoCard
            info={<TVLCardInfo value={0.45} />}
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
                {t('common.tvl')}
              </Box>
            }
          >
            {formatDollars(data[0] ?? 0)}
          </InfoCard>
          <InfoCard
            info={
              <Typography
                as="span"
                variant="small"
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
                  <VolumeLastSVG
                    maxWidth="0.75rem"
                    maxHeight="0.75rem"
                    width="100%"
                  />
                </Box>
                {t('earn.overview.volume')}
              </Box>
            }
          >
            {formatDollars(data[1] ?? 0)}
          </InfoCard>
        </Box>
      </Box>
    </Box>
  );
};

export default EarnOverview;
