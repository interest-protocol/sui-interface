import { CogsSVG, FarmSVG, NewTokenSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { HomeSVG, LendSVG, PoolSVG, SwapSVG } from '@/svg';

export const SIDEBAR_ITEMS = [
  {
    Icon: HomeSVG,
    name: 'home',
    path: Routes[RoutesEnum.DApp],
    disabled: true,
  },
  {
    Icon: SwapSVG,
    name: 'swap',
    path: Routes[RoutesEnum.Swap],
    disabled: false,
  },
  {
    Icon: PoolSVG,
    name: 'pool',
    path: Routes[RoutesEnum.DEXPool],
    disabled: false,
  },
  {
    Icon: LendSVG,
    name: 'lend',
    path: Routes[RoutesEnum.Lend],
    disabled: false,
  },
  {
    Icon: FarmSVG,
    name: 'farm',
    path: Routes[RoutesEnum.LiquidityFarms],
    disabled: false,
  },
  {
    Icon: NewTokenSVG,
    name: 'createToken',
    path: Routes[RoutesEnum.CreateToken],
    disabled: false,
  },
  {
    Icon: CogsSVG,
    name: 'settings',
    path: '',
    disabled: true,
  },
];
