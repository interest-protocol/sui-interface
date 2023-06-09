import { FarmSVG, NewTokenSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { DotsSVG, HomeSVG, PoolSVG, SwapSVG } from '@/svg';

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
    Icon: DotsSVG,
    name: 'settings',
    path: '',
    disabled: true,
  },
];
