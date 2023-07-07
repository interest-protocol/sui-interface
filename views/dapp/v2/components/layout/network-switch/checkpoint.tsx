import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import useSWR from 'swr';

import { useNetwork, useProvider } from '@/hooks';
import useEventListener from '@/hooks/use-event-listener';
import { makeSWRKey } from '@/utils';

const Checkpoint: FC = () => {
  const t = useTranslations();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const [loading, setLoading] = useState(false);
  const [isOnline, setIsOnline] = useState(false);
  const [checkpoint, setCheckpoint] = useState<string>('');

  useEventListener('offline', () => setIsOnline(false), true);
  useEventListener('online', () => setIsOnline(true), true);

  useSWR(
    makeSWRKey(
      [network, isOnline],
      provider.getLatestCheckpointSequenceNumber.name
    ),
    async () => {
      !checkpoint && setLoading(true);
      provider
        .getLatestCheckpointSequenceNumber()
        .then((latestCheckpoint) => {
          setCheckpoint(latestCheckpoint);
        })
        .catch(() => setCheckpoint(''))
        .finally(() => {
          setLoading(false);
        });
    },
    {
      revalidateOnFocus: false,
      revalidateOnMount: true,
      refreshWhenHidden: false,
      refreshInterval: 30000,
    }
  );

  return (
    <Typography
      mt="s"
      gap="s"
      display="flex"
      variant="small"
      color="onSurface"
      textAlign="center"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        as="span"
        width="0.8rem"
        height="0.8rem"
        borderRadius="full"
        display="inline-block"
        bg={
          loading ? 'warning' : checkpoint && isOnline ? '#65A30D' : '#B91C1C'
        }
      />
      {loading
        ? t('common.loading')
        : checkpoint ?? t('common.v2.network.down')}
    </Typography>
  );
};

export default Checkpoint;
