import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';

import { TTranslatedMessage } from '@/interface';
import { capitalize } from '@/utils';
import { useGetCurrentEpoch } from '@/views/dapp/v2/lst/lst.hooks';

import ErrorState from '../error-state';
import EpochHeader from './epoch-header';
import EpochProgressBar from './epoch-progress-bar';

const NextEpoch: FC = () => {
  const t = useTranslations();
  const { data, isLoading, error } = useGetCurrentEpoch();

  if (!data || error)
    return (
      <EpochHeader>
        <ErrorState
          errorMessage={capitalize(t('lst.epoch.error')) as TTranslatedMessage}
        />
      </EpochHeader>
    );

  const startDateMS = Number(data?.epochStartTimestampMs);
  const durationMS = Number(data?.epochDurationMs);
  const endDataMS = startDateMS + durationMS;

  return (
    <EpochHeader>
      {isLoading ? (
        <Skeleton width="100%" height="1.875rem" />
      ) : (
        <EpochProgressBar
          duration={durationMS}
          startDate={startDateMS}
          endDate={endDataMS}
        />
      )}
    </EpochHeader>
  );
};

export default NextEpoch;
