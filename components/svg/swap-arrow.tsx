import { FC } from 'react';

import { SVGProps } from './svg.types';

const SwapArrow: FC<SVGProps> = ({ maxWidth, maxHeight, ...props }) => (
  <svg
    style={{ maxWidth, maxHeight }}
    viewBox="0 0 23 8"
    fill="none"
    {...props}
  >
    <path
      d="M22.0059 4L18.0059 8V5H5.83586C5.63025 5.58597 5.24728 6.09339 4.74015 6.45179C4.23301 6.81019 3.62686 7.0018 3.00586 7C2.21021 7 1.44715 6.68393 0.884539 6.12132C0.32193 5.55871 0.00585938 4.79565 0.00585938 4C0.00585938 3.20435 0.32193 2.44129 0.884539 1.87868C1.44715 1.31607 2.21021 1 3.00586 1C4.31586 1 5.42586 1.83 5.83586 3H18.0059V0L22.0059 4Z"
      fill="currentColor"
    />
  </svg>
);

export default SwapArrow;
