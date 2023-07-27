import { Network } from '@interest-protocol/sui-amm-sdk';

import { BridgeSVG, FarmSVG, NewTokenSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { FaucetSVG, HomeSVG, LendSVG, PoolSVG, SwapSVG } from '@/svg';
export const SIDEBAR_ITEMS = [
  {
    Icon: HomeSVG,
    name: 'home',
    path: Routes[RoutesEnum.DApp],
    disabled: true,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: SwapSVG,
    name: 'swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: PoolSVG,
    name: 'pool',
    path: Routes[RoutesEnum.DEXPool],
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: LendSVG,
    name: 'lend',
    path: Routes[RoutesEnum.Lend],
    disabled: false,
    networks: [Network.TESTNET, Network.MAINNET],
  },
  {
    Icon: FarmSVG,
    name: 'farm',
    path: Routes[RoutesEnum.LiquidityFarms],
    disabled: false,
    networks: [Network.MAINNET],
    alpha: true,
  },
  {
    Icon: FarmSVG,
    name: 'farm',
    path: Routes[RoutesEnum.Farms],
    disabled: false,
    networks: [Network.TESTNET],
  },
  {
    Icon: NewTokenSVG,
    name: 'createToken',
    path: Routes[RoutesEnum.CreateToken],
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: FaucetSVG,
    name: 'faucet',
    path: Routes[RoutesEnum.Faucet],
    disabled: false,
    networks: [Network.TESTNET],
  },
  {
    Icon: BridgeSVG,
    name: 'bridge',
    path: Routes[RoutesEnum.Bridge],
    disabled: false,
    networks: [Network.MAINNET],
  },
];
