import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SVGProps } from '../svg.types';

const Liquidity: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => {
  const { colors } = useTheme() as Theme;
  return (
    <svg
      style={{ maxWidth, maxHeight }}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <rect
        x="0.143066"
        width="20"
        height="20"
        rx="10"
        fill={colors['inverseSurface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.0181 4.375V8.125L16.3931 8.75H12.6431V7.5H15.7681V4.375H17.0181Z"
        fill={colors['surface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.3199 5C9.67224 5 9.03098 5.12707 8.43285 5.37387C7.83472 5.62067 7.29156 5.98232 6.83434 6.43797L6.39165 6.87915L5.50928 5.99376L5.95197 5.55257C6.52556 4.98095 7.2066 4.52762 7.95606 4.21838C8.70552 3.90913 9.50878 3.75 10.3199 3.75C11.1311 3.75 11.9343 3.90913 12.6838 4.21838C13.4333 4.52762 14.1143 4.98095 14.6879 5.55257L14.6886 5.55333L16.9478 7.8125L16.0639 8.69638L13.8055 6.43797C13.8054 6.43784 13.8056 6.43809 13.8055 6.43797C13.3484 5.98249 12.805 5.62061 12.207 5.37387C11.6089 5.12707 10.9676 5 10.3199 5Z"
        fill={colors['surface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.26807 11.875L3.89307 11.25H7.64307V12.5H4.51807V15.625H3.26807V11.875Z"
        fill={colors['surface']}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.22226 11.3036L6.48068 13.562C6.48055 13.5619 6.48081 13.5622 6.48068 13.562C6.93782 14.0175 7.48122 14.3794 8.07918 14.6261C8.67731 14.8729 9.31857 15 9.96626 15C10.614 15 11.2552 14.8729 11.8533 14.6261C12.4515 14.3793 12.9946 14.0177 13.4518 13.562L13.8945 13.1209L14.7769 14.0062L14.3342 14.4474C13.7606 15.0191 13.0796 15.4724 12.3301 15.7816C11.5807 16.0909 10.7774 16.25 9.96626 16.25C9.15511 16.25 8.35185 16.0909 7.6024 15.7816C6.85294 15.4724 6.1719 15.0191 5.59831 14.4474L3.33838 12.1875L4.22226 11.3036Z"
        fill={colors['surface']}
      />
    </svg>
  );
};
export default Liquidity;
