import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Checkmark from '../svg/v2/checkmark';
import { ChipProps } from './chip.types';

const Chip: FC<ChipProps> = ({ text, onClick, isActive, noCheckmark }) => (
  <Box
    py="s"
    px="l"
    gap="m"
    display="flex"
    cursor="pointer"
    color="onSurface"
    border="1px solid"
    alignItems="center"
    borderRadius="1.5rem"
    borderColor="outline"
    onClick={isActive ? undefined : onClick}
    {...(isActive && {
      bg: 'primary',
      borderColor: 'primary',
      color: 'primary.onPrimary',
    })}
  >
    {!noCheckmark && isActive && (
      <Box width="1rem">
        <Checkmark maxHeight="1rem" maxWidth="1rem" width="100%" />
      </Box>
    )}
    <Typography variant="small">{text}</Typography>
  </Box>
);

export default Chip;
