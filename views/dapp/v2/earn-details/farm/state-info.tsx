import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { CaretUpSVG } from '@/svg';

const StateInfo: FC<{ isUp: boolean }> = ({ isUp }) => {
  return (
    <Box
      transform={isUp ? 'rotate(0deg)' : 'rotate(180deg)'}
      display="flex"
      color={isUp ? 'success' : 'error'}
      alignItems="center"
      justifyContent="center"
      gap="s"
      as="span"
      width="1.5rem"
      height="1.5rem"
    >
      {isUp ? (
        <CaretUpSVG maxWidth="0.491rem" maxHeight="0.491rem" width="0.491rem" />
      ) : (
        <CaretUpSVG maxWidth="0.491rem" maxHeight="0.491rem" width="0.491rem" />
      )}
    </Box>
  );
};

export default StateInfo;
