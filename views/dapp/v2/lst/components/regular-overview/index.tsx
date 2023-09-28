import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { capitalize } from '@/utils';

import { useGetLatestSuiSystemState } from '../../lst.hooks';
import CardSection from '../card-section';
import ErrorState from '../error-state';
import InlineInformation from '../inline-information';
import EpochProgressBar from '../next-epoch/epoch-progress-bar';
import { REGULAR_OVERVIEW_DATA } from './regular-overview.data';

const RegularOverview: FC = () => {
  const t = useTranslations();
  const { data, isLoading, error } = useGetLatestSuiSystemState();

  if (!data || error)
    return (
      <CardSection title={capitalize(t('lst.overview.title'))}>
        <Box display="flex" flexDirection="column" gap="l">
          <InlineInformation
            Icon={REGULAR_OVERVIEW_DATA.Icon}
            value={REGULAR_OVERVIEW_DATA.value}
            description={REGULAR_OVERVIEW_DATA.description}
          />
          <ErrorState errorMessage={t('lst.epoch.error')} />
        </Box>
      </CardSection>
    );

  const startDateMS = Number(data?.epochStartTimestampMs);
  const durationMS = Number(data?.epochDurationMs);
  const endDataMS = startDateMS + durationMS;
  return (
    <CardSection title={capitalize(t('lst.overview.title'))}>
      <Box display="flex" gap="3.75rem">
        <InlineInformation
          Icon={REGULAR_OVERVIEW_DATA.Icon}
          value={REGULAR_OVERVIEW_DATA.value}
          description={REGULAR_OVERVIEW_DATA.description}
        />
        <Box display="flex" flexDirection="column" flex="1" gap="s">
          <Typography opacity="0.6" variant="extraSmall" color="onSurface">
            {t('lst.epoch.title') + ` ${data?.epoch ?? '#'}`}
          </Typography>
          {isLoading ? (
            <Skeleton width="100%" height="1.875rem" />
          ) : (
            <EpochProgressBar
              endDate={endDataMS}
              duration={durationMS}
              startDate={startDateMS}
            />
          )}
        </Box>
      </Box>
    </CardSection>
  );
};

export default RegularOverview;
