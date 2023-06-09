export const sliderSettings = {
  speed: 500,
  arrows: false,
  autoplay: true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
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
        centerMode: true,
      },
    },
  ],
};
