import {
  Box,
  InfoCard,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { VolumeSVG } from '@/components/svg/v2';
import { DollarSVG } from '@/svg';
import { formatDollars } from '@/utils';

import TVLCardInfo from './tvl-card-info';

const EarnOverview: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;

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
            {formatDollars(82123.01)}
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
                {t('earn.overview.volume')}
              </Box>
            }
          >
            {formatDollars(32423432.01)}
          </InfoCard>
        </Box>
      </Box>
    </Box>
  );
};

export default EarnOverview;
