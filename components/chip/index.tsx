import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import Checkmark from '../svg/v2/checkmark';

const Chip: FC<{ text: string; isActive: boolean; onClick: () => void }> = ({
  text,
  onClick,
  isActive,
}) => (
  <Box
    py="s"
    px="l"
    gap="m"
    color="text"
    display="flex"
    cursor="pointer"
    border="1px solid"
    alignItems="center"
    borderRadius="1.5rem"
    borderColor="outline"
    onClick={!isActive ? onClick : undefined}
    {...(isActive && {
      bg: 'primary',
      color: 'textAccent',
      borderColor: 'primary',
    })}
  >
    {isActive && <Checkmark maxHeight="1rem" maxWidth="1rem" width="100%" />}
    <Typography variant="small">{text}</Typography>
  </Box>
);

export default Chip;
