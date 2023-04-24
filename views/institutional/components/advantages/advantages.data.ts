import { AdvantagesCardProps } from './advantages.types';
import {
  BlockIllustration,
  StepsIllustration,
  SwapCoinsIllustration,
} from './advantages-illustrations';

export const ADVANTAGE_LIST: ReadonlyArray<AdvantagesCardProps> = [
  {
    name: 'profits',
    Illustration: StepsIllustration,
  },
  {
    name: 'rewards',
    Illustration: BlockIllustration,
  },
  {
    name: 'fees',
    Illustration: SwapCoinsIllustration,
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
        centerPadding: '26%',
      },
    },
    {
      breakpoint: 550,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '24%',
      },
    },
    {
      breakpoint: 505,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '21%',
      },
    },
    {
      breakpoint: 490,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '20%',
      },
    },
    {
      breakpoint: 475,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '19%',
      },
    },
    {
      breakpoint: 460,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '19%',
      },
    },
    {
      breakpoint: 445,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '18%',
      },
    },
    {
      breakpoint: 430,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '17%',
      },
    },
    {
      breakpoint: 415,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '16%',
      },
    },
    {
      breakpoint: 400,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '15%',
      },
    },
    {
      breakpoint: 385,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '14%',
      },
    },
    {
      breakpoint: 370,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '13%',
      },
    },
    {
      breakpoint: 355,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '12%',
      },
    },
    {
      breakpoint: 340,
      settings: {
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        centerMode: true,
        slidesToScroll: 1,
        centerPadding: '5%',
      },
    },
  ],
};
