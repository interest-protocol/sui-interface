import {
  A_DAY_IN_MILLISECONDS,
  A_HOUR_IN_MILLISECONDS,
} from '@/constants/date';

const getMetrics = (
  query: any,
  dataSource: 'METRICS' | 'EVENTS',
  step = A_HOUR_IN_MILLISECONDS / 1000
) =>
  fetch(
    'https://app.sentio.xyz/api/v1/insights/josemvcerqueira/interest-protocol-amm/query',
    {
      headers: {
        'Api-Key': process.env.NEXT_PUBLIC_SENTIO_API_KEY || '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        timeRange: {
          start: '-30d',
          end: 'now',
          step,
          timezone: 'Africa/Luanda',
        },
        limit: 20,
        queries: [
          {
            ...query,
            dataSource,
            sourceName: '',
          },
        ],
        formulas: [],
      }),
    }
  );

export const getTVL = (): Promise<number> =>
  getMetrics(
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
    },
    'METRICS'
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getDailyTradingVolume = () =>
  getMetrics(
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
    },
    'METRICS'
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getAccumulatedVolume = () =>
  getMetrics(
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
    },
    'METRICS'
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getTotalLiquidity = (): Promise<
  Array<{ timestamp: number; value: number }>
> =>
  getMetrics(
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
    },
    'METRICS'
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples[0].values;

      return values;
    });

export const getDailyVolume = (): Promise<
  Array<{ timestamp: number; value: number }>
> =>
  getMetrics(
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
    },
    'METRICS',
    A_DAY_IN_MILLISECONDS / 1000
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
    },
    'EVENTS',
    (daily ? A_HOUR_IN_MILLISECONDS : A_DAY_IN_MILLISECONDS) / 1000
  )
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const values = samples[0].values;

      return values;
    });

export const getTVLByPool = (): Promise<
  Array<{ amount: number; label: string; timestamp: number }>
> =>
  getMetrics(
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
    },
    'METRICS'
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
