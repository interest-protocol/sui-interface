import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SEMANTIC_COLORS } from '@/constants';

import { TOP_POOLS_DATA } from '../../metrics.data';
import TableRow from '../table-row';

const TopPoolsTableBody: FC = () => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();
  return (
    <>
      {TOP_POOLS_DATA.map((pool, index) => (
        <Box key={v4()} pt={index === 0 ? '0' : 'xl'}>
          <TableRow numCols={6}>
            <Typography variant="small" textAlign="center">
              {index + 1}
            </Typography>
            <Box display="flex" gap="m" alignItems="center">
              <Box display="flex" gap=".25rem">
                <pool.firstPairIcon
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  width="100%"
                />
                <pool.secondPairIcon
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  width="100%"
                />
              </Box>
              <Box>
                <Box display="flex">
                  <Typography variant="small">{pool.firstPair}</Typography>
                  <Typography variant="medium">•</Typography>
                  <Typography variant="small">{pool.secondPair}</Typography>
                </Box>
                {pool.stable ? (
                  <Typography
                    variant="small"
                    color={
                      dark ? SEMANTIC_COLORS[3].dark : SEMANTIC_COLORS[3].light
                    }
                  >
                    {t('metrics.tables.stable')}
                  </Typography>
                ) : (
                  <Typography
                    variant="small"
                    color={
                      dark ? SEMANTIC_COLORS[2].dark : SEMANTIC_COLORS[2].light
                    }
                  >
                    {t('metrics.tables.volatile')}
                  </Typography>
                )}
              </Box>
            </Box>
            <Typography variant="small" textAlign="center">
              {pool.TVL}
            </Typography>
            <Typography variant="small" textAlign="center">
              {pool.dayVolume}
            </Typography>
            <Typography variant="small" textAlign="center">
              {pool.weekVolume}
            </Typography>
            <Typography variant="small" textAlign="center">
              {pool.monthVolume}
            </Typography>
          </TableRow>
        </Box>
      ))}
    </>
  );
};

export default TopPoolsTableBody;
