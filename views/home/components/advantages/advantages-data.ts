import { AdvantagesCardProps } from './advantages.types';
import {
  BlocksIllustration,
  CoinsIllustration,
  StepsIllustration,
} from './advantages-illustrations';

export const CONTENT_LIST: ReadonlyArray<AdvantagesCardProps> = [
  {
    position: 'first',
    Illustration: StepsIllustration,
  },
  {
    position: 'second',
    Illustration: BlocksIllustration,
  },
  {
    position: 'third',
    Illustration: CoinsIllustration,
  },
];
