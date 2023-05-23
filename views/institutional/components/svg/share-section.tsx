import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';

export const CyanBox: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 50 58"
    fill="none"
    {...props}
  >
    <path
      d="M25.0634 0.148567L0.156494 14.568L25.037 28.9721L49.9439 14.5527L25.0634 0.148567Z"
      fill="#CFFAFE"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.0458 29.0017L0.138916 14.5625L0.138916 43.4674L25.0458 57.9065L25.0458 29.0017Z"
      fill="#67E8F9"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M49.9474 14.559L25.0405 28.9982L25.0405 57.903L49.9474 43.4639V14.559Z"
      fill="#A5F3FC"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CyanTallBox: FC<SVGProps> = ({
  maxHeight,
  maxWidth,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 150 117"
    fill="none"
    {...props}
  >
    <path
      d="M125.29 87.3386L0.398193 15.0292L0.398193 43.6796L125.29 115.989V87.3386Z"
      fill="#67E8F9"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M149.652 72.9378L124.938 87.2649V116.277L149.652 101.95V72.9378Z"
      fill="#A5F3FC"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.1637 0.794276L0.468018 15.0914L125.067 87.2261L149.763 72.929L25.1637 0.794276Z"
      fill="#CFFAFE"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.1217 -2.57104L0.214844 11.8484L25.0954 26.2525L50.0022 11.8331L25.1217 -2.57104Z"
      fill="#131316"
    />
  </svg>
);

export const PrimaryBox: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 51 58"
    fill="none"
    {...props}
  >
    <mask
      id="mask0_2300_51476"
      style={{ maskType: 'luminance' }}
      maskUnits="userSpaceOnUse"
      x="0"
      y="0"
      width="51"
      height="58"
    >
      <path
        d="M25.6472 0.103394L0.723145 14.5173V43.4414L25.6292 57.8613V57.8553L50.5322 43.4384V14.5128L25.6472 0.103394Z"
        fill="white"
      />
    </mask>
    <g mask="url(#mask0_2300_51476)">
      <path
        d="M25.6474 0.102913L0.740479 14.5223L25.621 28.9265L50.5279 14.5071L25.6474 0.102913Z"
        fill="#CCDDFF"
        stroke="#131316"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.6298 28.956L0.7229 14.5168L0.7229 43.4217L25.6298 57.8609L25.6298 28.956Z"
        fill="#6699FF"
        stroke="#131316"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.5311 14.5133L25.6243 28.9525L25.6243 57.8574L50.5311 43.4182V14.5133Z"
        fill="#99BBFF"
        stroke="#131316"
        strokeMiterlimit="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export const PrimaryTallBox: FC<SVGProps> = ({
  maxHeight,
  maxWidth,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 150 120"
    fill="none"
    {...props}
  >
    <path
      d="M124.595 91.1522L99.688 105.572L124.568 119.976L149.475 105.556L124.595 91.1522Z"
      fill="#131316"
    />
    <path
      d="M125.289 86.9414L0.397949 14.632L0.397949 43.2823L125.289 115.592V86.9414Z"
      fill="#6699FF"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M149.652 72.5406L124.938 86.8677V115.88L149.652 101.553V72.5406Z"
      fill="#99BBFF"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.1635 0.397059L0.467773 14.6942L125.067 86.8289L149.763 72.5317L25.1635 0.397059Z"
      fill="#CCDDFF"
      stroke="#131316"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25.3136 -2.76163L0.61792 11.5355L125.217 83.6702L149.913 69.3731L25.3136 -2.76163Z"
      fill="#131316"
    />
  </svg>
);

export const ZealyPrimaryBoxesFront: FC<SVGProps> = ({
  maxHeight,
  maxWidth,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 195 130"
    fill="none"
    {...props}
  >
    <path
      d="M153.921 4.60258L113.028 28.1689L153.878 51.7103L194.77 28.144L153.921 4.60258Z"
      fill="#CCDDFF"
    />
    <path
      d="M153.921 4.60258L113.028 28.1689L153.878 51.7103L194.77 28.144L153.921 4.60258Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M153.921 4.60258L113.028 28.1689L153.878 51.7103L194.77 28.144L153.921 4.60258Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M153.892 51.7254L113 28.16V75.4339L153.892 98.9993V51.7254Z"
      fill="#6699FF"
    />
    <path
      d="M153.892 51.7254L113 28.16V75.4339L153.892 98.9993V51.7254Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M153.892 51.7254L113 28.16V75.4339L153.892 98.9993V51.7254Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M194.776 28.1542L153.883 51.7196V98.9935L194.776 75.4281V28.1542Z"
      fill="#99BBFF"
    />
    <path
      d="M194.776 28.1542L153.883 51.7196V98.9935L194.776 75.4281V28.1542Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M194.776 28.1542L153.883 51.7196V98.9935L194.776 75.4281V28.1542Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M145.824 53.5904L113.147 34.6371V74.6926L145.824 93.6459V53.5904Z"
      fill="#1B1B1F"
    />
    <path
      d="M145.824 53.5904L113.147 34.6371V74.6926L145.824 93.6459V53.5904Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
    <path
      d="M145.824 53.5904L113.147 34.6371V74.6926L145.824 93.6459V53.5904Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M145.824 53.5904L113.147 34.6371V74.6926L145.824 93.6459V53.5904Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.921 -0.000811168L0.0281982 23.5656L40.8777 47.1069L81.7705 23.5406L40.921 -0.000811168Z"
      fill="#CCDDFF"
    />
    <path
      d="M40.921 -0.000811168L0.0281982 23.5656L40.8777 47.1069L81.7705 23.5406L40.921 -0.000811168Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.921 -0.000811168L0.0281982 23.5656L40.8777 47.1069L81.7705 23.5406L40.921 -0.000811168Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.8923 47.122L-0.000488281 23.5566L-0.000488281 70.8305L40.8923 94.3959L40.8923 47.122Z"
      fill="#6699FF"
    />
    <path
      d="M40.8923 47.122L-0.000488281 23.5566L-0.000488281 70.8305L40.8923 94.3959L40.8923 47.122Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.8923 47.122L-0.000488281 23.5566L-0.000488281 70.8305L40.8923 94.3959L40.8923 47.122Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M81.7762 23.5508L40.8834 47.1162L40.8834 94.3901L81.7762 70.8247V23.5508Z"
      fill="#99BBFF"
    />
    <path
      d="M81.7762 23.5508L40.8834 47.1162L40.8834 94.3901L81.7762 70.8247V23.5508Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M81.7762 23.5508L40.8834 47.1162L40.8834 94.3901L81.7762 70.8247V23.5508Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.921 35.6026L57.0282 59.1689L97.8777 82.7103L138.77 59.144L97.921 35.6026Z"
      fill="#CCDDFF"
    />
    <path
      d="M97.921 35.6026L57.0282 59.1689L97.8777 82.7103L138.77 59.144L97.921 35.6026Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.921 35.6026L57.0282 59.1689L97.8777 82.7103L138.77 59.144L97.921 35.6026Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.8923 82.7254L56.9995 59.16L56.9995 106.434L97.8923 129.999V82.7254Z"
      fill="#6699FF"
    />
    <path
      d="M97.8923 82.7254L56.9995 59.16L56.9995 106.434L97.8923 129.999V82.7254Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.8923 82.7254L56.9995 59.16L56.9995 106.434L97.8923 129.999V82.7254Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138.776 59.1542L97.8834 82.7196V129.993L138.776 106.428V59.1542Z"
      fill="#99BBFF"
    />
    <path
      d="M138.776 59.1542L97.8834 82.7196V129.993L138.776 106.428V59.1542Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138.776 59.1542L97.8834 82.7196V129.993L138.776 106.428V59.1542Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ZealyPrimaryBoxesBack: FC<SVGProps> = ({
  maxHeight,
  maxWidth,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 193 129"
    fill="none"
    {...props}
  >
    <path
      d="M97.921 0.602582L57.0282 24.1689L97.8777 47.7103L138.77 24.144L97.921 0.602582Z"
      fill="#CCDDFF"
    />
    <path
      d="M97.921 0.602582L57.0282 24.1689L97.8777 47.7103L138.77 24.144L97.921 0.602582Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.921 0.602582L57.0282 24.1689L97.8777 47.7103L138.77 24.144L97.921 0.602582Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.8923 47.7254L56.9995 24.16L56.9995 71.4339L97.8923 94.9993V47.7254Z"
      fill="#6699FF"
    />
    <path
      d="M97.8923 47.7254L56.9995 24.16L56.9995 71.4339L97.8923 94.9993V47.7254Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M97.8923 47.7254L56.9995 24.16L56.9995 71.4339L97.8923 94.9993V47.7254Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138.776 24.1542L97.8834 47.7196V94.9935L138.776 71.4281V24.1542Z"
      fill="#99BBFF"
    />
    <path
      d="M138.776 24.1542L97.8834 47.7196V94.9935L138.776 71.4281V24.1542Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M138.776 24.1542L97.8834 47.7196V94.9935L138.776 71.4281V24.1542Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M89.8239 53.5904L57.1472 34.6371L57.1472 74.6926L89.8239 93.6459V53.5904Z"
      fill="#1B1B1F"
    />
    <path
      d="M89.8239 53.5904L57.1472 34.6371L57.1472 74.6926L89.8239 93.6459V53.5904Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
    <path
      d="M89.8239 53.5904L57.1472 34.6371L57.1472 74.6926L89.8239 93.6459V53.5904Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M89.8239 53.5904L57.1472 34.6371L57.1472 74.6926L89.8239 93.6459V53.5904Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M151.921 33L111 56.5573V103.829L151.891 127.397V127.387L192.778 103.824V56.55L151.921 33Z"
      fill="black"
    />
    <path
      d="M151.921 32.9993L111.028 56.5657L151.878 80.1071L192.771 56.5407L151.921 32.9993Z"
      fill="#CCDDFF"
    />
    <path
      d="M151.921 32.9993L111.028 56.5657L151.878 80.1071L192.771 56.5407L151.921 32.9993Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M151.921 32.9993L111.028 56.5657L151.878 80.1071L192.771 56.5407L151.921 32.9993Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M144.892 76.413L104 52.8477L104 107.83L144.892 131.396V76.413Z"
      fill="#1B1B1F"
    />
    <path
      d="M144.892 76.413L104 52.8477L104 107.83L144.892 131.396V76.413Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
    <path
      d="M144.892 76.413L104 52.8477L104 107.83L144.892 131.396V76.413Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M144.892 76.413L104 52.8477L104 107.83L144.892 131.396V76.413Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M192.776 56.551L151.884 80.1163V127.39L192.776 103.825V56.551Z"
      fill="#99BBFF"
    />
    <path
      d="M192.776 56.551L151.884 80.1163V127.39L192.776 103.825V56.551Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M192.776 56.551L151.884 80.1163V127.39L192.776 103.825V56.551Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.921 34.6026L1.0282 58.1689L41.8777 81.7103L82.7705 58.144L41.921 34.6026Z"
      fill="#CCDDFF"
    />
    <path
      d="M41.921 34.6026L1.0282 58.1689L41.8777 81.7103L82.7705 58.144L41.921 34.6026Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.921 34.6026L1.0282 58.1689L41.8777 81.7103L82.7705 58.144L41.921 34.6026Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.8923 81.7254L0.999512 58.16L0.999512 105.434L41.8923 128.999L41.8923 81.7254Z"
      fill="#6699FF"
    />
    <path
      d="M41.8923 81.7254L0.999512 58.16L0.999512 105.434L41.8923 128.999L41.8923 81.7254Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M41.8923 81.7254L0.999512 58.16L0.999512 105.434L41.8923 128.999L41.8923 81.7254Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82.7762 58.1542L41.8834 81.7196L41.8834 128.993L82.7762 105.428V58.1542Z"
      fill="#99BBFF"
    />
    <path
      d="M82.7762 58.1542L41.8834 81.7196L41.8834 128.993L82.7762 105.428V58.1542Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M82.7762 58.1542L41.8834 81.7196L41.8834 128.993L82.7762 105.428V58.1542Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.8239 77.5449L1.14722 58.5917L1.14722 106.693L33.8239 125.646L33.8239 77.5449Z"
      fill="#1B1B1F"
    />
    <path
      d="M33.8239 77.5449L1.14722 58.5917L1.14722 106.693L33.8239 125.646L33.8239 77.5449Z"
      fill="#B6C4FF"
      fillOpacity="0.04"
    />
    <path
      d="M33.8239 77.5449L1.14722 58.5917L1.14722 106.693L33.8239 125.646L33.8239 77.5449Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M33.8239 77.5449L1.14722 58.5917L1.14722 106.693L33.8239 125.646L33.8239 77.5449Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const ZealyGreenBoxes: FC<SVGProps> = ({
  maxHeight,
  maxWidth,
  ...props
}) => (
  <svg
    style={{ maxHeight, maxWidth }}
    viewBox="0 0 82 95"
    fill="none"
    {...props}
  >
    <path
      d="M40.921 0.602704L0.0281982 24.1691L40.8777 47.7105L81.7705 24.1441L40.921 0.602704Z"
      fill="#ECFCCB"
    />
    <path
      d="M40.921 0.602704L0.0281982 24.1691L40.8777 47.7105L81.7705 24.1441L40.921 0.602704Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.921 0.602704L0.0281982 24.1691L40.8777 47.7105L81.7705 24.1441L40.921 0.602704Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.8923 47.7255L-0.000488281 24.1602L-0.000488281 71.434L40.8923 94.9994L40.8923 47.7255Z"
      fill="#BEF264"
    />
    <path
      d="M40.8923 47.7255L-0.000488281 24.1602L-0.000488281 71.434L40.8923 94.9994L40.8923 47.7255Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.8923 47.7255L-0.000488281 24.1602L-0.000488281 71.434L40.8923 94.9994L40.8923 47.7255Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M81.7762 24.1544L40.8834 47.7197L40.8834 94.9936L81.7762 71.4282V24.1544Z"
      fill="#D9F99D"
    />
    <path
      d="M81.7762 24.1544L40.8834 47.7197L40.8834 94.9936L81.7762 71.4282V24.1544Z"
      stroke="#1B1B1F"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M81.7762 24.1544L40.8834 47.7197L40.8834 94.9936L81.7762 71.4282V24.1544Z"
      stroke="#B6C4FF"
      strokeOpacity="0.04"
      strokeMiterlimit="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <rect
      width="25.7291"
      height="25.7291"
      transform="matrix(0.866025 -0.5 2.20305e-08 1 51 51.8645)"
      fill="url(#pattern0)"
    />
    <path
      d="M35.9177 20.1486C34.711 20.8454 33.8891 21.7331 33.5562 22.6995C33.2232 23.6659 33.3941 24.6676 34.0472 25.5779C34.7003 26.4882 35.8063 27.2663 37.2253 27.8137C38.6443 28.3611 40.3127 28.6533 42.0193 28.6533C43.7259 28.6533 45.3942 28.3611 46.8133 27.8137C48.2323 27.2663 49.3383 26.4882 49.9914 25.5779C50.6445 24.6676 50.8154 23.6659 50.4824 22.6995C50.1495 21.7331 49.3276 20.8454 48.1209 20.1486C46.5005 19.2167 44.3065 18.6934 42.0193 18.6934C39.7321 18.6934 37.5381 19.2167 35.9177 20.1486ZM43.8556 21.3782L43.7031 25.26C43.6978 25.3596 43.6264 25.4542 43.5036 25.5242C43.4448 25.5591 43.3746 25.587 43.2971 25.6062C43.2196 25.6254 43.1362 25.6355 43.0519 25.636L39.6901 25.68C39.6009 25.6835 39.5113 25.6766 39.4268 25.6596C39.3423 25.6426 39.2646 25.6159 39.1984 25.5812C39.1322 25.5464 39.0789 25.5043 39.0416 25.4573C39.0043 25.4103 38.9839 25.3595 38.9815 25.3079C38.9791 25.2562 38.9949 25.2048 39.0278 25.1568C39.0607 25.1087 39.1101 25.065 39.173 25.0283C39.2359 24.9915 39.311 24.9625 39.3938 24.943C39.4766 24.9234 39.5655 24.9137 39.6549 24.9145L42.383 24.8772L42.5297 21.3579C42.5414 21.2592 42.6186 21.167 42.7453 21.1005C42.872 21.0339 43.0383 20.9982 43.2096 21.0008C43.3808 21.0035 43.5436 21.0442 43.664 21.1145C43.7844 21.1849 43.8531 21.2793 43.8556 21.3782Z"
      fill="#3F6212"
    />
    <defs>
      <pattern
        id="pattern0"
        patternContentUnits="objectBoundingBox"
        width="1"
        height="1"
      >
        <use xlinkHref="#image0_1966_48689" transform="scale(0.00333333)" />
      </pattern>
      <image
        id="image0_1966_48689"
        width="300"
        height="300"
        xlinkHref="data:image/png;base64,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zNNPPy2nwetlEliiV5jHAt5+++3MmjWLrKyspNuQlVJUV1ezaNEi/vSnP8mZ0PuABJbocUopJk6cyMKFC7n88suTbm4VGHs6t27dyn333cd7770n9ao+knyfJBFTFouFq6++mqVLlybdCgumQCDA3//+d+bPn8/u3bslrPqQBJboEbquM2jQIObMmcNNN91EZmZmUoaVx+Nhy5YtrFixgiNHjiTla4xnEliiR5x55pksW7aMqVOnJuUQEKCxsZFHH32UdevW0dHRIWEVA8n5yRJ9QilFWloa1113HYsXLyYvLy/WTeoVSin27t3Lfffdx5///GcprseQBJaIilKKkpISFi5cyA9+8APS09Nj3aRes3XrVubNm8eHH34Y66b0exJYIiJm7+Kyyy5j4cKFnHnmmUnZ21BKEQgEeO2117jvvvv46quvpLgeBySwRJeZp4a/7bbbuP3228nOzk7KsALw+Xw888wzPPDAA9TX10tYxQkJLNFl48ePZ9myZUybNi2pN+DDhw/z0EMPsWXLFlkWJs5IYIlTUkqRmprKNddcwz333JO0c6tMe/bs4e677+a1116TZWHikASWOCld1ykpKWHevHlcc801SV1YDwQCfPjhh8ybN4+PP/44qUM5kUlgiZO66KKLWL58OWeccUZSDwEDgQAvvvgiixYtYv/+/Un9WhOdBJY4hnnQ8p133sktt9xCdnZ2rJvUa5RStLe3s2rVKtauXUtbW5uEVZyTwBIhmqYxadIkFi5cyKWXXorVao11k3rVvn37ePDBB/mf//kfKa4nCAksETon4PXXX88999xDYWFhUm+8uq7zwQcfsHTpUt59991YN0dEQAKrn9N1nREjRjBv3jx++MMfJnVhHYx61csvv8yiRYvYs2dPUgdzMpLA6qfME0J8//vf54EHHmD48OFJv/G2trbyxBNPsHLlSjlHYIKSwOqHlFIUFhZy++23M336dNLS0mLdpF6l6zrffPMNy5Yt47nnnpN6VQKTwOpnLBYL06ZN4/7772fSpElJuxSMSdd1PvroIxYsWMC//vUvmQya4JL70ypCdF0PTVeYMWMGubm5sW5Sr1NK8b//+78sWbKE3bt3S6+qm+JhWR0JrH5A0zQmT57MwoULufjii5O+VwVGvWr9+vU8+uijtLS0xHxDS0RKqdChWS6Xi/z8fCorK/H7/TFr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"
      />
    </defs>
  </svg>
);
