import { AdvantagesCardProps } from './advantages.types';

export const ADVANTAGE_LIST: ReadonlyArray<AdvantagesCardProps> = [
  {
    name: 'profits',
  },
  {
    name: 'rewards',
  },
  {
    name: 'fees',
  },
];

export const slickSettings = {
  speed: 500,
  dots: false,
  arrows: false,
  autoplay: false,
  // slidesToShow: 3,
  infinite: false,
  slidesToShow: 1,
  // responsive: [
  //   {
  //     breakpoint: 828,
  //     settings: {
  //       autoplay: true,
  //       infinite: true,
  //       slidesToShow: 2,
  //       centerMode: true,
  //       slidesToScroll: 1,
  //       centerPadding: '14%',
  //     },
  //   },
  //   {
  //     breakpoint: 628,
  //     settings: {
  //       autoplay: true,
  //       infinite: true,
  //       slidesToShow: 1,
  //       centerMode: true,
  //       slidesToScroll: 1,
  //       centerPadding: '23%',
  //     },
  //   },
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       autoplay: true,
  //       infinite: true,
  //       slidesToShow: 1,
  //       centerMode: true,
  //       slidesToScroll: 1,
  //       centerPadding: '14%',
  //     },
  //   },
  // ],
};
