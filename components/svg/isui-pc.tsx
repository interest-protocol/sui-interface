import { FC } from 'react';

import { SVGProps } from './svg.types';

const ISuiPC: FC<SVGProps & { filled?: boolean; rounded?: boolean }> = ({
  maxHeight,
  maxWidth,
  filled,
  rounded,
  ...props
}) => (
  <svg
    style={{
      maxWidth: maxWidth,
      maxHeight: maxHeight,
      borderRadius: rounded ? '40px' : 'unset',
    }}
    viewBox={filled ? '0 0 36 40' : '0 0 24 24'}
    {...props}
  >
    {filled ? (
      <>
        <path
          d="M16.6698 0.497646C17.1544 0.225049 17.3967 0.0887502 17.6543 0.035402C17.8822 -0.0118007 18.1178 -0.0118007 18.3457 0.035402C18.6033 0.0887502 18.8456 0.225049 19.3302 0.497646L34.6698 9.12642C35.1544 9.39902 35.3967 9.53532 35.5729 9.726C35.7288 9.89472 35.8466 10.0935 35.9186 10.3094C36 10.5534 36 10.826 36 11.3712V28.6288C36 29.174 36 29.4466 35.9186 29.6906C35.8466 29.9065 35.7288 30.1053 35.5729 30.274C35.3967 30.4647 35.1544 30.601 34.6698 30.8736L19.3302 39.5024C18.8456 39.775 18.6033 39.9113 18.3457 39.9646C18.1178 40.0118 17.8822 40.0118 17.6543 39.9646C17.3967 39.9113 17.1544 39.775 16.6698 39.5024L1.33021 30.8736C0.845612 30.601 0.603311 30.4647 0.427091 30.274C0.271171 30.1053 0.153389 29.9065 0.0813818 29.6906C5.57487e-08 29.4466 0 29.174 0 28.6288V11.3712C0 10.826 5.57487e-08 10.5534 0.0813818 10.3094C0.153389 10.0935 0.271171 9.89472 0.427091 9.726C0.603311 9.53532 0.845612 9.39902 1.33021 9.12642L16.6698 0.497646Z"
          fill="#4BE5FF"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.9136 26.2265C13.1318 28.3618 15.3137 29.6364 17.75 29.6364C18.0022 29.6364 18.2517 29.6227 18.4976 29.5958C18.183 27.4637 16.6773 25.7013 14.6259 25.0717L14.5667 25.0517C13.0492 24.4916 11.8158 23.4152 11.0431 22.0549C10.8821 23.4743 11.1723 24.9271 11.9136 26.2265ZM12.38 18.59L13.6523 16.3601C14.0434 18.8492 15.7796 20.9233 18.1678 21.7249L18.2276 21.7432C20.318 22.3173 21.8856 24.064 22.2418 26.2163L22.4839 27.6793C21.9531 28.2133 21.3423 28.6488 20.6748 28.9722C20.1447 26.118 18.0874 23.7788 15.3146 22.9145C13.6997 22.3068 12.5742 20.8183 12.4234 19.0874L12.38 18.59ZM23.5864 19.4074C24.5392 21.0775 24.7467 23.0009 24.209 24.7811C23.4245 22.2642 21.422 20.2842 18.8525 19.5664C17.2206 19.0071 16.0518 17.5528 15.8502 15.8271L15.5283 13.0721L17.0468 10.4108C17.3593 9.86307 18.1406 9.86307 18.4531 10.4108L23.5864 19.4074Z"
          fill="white"
        />
      </>
    ) : (
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.91363 18.2265C7.13179 20.3618 9.31369 21.6364 11.75 21.6364C12.0022 21.6364 12.2517 21.6227 12.4976 21.5958C12.183 19.4637 10.6773 17.7013 8.62594 17.0717L8.56675 17.0517C7.04925 16.4916 5.81583 15.4152 5.0431 14.0549C4.88208 15.4743 5.17225 16.9271 5.91363 18.2265ZM6.38003 10.59L7.65233 8.36009C8.04344 10.8492 9.77957 12.9233 12.1678 13.7249L12.2276 13.7432C14.318 14.3173 15.8856 16.064 16.2418 18.2163L16.4839 19.6793C15.9531 20.2133 15.3423 20.6488 14.6748 20.9722C14.1447 18.118 12.0874 15.7788 9.31456 14.9145C7.69975 14.3068 6.57421 12.8183 6.42337 11.0874L6.38003 10.59ZM17.5864 11.4074C18.5392 13.0775 18.7467 15.0009 18.209 16.7811C17.4245 14.2642 15.422 12.2842 12.8525 11.5664C11.2206 11.0071 10.0518 9.55279 9.85019 7.82707L9.52833 5.07214L11.0468 2.41078C11.3593 1.86307 12.1406 1.86307 12.4531 2.41078L17.5864 11.4074Z"
        fill="currentColor"
      />
    )}
  </svg>
);

export default ISuiPC;