import { FC } from 'react';

import { SVGProps } from '../svg.types';

const CelerUSDCETH: FC<SVGProps & { filled?: boolean }> = ({
  filled,
  maxWidth,
  maxHeight,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 5.79086 5.79086 4 8 4H40C42.2091 4 44 5.79086 44 8V25.0411C43.6703 25.0139 43.3368 25 43 25C36.3726 25 31 30.3726 31 37C31 39.6124 31.8348 42.0298 33.2521 44H8C5.79086 44 4 42.2091 4 40V8Z"
        fill="white"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
      <path
        d="M27.3148 25.7216C27.3148 23.7491 26.1804 23.0728 23.9116 22.7911C22.291 22.5656 21.9668 22.1148 21.9668 21.3257C21.9668 20.5366 22.5071 20.0295 23.5874 20.0295C24.5598 20.0295 25.1 20.3676 25.3701 21.213C25.4242 21.3821 25.5862 21.4947 25.7483 21.4947H26.6125C26.8286 21.4947 26.9907 21.3257 26.9907 21.1003V21.0439C26.7746 19.804 25.8022 18.8459 24.5598 18.7333V17.3806C24.5598 17.1552 24.3977 16.9861 24.1277 16.9297H23.3174C23.1013 16.9297 22.9392 17.0988 22.8851 17.3806V18.6769C21.2645 18.9023 20.2382 20.0295 20.2382 21.4385C20.2382 23.2983 21.3186 24.0309 23.5874 24.3128C25.1 24.5945 25.5862 24.9327 25.5862 25.8344C25.5862 26.7362 24.8299 27.3561 23.8036 27.3561C22.399 27.3561 21.9128 26.7361 21.7507 25.8907C21.6968 25.6654 21.5347 25.5526 21.3727 25.5526H20.4542C20.2382 25.5526 20.0762 25.7216 20.0762 25.9471V26.0035C20.2922 27.4124 21.1565 28.4269 22.9392 28.7087V30.0613C22.9392 30.2867 23.1013 30.4558 23.3713 30.5122H24.1816C24.3977 30.5122 24.5598 30.3431 24.6139 30.0613V28.7087C26.2345 28.4269 27.3148 27.2433 27.3148 25.7216Z"
        fill="#131316"
      />
      <path
        d="M20.995 31.6402C16.7814 30.0622 14.6206 25.159 16.1872 20.8193C16.9975 18.4522 18.7802 16.6488 20.995 15.8034C21.2111 15.6908 21.3191 15.5217 21.3191 15.2398V14.4508C21.3191 14.2253 21.2111 14.0563 20.995 14C20.9409 14 20.8329 14 20.7788 14.0563C15.647 15.747 12.8379 21.4393 14.4585 26.7934C15.4309 29.9494 17.7538 32.3729 20.7788 33.3873C20.995 33.5 21.2111 33.3873 21.265 33.1618C21.3191 33.1056 21.3191 33.0492 21.3191 32.9365V32.1474C21.3191 31.9783 21.157 31.753 20.995 31.6402ZM26.7212 14.0563C26.505 13.9436 26.2889 14.0563 26.235 14.2817C26.1809 14.3382 26.1809 14.3944 26.1809 14.5072V15.2962C26.1809 15.5217 26.343 15.747 26.505 15.8598C30.7186 17.4378 32.8794 22.341 31.3128 26.6807C30.5025 29.0478 28.7198 30.8512 26.505 31.6966C26.2889 31.8092 26.1809 31.9783 26.1809 32.2602V33.0492C26.1809 33.2747 26.2889 33.4437 26.505 33.5C26.5591 33.5 26.6671 33.5 26.7212 33.4437C31.853 31.753 34.6621 26.0607 33.0415 20.7066C32.0691 17.4942 29.6922 15.0707 26.7212 14.0563Z"
        fill="#131316"
      />
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 55 49"
      fill="none"
      {...props}
    >
      <path
        d="M30 27.1824C30 23.5518 27.9627 22.307 23.8881 21.7885C20.9776 21.3735 20.3954 20.5437 20.3954 19.0913C20.3954 17.6389 21.3657 16.7055 23.3059 16.7055C25.0522 16.7055 26.0224 17.3278 26.5075 18.8839C26.6046 19.1951 26.8956 19.4024 27.1867 19.4024H28.7387C29.1268 19.4024 29.4179 19.0913 29.4179 18.6764V18.5726C29.0298 16.2904 27.2835 14.527 25.0522 14.3197V11.8299C25.0522 11.4151 24.7611 11.1038 24.2762 11H22.821C22.4329 11 22.1417 11.3112 22.0446 11.8299V14.2159C19.1341 14.6308 17.2909 16.7055 17.2909 19.2989C17.2909 22.7221 19.2313 24.0705 23.3059 24.5894C26.0224 25.1079 26.8956 25.7304 26.8956 27.39C26.8956 29.0499 25.5373 30.1909 23.6941 30.1909C21.1716 30.1909 20.2984 29.0497 20.0073 27.4936C19.9105 27.079 19.6194 26.8713 19.3284 26.8713H17.6789C17.2909 26.8713 17 27.1824 17 27.5975V27.7013C17.3879 30.2945 18.9401 32.1618 22.1417 32.6805V35.1701C22.1417 35.5849 22.4329 35.8962 22.9178 36H24.373C24.7611 36 25.0522 35.6888 25.1494 35.1701V32.6805C28.0599 32.1618 30 29.9833 30 27.1824Z"
        fill="currentColor"
      />
      <path
        d="M18.9138 38.5665C11.1349 35.6533 7.14571 26.6012 10.0379 18.5895C11.5338 14.2194 14.825 10.8901 18.9138 9.32935C19.3128 9.12148 19.5122 8.80929 19.5122 8.28886V6.83225C19.5122 6.41594 19.3128 6.10394 18.9138 6C18.814 6 18.6146 6 18.5147 6.10394C9.0406 9.22523 3.85457 19.7341 6.84645 29.6186C8.64165 35.445 12.9301 39.9192 18.5147 41.7919C18.9138 42 19.3128 41.7919 19.4123 41.3756C19.5122 41.2719 19.5122 41.1678 19.5122 40.9597V39.5029C19.5122 39.1907 19.2129 38.7748 18.9138 38.5665ZM29.4853 6.10394C29.0862 5.89588 28.6872 6.10394 28.5877 6.52006C28.4878 6.62437 28.4878 6.72812 28.4878 6.93637V8.39298C28.4878 8.80929 28.7871 9.22523 29.0862 9.43348C36.8651 12.3467 40.8543 21.3988 37.9621 29.4105C36.4662 33.7806 33.175 37.1099 29.0862 38.6706C28.6872 38.8785 28.4878 39.1907 28.4878 39.7111V41.1678C28.4878 41.5841 28.6872 41.8961 29.0862 42C29.186 42 29.3854 42 29.4853 41.8961C38.9594 38.7748 44.1454 28.2659 41.1536 18.3814C39.3584 12.4508 34.9702 7.97668 29.4853 6.10394Z"
        fill="currentColor"
      />
      <path
        d="M53 37C53 31.4772 48.5228 27 43 27C37.4772 27 33 31.4772 33 37C33 42.5228 37.4772 47 43 47C48.5228 47 53 42.5228 53 37Z"
        fill="#627EEA"
      />
      <path
        d="M43.4747 29L43.377 29.3323V38.9743L43.4747 39.0718L47.9504 36.4263L43.4747 29Z"
        fill="white"
      />
      <path
        d="M43.4757 29L39 36.4263L43.4757 39.0719V34.392V29Z"
        fill="white"
      />
      <path
        d="M43.475 40.5271L43.4199 40.5942V44.0289L43.475 44.1898L47.9534 37.8828L43.475 40.5271Z"
        fill="white"
      />
      <path
        d="M43.4757 44.1898V40.5271L39 37.8828L43.4757 44.1898Z"
        fill="white"
      />
      <path
        d="M43.4766 39.0724L47.9522 36.4269L43.4766 34.3926V39.0724Z"
        fill="white"
      />
      <path d="M39 36.4269L43.4757 39.0725V34.3926L39 36.4269Z" fill="white" />
    </svg>
  );

export default CelerUSDCETH;
