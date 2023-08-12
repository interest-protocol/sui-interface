import { Network } from '@interest-protocol/sui-amm-sdk';
import { Box, Typography } from '@interest-protocol/ui-kit';
import { toPairs } from 'ramda';
import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';

import { getTopCoins } from '@/api/metrics';
import { COINS, TOKENS_SVG_MAP_V2 } from '@/constants';
import { formatDollars } from '@/utils';

import { getCoinFromMetricLabel } from '../../metrics.utils';
import { TopCoinTableItem } from '../table.types';
import TableRow from '../table-row';

const TopCoinsTableBody: FC = () => {
  const [data, setData] = useState<ReadonlyArray<TopCoinTableItem>>([]);

  useEffect(() => {
    getTopCoins().then((topCoins) =>
      setData(
        toPairs(topCoins).map(
          ([coin, info]) =>
            ({
              ...info,
              coin: getCoinFromMetricLabel(coin),
            } as TopCoinTableItem)
        )
      )
    );
  }, []);

  return (
    <>
      {data.map(({ coin, a, b, c }, index) => {
        const CoinIcon = TOKENS_SVG_MAP_V2[coin?.type ?? 'default'];

        return (
          <Box key={v4()} pt={index === 0 ? '0' : 'xl'}>
            <TableRow numCols={5}>
              <Typography variant="small" textAlign="center">
                {index + 1}
              </Typography>
              <Box display="flex" gap="m" alignItems="center">
                <Box display="flex">
                  <CoinIcon
                    filled
                    height={
                      coin?.type === COINS[Network.MAINNET].SUI.type
                        ? '2.2rem'
                        : '3rem'
                    }
                    maxHeight="2.5rem"
                    maxWidth="2.5rem"
                  />
                </Box>
                <Box>
                  <Box display="flex">
                    <Typography variant="small">{coin?.symbol}</Typography>
                  </Box>
                </Box>
              </Box>
              <Typography variant="small" textAlign="center">
                {formatDollars(a ?? 0)}
              </Typography>
              <Typography variant="small" textAlign="center">
                {formatDollars(b ?? 0)}
              </Typography>
              <Typography variant="small" textAlign="center">
                {formatDollars(c ?? 0)}
              </Typography>
            </TableRow>
          </Box>
        );
      })}
    </>
  );
};

export default TopCoinsTableBody;
