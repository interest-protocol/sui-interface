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
  const [isOnline, setIsOnline] = useState(false);

  useEventListener('offline', () => setIsOnline(false), true);
  useEventListener('online', () => setIsOnline(true), true);

  const { isLoading, error, data } = useSWR(
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
          isLoading && !error
            ? 'warning'
            : !!data && isOnline
            ? '#65A30D'
            : '#B91C1C'
        }
      />
      {isLoading ? t('common.loading') : data ?? t('common.v2.network.down')}
    </Typography>
  );
};

export default Checkpoint;
