import { Network } from '@interest-protocol/sui-amm-sdk';
import { SuiEventFilter } from '@mysten/sui.js';
import {
  OrderArguments,
  PaginationArguments,
} from '@mysten/sui.js/src/providers/json-rpc-provider';
import { PaginatedEvents } from '@mysten/sui.js/src/types';
import useSWR, { SWRConfiguration } from 'swr';

import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { makeSWRKey } from '@/utils';

type OrFilter = [SuiEventFilter, SuiEventFilter];

export const EVENTS_FILTER = {
  [Network.DEVNET]: {
    Or: [
      {
        Package:
          '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75', // Testnet core
      },
      {
        Package:
          '0x0859f26d72943f64542c193938cd1cc420730203ced8f350e42a9b16a490f5c5', // Testnet lend
      },
    ] as OrFilter,
  },
  [Network.TESTNET]: {
    Or: [
      {
        Or: [
          {
            Or: [
              {
                MoveEventType:
                  '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::PoolCreated',
              },
              {
                MoveEventType:
                  '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::SwapTokenX',
              },
            ],
          },
          {
            Or: [
              {
                MoveEventType:
                  '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::SwapTokenY',
              },
              {
                MoveEventType:
                  '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::AddLiquidity',
              },
            ],
          },
        ],
      },
      {
        MoveEventType:
          '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::RemoveLiquidity',
      },
    ] as OrFilter,
  },
  [Network.MAINNET]: {
    Or: [
      {
        MoveEventType:
          '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::PoolCreated',
      },
      {
        MoveEventType:
          '0xd15fcc9307dcf822a6ec40950b8b8331ae2367c4455c568296ed4e1eb8527a75::core::PoolCreated',
      },
    ] as OrFilter,
  },
};

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
            query: {
              Sender: account,
              // ...EVENTS_FILTER[network],
              // And: [{ Sender: account }, EVENTS_FILTER[network]],
            },
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

  return {
    ...otherProps,
    data,
  };
};
