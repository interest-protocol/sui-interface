import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SUISVG } from '@/components/svg/v2';
import { ISuiYNSVG } from '@/svg';
import { formatDollars } from '@/utils';

import TableRow from '../../../components/table-row';
import { NFTListProps } from '../../portfolio.type';

const NFTTableBody: FC<NFTListProps> = ({ data }) => (
  <>
    {data.map((item, index) => (
      <Box key={v4()}>
        <TableRow numCols={3}>
          <Typography variant="small">{index + 1}</Typography>
          <Box display="flex" gap="m" alignItems="center">
            <Box display="flex">
              <Box
                width="2.25rem"
                height="2.25rem"
                borderRadius="full"
                display="flex"
                justifyContent="center"
                alignItems="center"
                color="white"
              >
                <ISuiYNSVG
                  maxHeight="2.25rem"
                  maxWidth="2.25rem"
                  width="100%"
                  height="100%"
                  filled
                  rounded
                />
              </Box>
            </Box>
            <Typography variant="medium">{item.id}</Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            flexDirection="column"
          >
            <Box display="flex" alignItems="center" gap="0.5rem">
              <Typography variant="medium" textAlign="center">
                {item.value.coin}
              </Typography>
              <Box
                color="white"
                bg="#6FBCF0"
                borderRadius="full"
                width="1.125rem"
                height="1.125rem"
                display="flex"
                justifyContent="center"
              >
                <SUISVG
                  maxHeight="1.125rem"
                  maxWidth="1.125rem"
                  width="100%"
                  height="100%"
                />
              </Box>
            </Box>
            <Typography variant="extraSmall" textAlign="center">
              {formatDollars(item.value.inUSD)}
            </Typography>
          </Box>
        </TableRow>
      </Box>
    ))}
  </>
);

export default NFTTableBody;
