import { Network } from '@interest-protocol/sui-amm-sdk';

import { BridgeSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { DotsSVG, SwapSVG, TrendUpSVG } from '@/svg';

import { MenuItemProps } from './sidebar.types';

export const SIDEBAR_ITEMS: ReadonlyArray<
  Omit<
    MenuItemProps,
    'setIsCollapsed' | 'isCollapsed' | 'setTemporarilyOpen' | 'temporarilyOpen'
  >
> = [
  {
    Icon: SwapSVG,
    name: 'swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: TrendUpSVG,
    name: 'metrics',
    path: Routes[RoutesEnum.Metrics],
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
  },
  {
    Icon: BridgeSVG,
    name: 'bridge',
    path: '#',
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
    accordionList: [
      {
        name: 'wormhole',
        path: Routes[RoutesEnum.Wormhole],
        networks: [Network.MAINNET, Network.TESTNET],
      },
      {
        name: 'celer',
        path: Routes[RoutesEnum.Celer],
        networks: [Network.MAINNET, Network.TESTNET],
      },
    ],
  },
  {
    Icon: DotsSVG,
    name: 'more',
    path: '#',
    disabled: false,
    networks: [Network.MAINNET, Network.TESTNET],
    accordionList: [
      {
        name: 'pool',
        path: Routes[RoutesEnum.DEXPool],
        networks: [Network.MAINNET, Network.TESTNET],
      },
      {
        name: 'lend',
        path: Routes[RoutesEnum.Lend],
        networks: [Network.TESTNET, Network.MAINNET],
      },
      {
        name: 'farm',
        path: Routes[RoutesEnum.LiquidityFarms],
        networks: [Network.MAINNET],
      },
      {
        name: 'farm',
        path: Routes[RoutesEnum.Farms],
        networks: [Network.TESTNET],
      },
      {
        name: 'createToken',
        path: Routes[RoutesEnum.CreateToken],
        networks: [Network.MAINNET, Network.TESTNET],
      },
      {
        name: 'faucet',
        path: Routes[RoutesEnum.Faucet],
        networks: [Network.TESTNET],
      },
    ],
  },
];
