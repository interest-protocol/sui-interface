import { AdvantagesCardProps } from './advantages.types';
import {
  BlocksIllustration,
  CoinsIllustration,
  StepsIllustration,
} from './advantages-illustrations';

export const ADVANTAGE_LIST: ReadonlyArray<AdvantagesCardProps> = [
  {
    name: 'rewards',
    Illustration: StepsIllustration,
  },
  {
    name: 'profits',
    Illustration: BlocksIllustration,
  },
  {
    name: 'fees',
    Illustration: CoinsIllustration,
  },
  {
    name: 'rewards',
    Illustration: StepsIllustration,
  },
  {
    name: 'profits',
    Illustration: BlocksIllustration,
  },
  {
    name: 'fees',
    Illustration: CoinsIllustration,
  },
];

export const slickSettings = {
  speed: 500,
  dots: false,
  arrows: false,
  autoplay: false,
  infinite: false,
  slidesToShow: 3,
  centerMode: false,
  slidesToScroll: 0,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '0px',
      },
    },
  ],
};