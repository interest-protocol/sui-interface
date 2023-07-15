import { FC } from 'react';

import { SVGProps } from '../svg.types';

const SwapCurve: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 14 14"
    fill="none"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.875 1.375V5.125L13.25 5.75H9.5V4.5H12.625V1.375H13.875Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.17686 2C6.52917 2 5.88791 2.12707 5.28978 2.37387C4.69166 2.62067 4.14849 2.98232 3.69128 3.43797L3.24858 3.87915L2.36621 2.99376L2.80891 2.55257C3.38249 1.98095 4.06354 1.52762 4.813 1.21838C5.56245 0.909134 6.36571 0.75 7.17686 0.75C7.98801 0.75 8.79127 0.909134 9.54073 1.21838C10.2902 1.52762 10.9712 1.98095 11.5448 2.55257L11.5456 2.55333L13.8047 4.8125L12.9209 5.69638L10.6624 3.43797C10.6623 3.43784 10.6626 3.43809 10.6624 3.43797C10.2053 2.98249 9.6619 2.62061 9.06394 2.37387C8.46581 2.12707 7.82455 2 7.17686 2Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.125 8.875L0.75 8.25H4.5V9.5H1.375V12.625H0.125V8.875Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M1.0792 8.30362L3.33761 10.562C3.33749 10.5619 3.33774 10.5622 3.33761 10.562C3.79475 11.0175 4.33816 11.3794 4.93612 11.6261C5.53425 11.8729 6.17551 12 6.8232 12C7.47088 12 8.11215 11.8729 8.71028 11.6261C9.3084 11.3793 9.85157 11.0177 10.3088 10.562L10.7515 10.1209L11.6338 11.0062L11.1911 11.4474C10.6176 12.0191 9.93652 12.4724 9.18706 12.7816C8.43761 13.0909 7.63434 13.25 6.8232 13.25C6.01205 13.25 5.20879 13.0909 4.45933 12.7816C3.70987 12.4724 3.02883 12.0191 2.45524 11.4474L0.195312 9.1875L1.0792 8.30362Z"
      fill="currentColor"
    />
  </svg>
);

export default SwapCurve;
