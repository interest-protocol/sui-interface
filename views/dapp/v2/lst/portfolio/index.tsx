import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import NFT from './nfts';
import { NFTRowItemProps, TokensRowItemProps } from './portfolio.type';
import Tokens from './tokens';

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

const DATA_TOKENS: ReadonlyArray<TokensRowItemProps> = [
  {
    tokens: ['SUI', 'SUI'],
    value: {
      coin: 0.5434,
      inUSD: 300000,
    },
    moreDetails: [
      {
        type: '0x025f...E3fa',
        value: 2,
      },
      {
        type: '0x025f...E3fa',
        value: 2,
      },
      {
        type: '0x025f...E3fa',
        value: 2,
      },
    ],
  },
  {
    tokens: ['iSui', 'SUI'],
    value: {
      coin: 0.5434,
      inUSD: 300000,
    },
    moreDetails: [
      {
        type: '0x025f...E3fa',
        value: 2,
      },
      {
        type: '0x025f...E3fa',
        value: 2,
      },
    ],
  },
];

const Portfolio: FC = () => (
  <Box variant="container" display="flex" flexDirection="column">
    <Box
      pb="1rem"
      width="100%"
      gridColumn="1/-1"
      display="flex"
      flexDirection={['column', 'column', 'column', 'row']}
      gap={['l', 'l', 'l', '3xl']}
    >
      <Tokens data={DATA_TOKENS} />
      <NFT data={DATA_NFT} />
    </Box>
  </Box>
);

export default Portfolio;
