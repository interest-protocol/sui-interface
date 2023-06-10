import { Routes, RoutesEnum } from '@/constants';

import { AboutUsCardProps } from './about-us.types';
import {
  EarnIllustration,
  LendIllustration,
  TradeIllustration,
} from './about-us-illustrations';

export const SERVICES_LIST: ReadonlyArray<AboutUsCardProps> = [
  {
    name: 'earn',
    link: Routes[RoutesEnum.LiquidityFarms],
    Illustration: EarnIllustration,
  },
  {
    name: 'trade',
    link: Routes[RoutesEnum.Swap],
    Illustration: TradeIllustration,
  },
  {
    name: 'lend',
    link: Routes[RoutesEnum.Swap],
    Illustration: LendIllustration,
  },
];
