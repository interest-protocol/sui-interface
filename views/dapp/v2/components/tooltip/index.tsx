import { Box } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren, useState } from 'react';

import { TooltipProps } from './tooltip.types';

const BoxWithTooltip: FC<PropsWithChildren<TooltipProps>> = ({
  children,
  content,
  inverseBackground,
}) => {
  const [toggle, setToggle] = useState(false);

  return (
    <Box
      cursor="pointer"
      position="relative"
      onMouseEnter={() => {
        setToggle(true);
      }}
      onMouseLeave={() => {
        setToggle(false);
      }}
    >
      {children}
      {toggle && (
        <Box
          top="0"
          ml="50%"
          position="absolute"
          borderRadius=".25rem"
          transform="translate(-50%, -115%)"
          bg={inverseBackground ? 'inverseSurface' : 'surface'}
          color={inverseBackground ? 'inverseOnSurface' : 'onSurface'}
        >
          <Box p=".5rem">{content}</Box>
          <Box
            ml="50%"
            width=".375rem"
            height=".375rem"
            bottom="-.1875rem"
            position="absolute"
            transform="translate(-50%) rotate(45deg)"
            bg={inverseBackground ? 'inverseSurface' : 'surface'}
          />
        </Box>
      )}
    </Box>
  );
};

export default BoxWithTooltip;
