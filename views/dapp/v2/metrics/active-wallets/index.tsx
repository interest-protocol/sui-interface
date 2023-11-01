import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { last, values } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { getMetric, ValuesInTimestamp } from '@/api/metrics';
import { TTranslatedMessage } from '@/interface';

import { TRANSLATION_KEYS } from '../card-header/card-header.data';
import { TFilter } from '../card-header/card-header.types';
import ChartContainer from '../chart-container';
import { DataPoint, HeaderChartContainerProps } from '../metrics.types';
import MetricsCardContainer from '../metrics-card-container';

const ActiveWallets: FC = () => {
  const t = useTranslations();
  const [data, setData] = useState<Array<DataPoint>>([]);
  const [isLoading, setIsLoading] = useState(!data.length);

  const [daily, setDaily] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    getMetric('get-active-wallets', daily ? 'daily=true' : '').then(
      (total: ValuesInTimestamp) => {
        const newData = values(
          total.reduce(
            (acc, info) => ({
              ...acc,
              [info.timestamp]: info,
            }),
            {} as Record<
              number,
              {
                timestamp: number;
                value: number;
              }
            >
          )
        ).map(({ timestamp, value }) => {
          const date = new Date(timestamp * 1000);

          return {
            date,
            amount: value,
            description: date.toUTCString(),
            day: `${date.getDate()}/${date.getMonth() + 1}`,
          };
        });

        setData(newData);
        setIsLoading(false);
      }
    );
  }, [daily]);

  const headerChartContainer: HeaderChartContainerProps = {
    amount: String(last(data)?.amount),
    description: `${last(data)?.description}`,
  };

  return (
    <MetricsCardContainer>
      <Box
        p="l"
        display="flex"
        alignItems="center"
        textTransform="capitalize"
        borderBottom=".0313rem solid"
        justifyContent="space-between"
        borderColor="outline.outlineVariant"
      >
        <Typography variant="large">
          {t('metrics.cards.activeWallets' as TTranslatedMessage)}
        </Typography>
        <Box display="flex" gap=".875rem">
          {(['total', 'daily'] as ReadonlyArray<TFilter>).map((filter) => (
            <Typography
              key={v4()}
              cursor="pointer"
              color="onSurface"
              variant="extraSmall"
              onClick={() => setDaily(!daily)}
              opacity={
                (filter === 'daily' && daily) || (filter === 'total' && !daily)
                  ? 1
                  : 0.25
              }
              textDecoration={
                (filter === 'daily' && daily) || (filter === 'total' && !daily)
                  ? 'underline'
                  : 'unset'
              }
            >
              {t(`metrics.cards.${TRANSLATION_KEYS[filter]}`)}
            </Typography>
          ))}
        </Box>
      </Box>
      <ChartContainer
        header={headerChartContainer}
        dataKey="amount"
        xAxis="day"
        data={data}
        type="bar"
        isLoading={isLoading}
      />
    </MetricsCardContainer>
  );
};

export default ActiveWallets;
