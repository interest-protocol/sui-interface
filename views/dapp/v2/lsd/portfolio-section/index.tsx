import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NFT from './nfts';
import { NFTRowItemProps } from './portfolio.type';
import Tokens from './tokens';

const PortfolioSection: FC = () => {
  const DATA_NFT: ReadonlyArray<NFTRowItemProps> = [
    {
      id: 1234,
      value: {
        coin: 0.5434,
        inUSD: 300000,
      },
    },
    {
      id: 1234,
      value: {
        coin: 0.5434,
        inUSD: 300000,
      },
    },
  ];

  return (
    <Box variant="container" display="flex" flexDirection="column">
      <Box
        pb="1rem"
        width="100%"
        gridColumn="1/-1"
        display="flex"
        flexDirection={['column', 'column', 'column', 'row']}
        gap={['l', 'l', 'l', '3xl']}
      >
        <Tokens />
        <NFT data={DATA_NFT} />
      </Box>
    </Box>
  );
};
export default PortfolioSection;
