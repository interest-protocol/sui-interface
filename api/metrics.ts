import {
  A_DAY_IN_MILLISECONDS,
  A_HOUR_IN_MILLISECONDS,
} from '@/constants/date';
import { TFilter } from '@/views/dapp/v2/metrics/card-header/card-header.types';

const DEFAULT_LIMIT = 20;
const DEFAULT_START_TIME = '-30d';
const DEFAULT_STEP = A_HOUR_IN_MILLISECONDS / 1000;

type PoolResults = Array<{
  id: string;
  matrix: {
    samples: Array<{
      values: Array<{ value: number }>;
      metric: { labels: { pair: string } };
    }>;
  };
}>;

type CoinResults = Array<{
  id: string;
  matrix: {
    samples: Array<{
      values: Array<{ value: number }>;
      metric: { labels: { coin: string } };
    }>;
  };
}>;

export type ValuesInTimestamp = ReadonlyArray<{
  timestamp: number;
  value: number;
}>;

export type PoolReturn = Record<string, Record<string, number>>;
export type CoinReturn = PoolReturn;

const getMetrics = (
  queries: any,
  { step, limit, start }: { step?: number; limit?: number; start?: string } = {
    step: DEFAULT_STEP,
    limit: DEFAULT_LIMIT,
    start: DEFAULT_START_TIME,
  }
) =>
  fetch(
    'https://app.sentio.xyz/api/v1/insights/josemvcerqueira/interest-protocol-amm/query',
    {
      headers: {
        'Api-Key': process.env.SENTIO_API_KEY || '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        timeRange: {
          start: start ?? DEFAULT_START_TIME,
          end: 'now',
          step: step ?? DEFAULT_STEP,
          timezone: 'Africa/Luanda',
        },
        limit: limit ?? DEFAULT_LIMIT,
        queries,
        formulas: [],
      }),
    }
  );

export const getTVL = (): Promise<number> =>
  getMetrics([
    {
      metricsQuery: {
        query: 'tvl_by_pool',
        alias: '',
        id: 'a',
        labelSelector: {},
        aggregate: {
          op: 'SUM',
          grouping: [],
        },
        functions: [],
        disabled: false,
      },
      dataSource: 'METRICS',
      sourceName: '',
    },
  ])
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getDailyTradingVolume = () =>
  getMetrics([
    {
      metricsQuery: {
        query: 'vol_sum',
        alias: '',
        id: 'a',
        labelSelector: {},
        aggregate: {
          op: 'SUM',
          grouping: [],
        },
        functions: [
          {
            name: 'sum_over_time',
            arguments: [
              {
                durationValue: {
                  value: 1,
                  unit: 'd',
                },
              },
            ],
          },
        ],
        disabled: false,
      },
      dataSource: 'METRICS',
      sourceName: '',
    },
  ])
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getAccumulatedVolume = (): Promise<number> =>
  getMetrics([
    {
      metricsQuery: {
        query: 'vol',
        alias: '{{pair}}',
        id: 'a',
        labelSelector: {},
        aggregate: {
          op: 'SUM',
          grouping: [],
        },
        functions: [
          {
            name: 'rollup_sum',
            arguments: [
              {
                durationValue: {
                  value: 57,
                  unit: 'w',
                },
              },
            ],
          },
        ],
        disabled: false,
      },
      dataSource: 'METRICS',
      sourceName: '',
    },
  ])
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getTotalLiquidity = (from: TFilter): Promise<ValuesInTimestamp> =>
  getMetrics(
    [
      {
        metricsQuery: {
          query: 'tvl_by_pool',
          alias: '',
          id: 'a',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: [],
          },
          functions: [],
          disabled: false,
        },

        dataSource: 'METRICS',
        sourceName: '',
      },
    ],
    {
      start:
        from === 'all'
          ? '1683923848'
          : from === 'month'
          ? DEFAULT_START_TIME
          : '-14d',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples[0].values;

      return values;
    });

export const getDailyVolume = (): Promise<ValuesInTimestamp> =>
  getMetrics(
    [
      {
        metricsQuery: {
          query: 'vol',
          alias: '24 vol',
          id: 'a',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: [],
          },
          functions: [
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 1,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
    ],
    { step: A_DAY_IN_MILLISECONDS / 1000 }
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples[0].values;

      return values;
    });

export const getTotalActiveWallets = (
  daily = false
): Promise<Array<{ timestamp: number; value: number }>> =>
  getMetrics(
    [
      {
        eventsQuery: {
          resource: {
            name: '',
            type: 'EVENTS',
          },
          alias: '',
          id: 'a',
          aggregation: {
            countUnique: {
              duration: {
                value: 0,
                unit: 'day',
              },
            },
          },
          selectorExpr: null,
          groupBy: [],
          limit: 0,
          functions: [],
          disabled: false,
        },
        dataSource: 'EVENTS',
        sourceName: '',
      },
    ],
    {
      step: (daily ? A_HOUR_IN_MILLISECONDS : A_DAY_IN_MILLISECONDS) / 1000,
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples[0].values;

      return values;
    });

export const getTVLByPool = (
  from: TFilter
): Promise<Array<{ amount: number; label: string; timestamp: number }>> =>
  getMetrics(
    [
      {
        metricsQuery: {
          query: 'tvl_by_pool',
          alias: '{{pair}}',
          id: 'a',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['pair'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 9,
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
    ],
    {
      start: from === 'all' ? '1683923848' : '-1d',
    }
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples.map(({ values, metric }) => ({
        label: metric.labels.pair,
        amount: values.reverse()[0].value,
        timestamp: values.reverse()[0].timestamp,
      }));

      return values;
    });

export const getSwaps = (): Promise<number> =>
  getMetrics([
    {
      metricsQuery: {
        query: 'event_swap',
        alias: '',
        id: 'a',
        labelSelector: {},
        aggregate: null,
        functions: [],
        disabled: false,
      },
      dataSource: 'METRICS',
      sourceName: '',
    },
  ])
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getPools = (): Promise<number> =>
  getMetrics([
    {
      metricsQuery: {
        query: 'num_pools',
        alias: '',
        id: 'a',
        labelSelector: {},
        aggregate: null,
        functions: [],
        disabled: false,
      },

      dataSource: 'METRICS',
      sourceName: '',
    },
  ])
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getTopPools = (): Promise<PoolReturn> =>
  getMetrics(
    [
      {
        metricsQuery: {
          query: 'tvl_by_pool',
          alias: 'TVL',
          id: 'a',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['pair'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 20,
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
      {
        metricsQuery: {
          query: 'vol',
          alias: '24h vol',
          id: 'b',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['pair'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 20,
                },
              ],
            },
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 1,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
      {
        metricsQuery: {
          query: 'vol',
          alias: '7d vol',
          id: 'c',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['pair'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 20,
                },
              ],
            },
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 7,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
      {
        metricsQuery: {
          query: 'vol',
          alias: '30d vol',
          id: 'd',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['pair'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 20,
                },
              ],
            },
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 30,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
    ],
    { limit: 200 }
  )
    .then((res) => res.json())
    .then((data) =>
      (data.results as PoolResults).reduce((acc, { id, matrix }) => {
        const info = matrix.samples.reduce(
          (
            accumulator,
            {
              values,
              metric: {
                labels: { pair },
              },
            }
          ) => ({
            ...accumulator,
            [pair]: {
              ...acc[pair],
              [id]: values.reverse()[0].value,
            },
          }),
          {}
        );

        return {
          ...acc,
          ...info,
        };
      }, {} as PoolReturn)
    );

export const getTopCoins = (): Promise<CoinReturn> =>
  getMetrics(
    [
      {
        metricsQuery: {
          query: 'tvl_by_coin',
          alias: 'TVL',
          id: 'a',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['coin'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 10,
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
      {
        metricsQuery: {
          query: 'vol_by_coin',
          alias: '1d vol',
          id: 'b',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['coin'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 10,
                },
              ],
            },
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 1,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
      {
        metricsQuery: {
          query: 'vol_by_coin',
          alias: '30d vol',
          id: 'c',
          labelSelector: {},
          aggregate: {
            op: 'SUM',
            grouping: ['coin'],
          },
          functions: [
            {
              name: 'topk',
              arguments: [
                {
                  intValue: 10,
                },
              ],
            },
            {
              name: 'sum_over_time',
              arguments: [
                {
                  durationValue: {
                    value: 30,
                    unit: 'd',
                  },
                },
              ],
            },
          ],
          disabled: false,
        },
        dataSource: 'METRICS',
        sourceName: '',
      },
    ],
    { limit: 200 }
  )
    .then((res) => res.json())
    .then((data) =>
      (data.results as CoinResults).reduce((acc, { id, matrix }) => {
        const info = matrix.samples.reduce(
          (
            accumulator,
            {
              values,
              metric: {
                labels: { coin },
              },
            }
          ) => ({
            ...accumulator,
            [coin]: {
              ...acc[coin],
              [id]: values.reverse()[0].value,
            },
          }),
          {}
        );

        return {
          ...acc,
          ...info,
        };
      }, {} as CoinReturn)
    );

type TMetricEndpoints =
  | 'get-accumulated-volume'
  | 'get-daily-trading-volume'
  | 'get-daily-volume'
  | 'get-pools'
  | 'get-swaps'
  | 'get-top-coins'
  | 'get-top-pools'
  | 'get-total-active-wallets'
  | 'get-total-liquidity'
  | 'get-tvl-by-pool'
  | 'get-tvl';

export const getMetric = (endpoint: TMetricEndpoints, params?: string) =>
  fetch(`/api/v1/metrics/${endpoint}?${params ?? ''}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((res) => res.json())
    .catch(console.error);
