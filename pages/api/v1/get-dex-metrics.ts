import { NextApiHandler } from 'next';
import { use } from 'next-api-middleware';
import { pathOr, propOr } from 'ramda';

import { getRequestOnlyMiddleware, logApiErrors } from '@/utils';

const tvlBodyAPIQuery = [
  {
    metricsQuery: {
      query: 'tvl_by_pool',
      alias: '',
      id: 'tvl',
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
];

const accumulatedVolumeQuery = [
  {
    metricsQuery: {
      query: 'vol',
      alias: '{{pair}}',
      id: 'volume',
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
                value: 120,
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
] as any;

const totalUsersBody = [
  {
    eventsQuery: {
      resource: {
        name: '',
        type: 'EVENTS',
      },
      alias: '',
      id: 'users',
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
] as any;

const getValue = (x: any) => {
  const samples = pathOr([], ['matrix', 'samples'], x) as any;
  if (!samples.length) return 0;
  const sampleValues = samples[0].values;
  if (!sampleValues.length) return;

  return propOr(0, 'value', sampleValues[sampleValues.length - 1]);
};

const handler: NextApiHandler = async (req, res) => {
  const response = await fetch(
    `https://app.sentio.xyz/api/v1/insights/josemvcerqueira/interest-protocol-amm/query`,
    {
      headers: {
        'api-key': process.env.SENTIO_API || '',
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({
        timeRange: {
          start: '-1M',
          end: 'now',
          step: 3600,
          timezone: 'Europe/Lisbon',
        },
        limit: 1,
        queries: tvlBodyAPIQuery
          .concat(accumulatedVolumeQuery)
          .concat(totalUsersBody),
        formulas: [],
      }),
    }
  );

  const data = await response.json();

  const parsedData = data.results.reduce(
    (acc: any, x: any) => {
      if (x.id === 'volume')
        return {
          ...acc,
          volume: getValue(x),
        };

      if (x.id === 'users')
        return {
          ...acc,
          users: getValue(x),
        };

      if (x.id === 'tvl')
        return {
          ...acc,
          tvl: getValue(x),
        };

      return acc;
    },
    {
      tvl: 0,
      volume: 0,
      users: 0,
    }
  );

  res.send(parsedData);
};

export default use([getRequestOnlyMiddleware, logApiErrors])(handler);
