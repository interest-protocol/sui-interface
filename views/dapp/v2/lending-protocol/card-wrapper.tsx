import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CardWrapperProps } from './lending-protocol.types';

const CardWrapper: FC<CardWrapperProps> = ({
  position,
  buttonDescription,
  children,
}) => {
  return (
    <Box
      display="flex"
      width={['100%', '100%', '100%', '34rem']}
      float={position}
    >
      <Box
        width="calc(100% + .635rem)"
        color="text"
        borderRadius=".25rem"
        gridColumn={['1 / -1', '1 / -1', '1 / -1', '1 / 7']}
        height="fit-content"
      >
        {children}
        <Box
          display="flex"
          textAlign="center"
          justifyContent={[
            'unset',
            'unset',
            'unset',
            position == 'right' ? 'flex-start' : 'flex-end',
          ]}
        >
          <Button
            variant="filled"
            mt="0.5rem"
            width={[
              'fill-available',
              'fill-available',
              'fill-available',
              'auto',
            ]}
            p="1.25rem 2rem"
          >
            {buttonDescription}
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default CardWrapper;
