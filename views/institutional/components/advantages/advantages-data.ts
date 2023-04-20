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
];

export const slickSettings = {
  speed: 500,
  dots: false,
  arrows: false,
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 828,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '14%',
      },
    },
    {
      breakpoint: 628,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '23%',
      },
    },
    {
      breakpoint: 500,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '14%',
      },
    },
  ],
};
