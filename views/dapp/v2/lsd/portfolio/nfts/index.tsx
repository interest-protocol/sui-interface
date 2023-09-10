import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardSection from '../../components/card-section';
import { NFTListProps } from '../portfolio.type';
import NFTTable from './table';

const NFT: FC<NFTListProps> = ({ data }) => {
  return (
    <Box height="max-content" width={['100%', '100%', '100%', '50%']}>
      <CardSection title="NFT">
        <NFTTable data={data} />
      </CardSection>
    </Box>
  );
};

export default NFT;
