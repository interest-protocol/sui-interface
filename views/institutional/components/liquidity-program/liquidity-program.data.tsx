// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { FC, SVGAttributes } from 'react';

const CaretLeft: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M20 26L10 16L20 6"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const CaretRight: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
    <path
      d="M12 6L22 16L12 26"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const sliderSettings = {
  speed: 500,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: <CaretLeft />,
  nextArrow: <CaretRight />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 628,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};
