import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { TOP_POOLS_DATA } from '../../metrics.data';
import TableRow from '../table-row';

const TopCoinsTableBody: FC = () => {
  return (
    <>
      {TOP_POOLS_DATA.map((pool, index) => (
        <Box key={v4()} pt={index === 0 ? '0' : 'xl'}>
          <TableRow numCols={5}>
            <Typography variant="small" textAlign="center">
              {index + 1}
            </Typography>
            <Box display="flex" gap="m" alignItems="center">
              <Box display="flex">
                <pool.firstPairIcon
                  maxHeight="2.5rem"
                  maxWidth="2.5rem"
                  width="100%"
                />
              </Box>
              <Box>
                <Box display="flex">
                  <Typography variant="small">{pool.firstPair}</Typography>
                </Box>
              </Box>
            </Box>
            <Typography variant="small" textAlign="center">
              {pool.TVL}
            </Typography>
            <Typography variant="small" textAlign="center">
              {pool.dayVolume}
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

export default TopCoinsTableBody;
