import { Network } from '@interest-protocol/sui-sdk';

import { COINS } from '@/constants';

import { GroupBorrowRow, GroupSupplyRow } from './market-table.types';

export const SUPPLY_MARKET_TABLE_DATA: ReadonlyArray<GroupSupplyRow> = [
  {
    isEngaged: true,
    description: 'Supply Added',
    SupplyMarketTableData: [
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BNB,
            color: { dark: '#FDE68A', light: '#F59E0B' },
          },
          percentage: 3,
        },
        supplied: {
          percentage: 1.1234,
          value: 300,
        },
        wallet: 0.0,
        collateral: true,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].ETH,
            color: { dark: '#FBCFE8', light: '#EC4899' },
          },
          percentage: 7,
        },
        supplied: {
          percentage: 1.2346,
          value: 300,
        },
        wallet: 0.0,
        collateral: true,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].SUI,
            color: { dark: '#A5F3FC', light: '#06B6D4' },
          },
          percentage: 5,
        },
        supplied: {
          percentage: 1.345,
          value: 300,
        },
        wallet: 0.0,
        collateral: false,
      },
    ],
  },
  {
    isEngaged: false,
    description: 'Not engaged',
    SupplyMarketTableData: [
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BTC,
          },
          percentage: 1,
        },
        supplied: {
          percentage: 0.0,
          value: 300,
        },
        wallet: 0.0,
        collateral: false,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BTC,
          },
          percentage: 2,
        },
        supplied: {
          percentage: 0.0,
          value: 300,
        },
        wallet: 0.0,
        collateral: false,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].USDT,
          },
          percentage: 3,
        },
        supplied: {
          percentage: 0.0,
          value: 300,
        },
        wallet: 0.0,
        collateral: false,
      },
    ],
  },
];

export const BORROW_MARKET_TABLE_DATA: ReadonlyArray<GroupBorrowRow> = [
  {
    isEngaged: true,
    description: 'Supply Added',
    BorrowMarketTableData: [
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BNB,
          },
          percentage: 3,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].ETH,
            color: { dark: '#FBCFE8', light: '#EC4899' },
          },
          percentage: 7,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].SUI,
            color: { dark: '#A5F3FC', light: '#06B6D4' },
          },
          percentage: 5,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
    ],
  },
  {
    isEngaged: false,
    description: 'Not engaged',
    BorrowMarketTableData: [
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BTC,
          },
          percentage: 1,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].BTC,
          },
          percentage: 2,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
      {
        assetApy: {
          coin: {
            token: COINS[Network.DEVNET].USDT,
          },
          percentage: 3,
        },
        borrowed: {
          percentage: 0.0,
          value: 0,
        },
        wallet: 0.0,
        liquidity: 0,
      },
    ],
  },
];
