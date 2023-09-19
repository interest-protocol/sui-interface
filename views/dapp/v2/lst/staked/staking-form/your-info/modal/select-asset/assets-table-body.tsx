import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import AssetsTableDataItem from './assets-table-data-item';
import AssetsTableHeader from './assets-table-header';
import { SELECT_ASSET_DATA } from './select-asset.data';

const AssetsTableBody: FC = () => {
  return (
    <Box maxHeight="21.875rem">
      <AssetsTableHeader />
      {SELECT_ASSET_DATA.sort((a, b) =>
        a.inMaturityState === b.inMaturityState ? 0 : a.inMaturityState ? -1 : 1
      ).map((asset, index) => (
        <AssetsTableDataItem index={index} key={v4()} {...asset} />
      ))}
    </Box>
  );
};

export default AssetsTableBody;
