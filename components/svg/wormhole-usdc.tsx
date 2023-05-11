import { FC } from 'react';

import { SVGProps } from './svg.types';

const WormholeUSDC: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 27 26"
    fill="none"
    {...props}
  >
    <path
      d="M18.4366 16.4273C18.4366 13.9996 16.8658 13.1672 13.7244 12.8204C11.4804 12.5429 11.0317 11.9881 11.0317 11.0168C11.0317 10.0456 11.7797 9.42154 13.2756 9.42154C14.6219 9.42154 15.3699 9.83774 15.7439 10.8782C15.8187 11.0863 16.0431 11.2249 16.2675 11.2249H17.4641C17.7634 11.2249 17.9878 11.0168 17.9878 10.7395V10.6701C17.6885 9.14403 16.3422 7.96489 14.6219 7.82622V6.16148C14.6219 5.88396 14.3975 5.67587 14.0236 5.60645H12.9016C12.6024 5.60645 12.378 5.81454 12.3031 6.16148V7.7568C10.0592 8.03433 8.63822 9.42154 8.63822 11.1557C8.63822 13.4447 10.1341 14.3463 13.2756 14.6933C15.3699 15.04 16.0431 15.4562 16.0431 16.5661C16.0431 17.676 14.9958 18.439 13.5748 18.439C11.63 18.439 10.9568 17.6758 10.7324 16.6354C10.6577 16.358 10.4333 16.2192 10.2089 16.2192H8.93732C8.63822 16.2192 8.41382 16.4273 8.41382 16.7048V16.7742C8.71292 18.5082 9.90972 19.7568 12.378 20.1037V21.7685C12.378 22.0458 12.6024 22.2539 12.9763 22.3233H14.0983C14.3975 22.3233 14.6219 22.1152 14.6968 21.7685V20.1037C16.9407 19.7568 18.4366 18.3001 18.4366 16.4273Z"
      fill="currentColor"
    />
    <path
      d="M27 4.5C27 2.01472 24.9853 0 22.5 0C20.0147 0 18 2.01472 18 4.5C18 6.98528 20.0147 9 22.5 9C24.9853 9 27 6.98528 27 4.5Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M24.7834 7.15263C23.4571 5.26999 21.615 3.76345 19.4572 2.76918C19.1662 3.27962 19 3.8704 19 4.5C19 4.67725 19.0132 4.85142 19.0386 5.02159C20.4736 5.77528 21.6754 6.80082 22.5959 7.99871C23.431 7.97624 24.193 7.66131 24.7834 7.15263ZM17.0211 4.01513C17.0822 3.31497 17.2746 2.6524 17.5734 2.05216C17.2881 1.94339 17.012 2.08178 16.9407 2.34677C16.8659 2.41619 16.8659 2.48544 16.8659 2.62428V3.59533C16.8659 3.74214 16.9287 3.88889 17.0211 4.01513ZM23.7354 9.86071C24.4992 9.68539 25.2024 9.35101 25.8081 8.89429C26.0198 9.33322 26.2061 9.78698 26.3652 10.2543C28.6091 16.8439 24.7196 23.8498 17.6139 25.9307C17.539 26 17.3895 26 17.3147 26C17.0154 25.9307 16.8659 25.7227 16.8659 25.4451V24.4741C16.8659 24.1272 17.0154 23.9191 17.3147 23.7804C20.3813 22.7399 22.8496 20.5203 23.9715 17.607C25.0283 15.005 24.8602 12.2385 23.7354 9.86071ZM3.02846 10.393C0.85923 15.7342 3.85117 21.7689 9.6853 23.711C9.9097 23.8498 10.1341 24.1272 10.1341 24.3353V25.3065C10.1341 25.4451 10.1341 25.5146 10.0593 25.5838C9.9846 25.8613 9.6853 26 9.3861 25.8613C5.19752 24.6128 1.98118 21.63 0.63484 17.7457C-1.60908 11.1561 2.28043 4.15019 9.3861 2.06925C9.461 2 9.6105 2 9.6853 2C9.9846 2.06925 10.1341 2.27735 10.1341 2.55486V3.52591C10.1341 3.87284 9.9846 4.08093 9.6853 4.21961C6.61873 5.26008 4.15042 7.47968 3.02846 10.393Z"
      fill="currentColor"
    />
  </svg>
);

export default WormholeUSDC;
