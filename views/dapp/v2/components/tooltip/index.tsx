import { Box, Motion, MotionProps } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren, useState } from 'react';

import { TooltipProps } from './tooltip.types';

const TooltipWrapper: FC<PropsWithChildren<TooltipProps & MotionProps>> = ({
  children,
  tooltipContent,
  tooltipPosition,
  ...props
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
        <Motion
          layout
          initial={{ opacity: 0.2 }}
          animate={{
            opacity: 1,
          }}
          position="absolute"
          borderRadius=".25rem"
          transform={`translate(${
            tooltipPosition === 'top' || tooltipPosition === 'bottom'
              ? '-50%'
              : tooltipPosition === 'left'
              ? '-115%'
              : tooltipPosition === 'right'
              ? '115%'
              : '0'
          }, ${
            tooltipPosition === 'top'
              ? '-115%'
              : tooltipPosition === 'bottom'
              ? '115%'
              : tooltipPosition === 'left' || tooltipPosition === 'right'
              ? '-50%'
              : '0'
          })`}
          top={
            tooltipPosition === 'top'
              ? '0'
              : tooltipPosition === 'left' || tooltipPosition === 'right'
              ? '50%'
              : 'unset'
          }
          left={
            tooltipPosition === 'left'
              ? '0'
              : tooltipPosition === 'top' || tooltipPosition === 'bottom'
              ? '50%'
              : 'unset'
          }
          right={tooltipPosition === 'right' ? '0' : 'unset'}
          bottom={tooltipPosition === 'bottom' ? '0' : 'unset'}
          {...props}
        >
          <Box p=".5rem">{tooltipContent}</Box>
          <Box
            ml={
              tooltipPosition === 'top' || tooltipPosition === 'bottom'
                ? '50%'
                : 'unset'
            }
            bg="inherit"
            width=".375rem"
            height=".375rem"
            top={
              tooltipPosition === 'bottom'
                ? '-.1875rem'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '50%'
                : 'unset'
            }
            left={tooltipPosition === 'right' ? '-.1875rem' : 'unset'}
            right={tooltipPosition === 'left' ? '-.1875rem' : 'unset'}
            bottom={
              tooltipPosition === 'top'
                ? '-.1875rem'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '0'
                : 'unset'
            }
            position="absolute"
            transform={`translate(${
              tooltipPosition === 'top'
                ? '-50%'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '0'
                : '-50%'
            }, ${
              tooltipPosition === 'top'
                ? '0'
                : tooltipPosition === 'left' || tooltipPosition === 'right'
                ? '-50%'
                : '0%'
            }) rotate(45deg)`}
          />
        </Motion>
      )}
    </Box>
  );
};

export default TooltipWrapper;
