import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { LineWrapperProps } from './modal.types';

const LineWrapper: FC<LineWrapperProps> = ({ title, fields }) => {
  return (
    <Box>
      <Typography
        variant="extraSmall"
        fontWeight="400"
        fontSize="0.6875rem"
        color="onSurface"
        opacity={0.6}
        mb="0.5rem"
        textTransform="capitalize"
      >
        {title}
      </Typography>
      {fields.map((field) => (
        <Box
          key={v4()}
          p="0.75rem"
          mb="s"
          borderRadius="0.25rem"
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          bg="surface.containerHighest"
        >
          <Box display="flex" gap="1rem" alignItems="center">
            {field.Icon}
            <Box
              display="flex"
              flexDirection={field.reverse ? 'column-reverse' : 'column'}
            >
              <Typography
                variant="small"
                fontWeight="400"
                fontSize="1rem"
                color="onSurface"
              >
                {field.token.main}
              </Typography>
              <Typography
                variant="extraSmall"
                fontWeight="400"
                fontSize="0.6875rem"
                color="onSurface"
                opacity="0.6"
              >
                {field.token.secondary}
              </Typography>
            </Box>
          </Box>
          {field.children}
        </Box>
      ))}
    </Box>
  );
};

export default LineWrapper;
