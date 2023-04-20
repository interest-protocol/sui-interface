import { AdvantagesCardProps } from './advantages.types';
import {
  BlocksIllustration,
  CoinsIllustration,
  StepsIllustration,
} from './advantages-illustrations';

export const ADVANTAGE_LIST: ReadonlyArray<AdvantagesCardProps> = [
  {
    name: 'profits',
    Illustration: BlocksIllustration,
  },
  {
    name: 'rewards',
    Illustration: StepsIllustration,
  },
  {
    name: 'fees',
    Illustration: CoinsIllustration,
  },
  {
    name: 'profits',
    Illustration: BlocksIllustration,
  },
  {
    name: 'rewards',
    Illustration: StepsIllustration,
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
