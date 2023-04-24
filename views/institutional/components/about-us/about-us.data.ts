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
    link: Routes[RoutesEnum.Farms],
    Illustration: EarnIllustration,
  },
  {
    name: 'trade',
    link: Routes[RoutesEnum.DEX],
    Illustration: TradeIllustration,
  },
  {
    name: 'lend',
    // TODO: change the link
    link: Routes[RoutesEnum.Faucet],
    Illustration: LendIllustration,
  },
];
