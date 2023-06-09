import { FC } from 'react';

import { SVGProps } from '../svg.types';

const USDT: FC<SVGProps & { filled?: boolean }> = ({
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
      <g clipPath="url(#clip0_3265_11331)">
        <rect width="40" height="40" rx="4" fill="#D9F99D" />
        <path
          d="M17.9313 18.4081V14.0607H12.0349V10.25H28.5118V14.1144H22.6154V18.4081H17.9313Z"
          fill="#1B1B1F"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.5 18.8913C9.5 17.4421 14.2392 16.2614 20.1356 16.2614C26.032 16.2614 30.7712 17.4421 30.7712 18.8913C30.7712 20.3404 26.032 21.5212 20.1356 21.5212C14.2392 21.5212 9.5 20.3404 9.5 18.8913ZM29.8893 18.8912C29.5036 18.3545 26.3074 16.6907 20.1354 16.6907C13.9635 16.6907 10.7673 18.3008 10.3816 18.8912C10.7673 19.4279 13.9635 20.233 20.1354 20.233C26.3625 20.233 29.5036 19.4279 29.8893 18.8912Z"
          fill="#1B1B1F"
        />
        <path
          d="M22.615 19.7499V16.7443C21.8435 16.6906 21.0169 16.637 20.1903 16.637C19.4189 16.637 18.7025 16.637 17.9861 16.6906V19.6962C18.6474 19.6962 19.4189 19.7499 20.1903 19.7499C21.0169 19.8036 21.8435 19.8036 22.615 19.7499Z"
          fill="#1B1B1F"
        />
        <path
          d="M20.1354 21.521C19.3639 21.521 18.6475 21.521 17.9312 21.4674V29.4644H22.5601V21.4137C21.7886 21.4674 20.962 21.521 20.1354 21.521Z"
          fill="#1B1B1F"
        />
      </g>
      <defs>
        <clipPath id="clip0_3265_11331">
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
        d="M9.93132 10.4081V6.06068H4.03491V2.25H20.5118V6.11435H14.6154V10.4081H9.93132Z"
        fill="currentColor"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 10.8913C1.5 9.44213 6.23917 8.26135 12.1356 8.26135C18.032 8.26135 22.7712 9.44213 22.7712 10.8913C22.7712 12.3404 18.032 13.5212 12.1356 13.5212C6.23917 13.5212 1.5 12.3404 1.5 10.8913ZM21.8893 10.8912C21.5036 10.3545 18.3074 8.69067 12.1354 8.69067C5.9635 8.69067 2.76731 10.3008 2.38157 10.8912C2.76731 11.4279 5.9635 12.233 12.1354 12.233C18.3625 12.233 21.5036 11.4279 21.8893 10.8912Z"
        fill="currentColor"
      />
      <path
        d="M14.615 11.7499V8.74431C13.8435 8.69063 13.0169 8.63696 12.1903 8.63696C11.4189 8.63696 10.7025 8.63696 9.98608 8.69063V11.6962C10.6474 11.6962 11.4189 11.7499 12.1903 11.7499C13.0169 11.8036 13.8435 11.8036 14.615 11.7499Z"
        fill="currentColor"
      />
      <path
        d="M12.1354 13.521C11.3639 13.521 10.6475 13.521 9.93115 13.4674V21.4644H14.5601V13.4137C13.7886 13.4674 12.962 13.521 12.1354 13.521Z"
        fill="currentColor"
      />
    </svg>
  );

export default USDT;
