import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { NFTListProps } from '../../portfolio.type';
import NFTTableBody from './nft-table-body';
import NFTTableHead from './nft-table-head';

const NFTTable: FC<NFTListProps> = ({ data }) => {
  return (
    <Box
      width="100%"
      display="flex"
      borderRadius="m"
      color="onSurface"
      gridColumn="1/-1"
      flexDirection="column"
    >
      <Box>
        <NFTTableHead />
        <Box>
          <NFTTableBody data={data} />
        </Box>
      </Box>
    </Box>
  );
};

export default NFTTable;
