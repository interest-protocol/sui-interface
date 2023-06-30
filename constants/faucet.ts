import { COIN_TYPE, Network } from '@interest-protocol/sui-amm-sdk';
import { TOKEN_SYMBOL } from 'lib';
import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import {
  BinanceSVG,
  BitcoinSVG,
  EtherSVG,
  SuiSVG,
  USDCoinSVG,
  USDTSVG,
} from '@/svg';

import { TOKENS_SVG_MAP_V2 } from '.';

export const FAUCET_TOKENS = {
  [Network.DEVNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      Icon: SuiSVG,
      name: 'SUI',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.DEVNET].BTC,
      Icon: BitcoinSVG,
      name: 'Bitcoin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.DEVNET].BNB,
      Icon: BinanceSVG,
      name: 'Binance Coin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.DEVNET].ETH,
      Icon: EtherSVG,
      name: 'ETHER',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.DEVNET].USDC,
      Icon: USDCoinSVG,
      name: 'USDC',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.DEVNET].USDT,
      Icon: USDTSVG,
      name: 'USDT',
      decimals: 9,
    },
  ] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
  [Network.TESTNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.TESTNET].SUI,
      Icon: SuiSVG,
      name: 'SUI',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.TESTNET].BTC,
      Icon: BitcoinSVG,
      name: 'Bitcoin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.TESTNET].BNB,
      Icon: BinanceSVG,
      name: 'Binance Coin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.TESTNET].ETH,
      Icon: EtherSVG,
      name: 'ETHER',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.TESTNET].USDC,
      Icon: USDCoinSVG,
      name: 'USDC',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.TESTNET].USDT,
      Icon: USDTSVG,
      name: 'USDT',
      decimals: 9,
    },
  ] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
  // There is no faucet on the mainnet
  [Network.MAINNET]: [] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
};

export const FAUCET_TOKENS_V2 = {
  [Network.DEVNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.DEVNET].SUI,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].SUI],
      name: 'SUI',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.DEVNET].BTC,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].BTC],
      name: 'Bitcoin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.DEVNET].BNB,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].BNB],
      name: 'Binance Coin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.DEVNET].ETH,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].ETH],
      name: 'ETHER',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.DEVNET].USDC,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].USDC],
      name: 'USDC',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.DEVNET].USDT,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.DEVNET].USDT],
      name: 'USDT',
      decimals: 9,
    },
  ] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
  [Network.TESTNET]: [
    {
      symbol: TOKEN_SYMBOL.SUI,
      type: COIN_TYPE[Network.TESTNET].SUI,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.TESTNET].SUI],
      name: 'SUI',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BTC,
      type: COIN_TYPE[Network.TESTNET].BTC,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.TESTNET].BTC],
      name: 'Bitcoin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.BNB,
      type: COIN_TYPE[Network.TESTNET].BNB,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.TESTNET].BNB],
      name: 'Binance Coin',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.ETH,
      type: COIN_TYPE[Network.TESTNET].ETH,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.TESTNET].ETH],
      name: 'ETHER',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDC,
      type: COIN_TYPE[Network.TESTNET].SUI,
      Icon: TOKENS_SVG_MAP_V2[COIN_TYPE[Network.TESTNET].SUI],
      name: 'USDC',
      decimals: 9,
    },
    {
      symbol: TOKEN_SYMBOL.USDT,
      type: COIN_TYPE[Network.TESTNET].USDT,
      Icon: USDTSVG,
      name: 'USDT',
      decimals: 9,
    },
  ] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
  // There is no faucet on the mainnet
  [Network.MAINNET]: [] as ReadonlyArray<{
    symbol: TOKEN_SYMBOL.SUI;
    type: string;
    Icon: FC<SVGProps>;
    name: string;
    decimals: number;
  }>,
};
