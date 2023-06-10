import { Network } from '@interest-protocol/sui-sdk';

import { COINS } from '@/constants';
import { TOKEN_SYMBOL } from '@/lib';

interface assetApyProps {
  coin: {
    token: { decimals: number; symbol: TOKEN_SYMBOL; type: string };
    color?: { dark: string; light: string };
  };
  percentage: number;
}

interface MarketTableSupplyProps {
  assetApy: assetApyProps;
  supplied: {
    percentage: number;
    value: number;
  };
  wallet: number;
  collateral: boolean;
}

interface MarketTableBorrowedProps {
  assetApy: assetApyProps;
  borrowed: {
    percentage: number;
    value: number;
  };
  wallet: number;
  liquidity: number;
}

export const SUPPLY_MARKET_TABLE_DATA: MarketTableSupplyProps[] = [
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
];

export const BORROW_MARKET_TABLE_DATA: MarketTableBorrowedProps[] = [
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
];
