import { useTheme } from '@emotion/react';
import { FC } from 'react';

import { SVGProps } from './svg.types';

const Done: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as { dark: boolean };
  return (
    <svg
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      viewBox="0 0 40 40"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_394_34524)">
        <g clipPath="url(#clip1_394_34524)">
          <rect width="40" height="40" fill={dark ? '#84CC16' : '#D9F99D'} />
          <path
            d="M17.7939 24.2348L27.7573 14.262C27.8907 14.1535 28.0595 14.0981 28.2313 14.1066C28.4041 14.115 28.5675 14.1875 28.6899 14.3098C28.8122 14.4322 28.8847 14.5956 28.8931 14.7684C28.9016 14.9402 28.8462 15.109 28.7377 15.2424L18.2406 25.7394C18.1073 25.8642 17.9323 25.9348 17.7497 25.9375C17.5672 25.9348 17.3921 25.8642 17.2588 25.7394L12.0118 20.4924C11.9033 20.359 11.8479 20.1902 11.8563 20.0184C11.8648 19.8456 11.9372 19.6822 12.0596 19.5598C12.1819 19.4375 12.3454 19.365 12.5182 19.3566C12.6899 19.3481 12.8587 19.4035 12.9921 19.512L17.7055 24.2347L17.7497 24.279L17.7939 24.2348Z"
            fill={dark ? '#F7FEE7' : '#3F6212'}
            stroke="#F2F0F4"
            strokeWidth="0.125"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_394_34524">
          <rect width="40" height="40" fill="white" />
        </clipPath>
        <clipPath id="clip1_394_34524">
          <rect width="40" height="40" rx="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Done;
