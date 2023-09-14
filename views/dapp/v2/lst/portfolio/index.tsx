import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TokensRowItemProps } from './portfolio.type';
import PortfolioAssets from './portfolio-assets';
import { ASSETS_DATA } from './portfolio-assets/assets.data';
import Tokens from './tokens';

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
      display="flex"
      gridColumn="1/-1"
      flexDirection="column"
      gap={['l', 'l', 'l', '3xl']}
    >
      <Tokens data={DATA_TOKENS} />
      <PortfolioAssets data={ASSETS_DATA} />
    </Box>
  </Box>
);

export default Portfolio;
