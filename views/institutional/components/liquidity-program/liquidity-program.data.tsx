const CaretLeft: FC = (props) => {
  const { className, onClick } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 26L10 16L20 6"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const CaretRight: FC = (props) => {
  const { className, onClick } = props;
  return (
    <svg
      className={className}
      onClick={onClick}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 6L22 16L12 26"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

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
        centerMode: true,
      },
    },
  ],
};
