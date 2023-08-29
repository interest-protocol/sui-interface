import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import useSWR from 'swr';

import { useNetwork, useProvider } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { makeSWRKey } from '@/utils';

const CheckpointNumber: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const [isOnline, setIsOnline] = useState(false);

  useEventListener('offline', () => setIsOnline(false), true);
  useEventListener('online', () => setIsOnline(true), true);

  const { isLoading, data } = useSWR(
    makeSWRKey(
      [network, isOnline],
      provider.getLatestCheckpointSequenceNumber.name
    ),
    () => provider.getLatestCheckpointSequenceNumber(),
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: 15000,
    }
  );

  return (
    <>{isLoading ? t('common.loading') : data ?? t('common.v2.network.down')}</>
  );
};

export default CheckpointNumber;
