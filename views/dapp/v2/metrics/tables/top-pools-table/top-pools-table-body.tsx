import { Network } from '@interest-protocol/sui-money-market-sdk';
import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { sort, toPairs } from 'ramda';
import { FC, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { getMetric } from '@/api/metrics';
import { COINS, SEMANTIC_COLORS, TOKENS_SVG_MAP_V2 } from '@/constants';
import { formatDollars } from '@/utils';

import { getPoolFromMetricLabel } from '../../metrics.utils';
import { TopPoolsTableItem } from '../table.types';
import TableRow from '../table-row';

const TopPoolsTableBody: FC = () => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();

  const [data, setData] = useState<ReadonlyArray<TopPoolsTableItem>>([]);

  useEffect(() => {
    getMetric('get-top-pools').then((topPools) =>
      setData(
        toPairs(topPools).map(
          ([pair, info]) =>
            ({
              ...info,
              pool: getPoolFromMetricLabel(pair),
            } as TopPoolsTableItem)
        )
      )
    );
  }, []);

  return data.length ? (
    <>
      {sort((item1, item2) => (+item1.a > +item2.a ? -1 : 1), data).map(
        ({ pool, a, b, c, d }, index) => {
          const FirstIcon = TOKENS_SVG_MAP_V2[pool?.token0.type ?? 'default'];

          const SecondIcon = TOKENS_SVG_MAP_V2[pool?.token1.type ?? 'default'];

          return (
            <Box key={v4()} pt={index === 0 ? '0' : 'xl'}>
              <TableRow numCols={7}>
                <Typography variant="small" textAlign="center">
                  {index + 1}
                </Typography>
                <Box display="flex" gap="m" alignItems="center">
                  <Box display="flex">
                    <Box
                      width="3rem"
                      pt={
                        pool?.token0.type === COINS[Network.MAINNET].SUI.type
                          ? '0.35rem'
                          : '0'
                      }
                    >
                      <FirstIcon
                        filled
                        maxWidth="3rem"
                        maxHeight="3rem"
                        height={
                          pool?.token0.type === COINS[Network.MAINNET].SUI.type
                            ? '2.3rem'
                            : '3rem'
                        }
                      />
                    </Box>
                    <Box
                      width="3rem"
                      pt={
                        pool?.token1.type === COINS[Network.MAINNET].SUI.type
                          ? '0.35rem'
                          : '0'
                      }
                    >
                      <SecondIcon
                        height={
                          pool?.token1.type === COINS[Network.MAINNET].SUI.type
                            ? '2rem'
                            : '3rem'
                        }
                        filled
                        maxWidth="3rem"
                        maxHeight="3rem"
                      />
                    </Box>
                  </Box>
                  <Box>
                    <Box display="flex">
                      <Typography variant="small">
                        {pool?.token0.symbol}
                      </Typography>
                      <Typography variant="medium">•</Typography>
                      <Typography variant="small">
                        {pool?.token1.symbol}
                      </Typography>
                    </Box>
                    {pool?.stable ? (
                      <Typography
                        variant="small"
                        color={SEMANTIC_COLORS[3][dark ? 'dark' : 'light']}
                      >
                        {t('metrics.tables.stable')}
                      </Typography>
                    ) : (
                      <Typography
                        variant="small"
                        color={SEMANTIC_COLORS[2][dark ? 'dark' : 'light']}
                      >
                        {t('metrics.tables.volatile')}
                      </Typography>
                    )}
                  </Box>
                </Box>
                <Typography variant="small" textAlign="center">
                  {formatDollars(a ?? 0, 2)}
                </Typography>
                <Typography variant="small" textAlign="center">
                  {Number(
                    (a && b
                      ? (365 * (b * (pool?.stable ? 0.05 : 0.3))) / a
                      : 0
                    ).toFixed(2)
                  ).toPrecision()}
                  %
                </Typography>
                <Typography variant="small" textAlign="center">
                  {formatDollars(b ?? 0, 2)}
                </Typography>
                <Typography variant="small" textAlign="center">
                  {formatDollars(c ?? 0, 2)}
                </Typography>
                <Typography variant="small" textAlign="center">
                  {formatDollars(d ?? 0, 2)}
                </Typography>
              </TableRow>
            </Box>
          );
        }
      )}
    </>
  ) : (
    <>
      <Skeleton height="2rem" width="100%" />
      <Skeleton height="2rem" width="100%" style={{ marginTop: '1rem' }} />
    </>
  );
};

export default TopPoolsTableBody;
