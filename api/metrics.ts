const getMetrics = (metricsQuery: any) =>
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
          step: 3600,
          timezone: 'Africa/Luanda',
        },
        limit: 1,
        queries: [
          {
            metricsQuery,
            dataSource: 'METRICS',
            sourceName: '',
          },
        ],
        formulas: [],
      }),
    }
  );

export const getLiquidityAdded = () =>
  getMetrics({
    query: 'add_liquidity',
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
              value: 58,
              unit: 'w',
            },
          },
        ],
      },
    ],
    disabled: false,
  })
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getTVL = (): Promise<number> =>
  getMetrics({
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
  })
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getLiquidityRemoved = (): Promise<number> =>
  getMetrics({
    query: 'remove_liquidity',
    alias: '',
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
  })
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getDailyTradingVolume = () =>
  getMetrics({
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
  })
    .then((res) => res.json())
    .then((data) => {
      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });

export const getAccumulatedVolume = () =>
  getMetrics({
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
  })
    .then((res) => res.json())
    .then((data) => {
      console.log('>> fetch data :: ', data);

      const samples: Array<any> = Array.from(
        data.results[0].matrix.samples.values()
      );

      const value = samples[0].values.reverse()[0].value;

      return value;
    });
