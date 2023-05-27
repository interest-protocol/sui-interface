import { FarmSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { HomeSVG, PoolSVG, SwapSVG } from '@/svg';

export const SIDEBAR_ITEMS = [
  { Icon: HomeSVG, name: 'Home', path: Routes[RoutesEnum.Home] },
  { Icon: SwapSVG, name: 'Swap', path: Routes[RoutesEnum.Swap] },
  { Icon: PoolSVG, name: 'Pool', path: Routes[RoutesEnum.DEXPool] },
  { Icon: FarmSVG, name: 'Farm', path: Routes[RoutesEnum.LiquidityFarms] },
  // {
  //   Icon: NewTokenSVG,
  //   name: 'Create Token',
  //   path: Routes[RoutesEnum.CreateToken],
  // },
  // {
  //   Icon: DotsSVG,
  //   name: 'Settings',
  //   path: Routes[RoutesEnum.Settings],
  // },
];
