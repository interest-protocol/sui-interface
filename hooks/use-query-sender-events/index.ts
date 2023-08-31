import {
  OrderArguments,
  PaginationArguments,
} from '@mysten/sui.js/src/providers/json-rpc-provider';
import { PaginatedEvents } from '@mysten/sui.js/src/types';
import useSWR, { SWRConfiguration } from 'swr';

import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { makeSWRKey } from '@/utils';

export const useQuerySenderEvents = (
  queryEventsConfig: PaginationArguments<PaginatedEvents['nextCursor']> &
    OrderArguments = {},
  config: SWRConfiguration = {}
) => {
  const { network } = useNetwork();
  const { provider } = useProvider();
  const { account } = useWeb3();

  const { data, ...otherProps } = useSWR(
    makeSWRKey(
      [
        queryEventsConfig.order,
        queryEventsConfig.limit,
        queryEventsConfig.cursor?.txDigest,
        account,
        network,
      ],
      provider.queryEvents.name
    ),
    async () =>
      account
        ? provider.queryEvents({
            query: { Sender: account },
            order: 'descending',
            ...queryEventsConfig,
          })
        : null,
    {
      revalidateOnMount: true,
      revalidateOnFocus: false,
      refreshWhenHidden: false,
      refreshInterval: 15000,
      ...config,
    }
  );

  console.log(data, 'aa');

  return {
    ...otherProps,
    data,
  };
};
