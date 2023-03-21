import { useTheme } from '@emotion/react';
import { FC, useMemo } from 'react';

import { Theme } from '@/design-system';

import { SVGProps } from './svg.types';

const UnknownCoin: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { colors } = useTheme() as Theme;
  const color = useMemo(
    () =>
      `rgba(${Math.random() * 255},${Math.random() * 255},${
        Math.random() * 255
      }, 0.7)`,
    []
  );

  return (
    <svg
      style={{ maxWidth: maxWidth, maxHeight: maxHeight }}
      viewBox="0 0 26 26"
      fill="none"
      {...props}
    >
      <path
        d="M13 25C19.6274 25 25 19.6274 25 13C25 6.37258 19.6274 1 13 1C6.37258 1 1 6.37258 1 13C1 19.6274 6.37258 25 13 25Z"
        fill="#48464A"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="round"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 4V5V6.11252C14.8255 6.30066 15.5821 6.71814 16.182 7.318C16.8113 7.9474 17.2399 8.7492 17.4135 9.6221C17.5872 10.495 17.4981 11.3998 17.1575 12.2221C16.8169 13.0443 16.2401 13.7471 15.5001 14.2416C15.0413 14.5482 14.5325 14.7661 14 14.8875V15V16H12V15V14L13 13C13.4945 13 13.9778 12.8534 14.3889 12.5787C14.8 12.304 15.1205 11.9135 15.3097 11.4567C15.4989 10.9999 15.5484 10.4972 15.452 10.0123C15.3555 9.5273 15.1174 9.0819 14.7678 8.7322C14.4181 8.3826 13.9727 8.1445 13.4877 8.048C13.0028 7.9516 12.5001 8.0011 12.0433 8.1903C11.5865 8.3795 11.196 8.7 10.9213 9.1111C10.6466 9.5222 10.5 10.0055 10.5 10.5V11.5H8.5V10.5C8.5 9.61 8.7639 8.74 9.2584 7.9999C9.7529 7.2599 10.4557 6.68314 11.2779 6.34254C11.5128 6.24527 11.7544 6.1685 12 6.11252V5V4H14ZM14 20V18H12V20H14Z"
        fill={colors.textInverted}
      />
    </svg>
  );
};

export default UnknownCoin;
