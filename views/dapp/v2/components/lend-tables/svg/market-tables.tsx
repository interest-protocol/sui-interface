import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import { Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { SVGProps } from '@/components/svg/svg.types';
import { UnknownCoinSVG } from '@/components/svg/v2';

export const BNB: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3047_15361)">
        <g clipPath="url(#clip1_3047_15361)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.5)"
            fill={dark ? '#FDE68A' : '#F59E0B'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.9232 18.8239L20.002 14.747L24.0823 18.8273L26.4543 16.4538L20.002 10L13.5497 16.4521L15.9232 18.8239ZM9.5 20.5003L11.8727 18.1277L14.2454 20.5003L11.8727 22.873L9.5 20.5003ZM20.0019 26.2545L15.9231 22.1759L13.5462 24.5461L13.5496 24.5494L20.0019 30.9999L26.4542 24.5461L26.4558 24.5445L24.0822 22.1743L20.0019 26.2545ZM25.7546 20.501L28.1273 18.1283L30.5 20.501L28.1273 22.8736L25.7546 20.501ZM20.0019 18.0909L22.4087 20.4992H22.4103L22.4087 20.5009L20.0019 22.9092L17.5951 20.5042L17.5918 20.4992L17.5951 20.4959L18.0165 20.0746L18.2221 19.8706L20.0019 18.0909Z"
            fill={dark ? '#92400E' : '#FFF'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3047_15361">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3047_15361">
          <rect y="0.5" width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ETH: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <rect
        width="40"
        height="40"
        transform="translate(0 0.5)"
        fill={dark ? '#FBCFE8' : '#EC4899'}
      />
      <path
        d="M20.2548 10L20.1182 10.4644V23.9389L20.2548 24.0753L26.5095 20.3781L20.2548 10Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
      <path
        d="M20.2548 10L14.0001 20.3781L20.2548 24.0753V17.5352V10Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
      <path
        d="M20.2548 26.1103L20.1779 26.2042V31.0041L20.2548 31.229L26.5133 22.415L20.2548 26.1103Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
      <path
        d="M20.2548 31.229V26.1103L14.0001 22.415L20.2548 31.229Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
      <path
        d="M20.2547 24.0752L26.5093 20.3781L20.2547 17.5352V24.0752Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
      <path
        d="M14.0001 20.3781L20.2547 24.0753V17.5352L14.0001 20.3781Z"
        fill={dark ? '#9D174D' : '#FFF'}
      />
    </svg>
  );
};

export const SUI: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3047_15418)">
        <g clipPath="url(#clip1_3047_15418)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.5)"
            fill={dark ? '#A5F3FC' : '#06B6D4'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M20 30.25C17.5637 30.25 15.3818 28.9843 14.1636 26.8639C12.9455 24.7435 12.9455 22.212 14.1636 20.0921L15.5582 17.6648C16.0375 20.0023 17.7283 21.9286 20.0192 22.6922L20.079 22.7103C22.1695 23.2805 23.737 25.0151 24.0932 27.1524L24.3453 28.6652C23.1541 29.6804 21.6344 30.25 20 30.25ZM26.1854 26.1707C27.0406 24.2072 26.9243 21.9857 25.8364 20.0921L20.7031 11.1579C20.3906 10.614 19.6093 10.614 19.2968 11.1579L17.4183 14.4274L17.7016 16.8353C17.9032 18.5491 19.072 19.9933 20.7039 20.5487C23.4236 21.3031 25.508 23.4618 26.1854 26.1707Z"
            fill={dark ? '#155E75' : '#FFF'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3047_15418">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3047_15418">
          <rect y="0.5" width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const BTC: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3047_15443)">
        <g clipPath="url(#clip1_3047_15443)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.5)"
            fill={dark ? '#ffffff1e' : '#3535391e'}
          />
          ;
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M26.3512 16.7339C26.1119 14.6183 24.2709 13.9383 21.958 13.7744L21.9092 10.8351L20.1196 10.8651L20.1672 13.7269C19.6974 13.7347 19.2167 13.7519 18.7393 13.7694L18.6917 10.8886L16.9035 10.9183L16.9517 13.8567C16.5644 13.8711 16.1842 13.8846 15.8132 13.891L15.8129 13.8819L13.3452 13.922L13.3774 15.8328C13.3774 15.8328 14.6982 15.7857 14.6766 15.8104C15.4013 15.7986 15.6446 16.2152 15.7188 16.5773L15.7746 19.9257C15.8246 19.9252 15.8898 19.9262 15.9639 19.9351L15.7754 19.9383L15.8523 24.6293C15.8243 24.8579 15.6963 25.2238 15.19 25.2331C15.2132 25.253 13.8894 25.2543 13.8894 25.2543L13.5696 27.3974L15.8983 27.3585C16.1612 27.3544 16.4216 27.3529 16.6792 27.3515L16.6793 27.3515C16.8462 27.3505 17.0118 27.3496 17.1761 27.3479L17.2264 30.3211L19.0136 30.2917L18.9652 27.3503C19.4556 27.3524 19.9305 27.3484 20.3941 27.3403L20.442 30.2681L22.2311 30.2382L22.1824 27.2707C25.1874 27.0482 27.2805 26.2553 27.4942 23.4271C27.6675 21.1492 26.5812 20.152 24.8668 19.7698C25.8951 19.2235 26.5282 18.282 26.3508 16.734L26.3512 16.7339ZM23.9534 23.1321C23.9877 25.1711 20.7832 25.1794 19.3183 25.1831C19.1871 25.1835 19.0699 25.1838 18.9702 25.1855L18.9052 21.2468C19.0271 21.2448 19.1751 21.2388 19.3428 21.2321C20.8432 21.1717 23.9181 21.048 23.9539 23.1319L23.9534 23.1321ZM19.1693 19.4425C20.3924 19.4422 23.0584 19.4416 23.0281 17.589C22.9969 15.6938 20.4339 15.8045 19.1821 15.8586C19.0414 15.8647 18.9173 15.87 18.8151 15.8718L18.8744 19.444C18.9586 19.4426 19.058 19.4426 19.1693 19.4425Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3047_15443">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3047_15443">
          <rect y="0.5" width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const DAI: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3047_15469)">
        <g clipPath="url(#clip1_3047_15469)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.5)"
            fill={dark ? '#ffffff1e' : '#3535391e'}
          />
          <path
            d="M20.197 21.8774H24.9924C25.0947 21.8774 25.1429 21.8774 25.1503 21.727C25.1895 21.1795 25.1895 20.6288 25.1503 20.0806C25.1503 19.9742 25.1032 19.9302 25.0004 19.9302H15.4567C15.3386 19.9302 15.3068 19.9742 15.3068 20.0985V21.6741C15.3068 21.8774 15.3068 21.8774 15.4959 21.8774H20.197ZM24.6148 18.0888C24.6284 18.0487 24.6284 18.0047 24.6148 17.9652C24.5347 17.7695 24.4399 17.5827 24.3297 17.4075C24.1639 17.1079 23.9685 16.8319 23.7459 16.584C23.6408 16.4342 23.5193 16.2997 23.383 16.1856C22.7004 15.5336 21.8888 15.0721 21.0165 14.8401C20.5764 14.7292 20.1266 14.6763 19.6757 14.6808H15.4403C15.3221 14.6808 15.3062 14.7337 15.3062 14.849V17.9913C15.3062 18.1239 15.3062 18.1596 15.4562 18.1596H24.558C24.558 18.1596 24.6369 18.1417 24.6528 18.0888H24.6148ZM24.6148 23.7188C24.4807 23.7022 24.3456 23.7022 24.2116 23.7188H15.4647C15.3465 23.7188 15.3068 23.7188 15.3068 23.896V26.9681C15.3068 27.1096 15.3068 27.1453 15.4647 27.1453H19.5031C19.6961 27.1619 19.8892 27.1466 20.0783 27.1013C20.6644 27.0542 21.2408 26.9114 21.7906 26.6762C21.9905 26.5984 22.1836 26.4971 22.3659 26.3754H22.421C23.3677 25.8228 24.1366 24.9546 24.6216 23.8889C24.6216 23.8889 24.6767 23.7551 24.6148 23.72V23.7188ZM13.7218 28.7381V28.6852V26.6227V25.9235V23.8431C13.7218 23.7277 13.7218 23.7105 13.5957 23.7105H11.884C11.7892 23.7105 11.75 23.7105 11.75 23.569V21.8869H13.5798C13.682 21.8869 13.7218 21.8869 13.7218 21.7365V20.0723C13.7218 19.9659 13.7218 19.9398 13.5957 19.9398H11.884C11.7892 19.9398 11.75 19.9398 11.75 19.7983V18.2405C11.75 18.143 11.75 18.1169 11.8761 18.1169H13.5718C13.69 18.1169 13.7218 18.1169 13.7218 17.9486V13.1772C13.7218 13.0357 13.7218 13 13.8796 13H19.795C20.2243 13.0191 20.6508 13.072 21.0727 13.1593C21.9422 13.3397 22.7776 13.6884 23.5414 14.1862C24.048 14.5208 24.5143 14.9249 24.9294 15.3902C25.2417 15.7541 25.5234 16.148 25.7733 16.5674C26.0215 16.9925 26.2276 17.447 26.3895 17.9218C26.4094 18.0455 26.515 18.129 26.6252 18.1079H28.037C28.2181 18.1079 28.2181 18.1079 28.2261 18.303V19.7549C28.2261 19.8964 28.1789 19.9321 28.0523 19.9321H26.9636C26.8535 19.9321 26.8217 19.9321 26.8296 20.0915C26.8728 20.6307 26.8728 21.1718 26.8296 21.711C26.8296 21.8615 26.8296 21.8793 26.9801 21.8793H28.2255C28.2806 21.959 28.2255 22.0386 28.2255 22.119C28.2335 22.2216 28.2335 22.3255 28.2255 22.4281V23.4995C28.2255 23.6499 28.1863 23.6945 28.0676 23.6945H26.5769C26.473 23.6722 26.3719 23.7468 26.348 23.8628C25.9931 24.8986 25.4252 25.8272 24.6914 26.5717C24.4234 26.8426 24.1417 27.0975 23.8475 27.3327C23.5318 27.5367 23.2245 27.7489 22.9008 27.9172C22.3051 28.218 21.6804 28.4398 21.0392 28.5807C20.4304 28.7031 19.8131 28.7585 19.1935 28.7489H13.7195V28.74L13.7218 28.7381Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
            stroke={dark ? '#F2F0F4' : '#1B1B1F'}
            strokeWidth="0.5"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3047_15469">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3047_15469">
          <rect y="0.5" width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const USDT: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => {
  const { dark } = useTheme() as Theme;
  return (
    <svg
      style={{ maxHeight, maxWidth }}
      viewBox="0 0 40 41"
      fill="none"
      {...props}
    >
      <g clipPath="url(#clip0_3047_15492)">
        <g clipPath="url(#clip1_3047_15492)">
          <rect
            width="40"
            height="40"
            transform="translate(0 0.5)"
            fill={dark ? '#ffffff1e' : '#3535391e'}
          />
          <path
            d="M17.9313 18.9081V14.5607H12.0349V10.75H28.5117V14.6144H22.6153V18.9081H17.9313Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.5 19.3911C9.5 17.942 14.2392 16.7612 20.1356 16.7612C26.032 16.7612 30.7712 17.942 30.7712 19.3911C30.7712 20.8403 26.032 22.021 20.1356 22.021C14.2392 22.021 9.5 20.8403 9.5 19.3911ZM29.8893 19.3911C29.5036 18.8544 26.3074 17.1905 20.1354 17.1905C13.9635 17.1905 10.7673 18.8007 10.3816 19.3911C10.7673 19.9278 13.9635 20.7329 20.1354 20.7329C26.3625 20.7329 29.5036 19.9278 29.8893 19.3911Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
          />
          <path
            d="M22.615 20.2499V17.2443C21.8435 17.1906 21.0169 17.137 20.1903 17.137C19.4189 17.137 18.7025 17.137 17.9861 17.1906V20.1962C18.6474 20.1962 19.4189 20.2499 20.1903 20.2499C21.0169 20.3036 21.8435 20.3036 22.615 20.2499Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
          />
          <path
            d="M20.1355 22.0209C19.364 22.0209 18.6476 22.0209 17.9312 21.9672V29.9643H22.5602V21.9136C21.7887 21.9672 20.9621 22.0209 20.1355 22.0209Z"
            fill={dark ? '#F2F0F4' : '#1B1B1F'}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_3047_15492">
          <rect
            width="40"
            height="40"
            fill="white"
            transform="translate(0 0.5)"
          />
        </clipPath>
        <clipPath id="clip1_3047_15492">
          <rect y="0.5" width="40" height="40" rx="2" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TOKENS_SVG_MARKET_MAP = {
  default: UnknownCoinSVG,
  [COIN_TYPE[Network.DEVNET].BNB]: BNB,
  [COIN_TYPE[Network.DEVNET].BTC]: BTC,
  [COIN_TYPE[Network.DEVNET].ETH]: ETH,
  [COIN_TYPE[Network.DEVNET].SUI]: SUI,
  [COIN_TYPE[Network.DEVNET].USDT]: USDT,
};
