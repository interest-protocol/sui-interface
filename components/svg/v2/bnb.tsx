import { FC } from 'react';

import { SVGProps } from '../svg.types';

const BNB: FC<SVGProps & { filled?: boolean }> = ({
  maxWidth,
  maxHeight,
  filled,
  ...props
}) =>
  filled ? (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3265_11372)">
        <rect width="40" height="40" rx="4" fill="#FDE68A" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.9232 18.3239L20.002 14.247L24.0823 18.3273L26.4543 15.9538L20.002 9.5L13.5497 15.9521L15.9232 18.3239ZM9.5 20.0003L11.8727 17.6277L14.2454 20.0003L11.8727 22.373L9.5 20.0003ZM20.0019 25.7545L15.9231 21.6759L13.5462 24.0461L13.5496 24.0494L20.0019 30.4999L26.4542 24.0461L26.4558 24.0445L24.0822 21.6743L20.0019 25.7545ZM25.7546 20.001L28.1273 17.6283L30.5 20.001L28.1273 22.3736L25.7546 20.001ZM20.0019 17.5909L22.4087 19.9992H22.4103L22.4087 20.0009L20.0019 22.4092L17.5951 20.0042L17.5918 19.9992L17.5951 19.9959L18.0165 19.5746L18.2221 19.3706L20.0019 17.5909Z"
          fill="#1B1B1F"
        />
      </g>
      <defs>
        <clipPath id="clip0_3265_11372">
          <rect width="40" height="40" rx="4" fill="white" />
        </clipPath>
      </defs>
    </svg>
  ) : (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.92324 10.3239L12.002 6.24702L16.0823 10.3273L18.4543 7.95376L12.002 1.5L5.54965 7.9521L7.92324 10.3239ZM1.5 12.0003L3.87272 9.62768L6.24543 12.0003L3.87272 14.373L1.5 12.0003ZM12.0019 17.7545L7.92314 13.6759L5.54623 16.0461L5.54955 16.0494L12.0019 22.4999L18.4542 16.0461L18.4558 16.0445L16.0822 13.6743L12.0019 17.7545ZM17.7546 12.001L20.1273 9.62832L22.5 12.001L20.1273 14.3736L17.7546 12.001ZM12.0019 9.59087L14.4087 11.9992H14.4103L14.4087 12.0009L12.0019 14.4092L9.59515 12.0042L9.59183 11.9992L9.59515 11.9959L10.0165 11.5746L10.2221 11.3706L12.0019 9.59087Z"
        fill="currentColor"
      />
    </svg>
  );

export default BNB;
