import { Box, SwitchButton, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { AccordionOptionProps } from '../earn.types';

const OptionFilter: FC<AccordionOptionProps> = ({
  description,
  defaultState,
}) => {
  return (
    <Box
      p="l"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      color="onSurface"
    >
      <Typography variant="small" textTransform="capitalize">
        {description}
      </Typography>
      <SwitchButton
        activation
        name="switch"
        defaultValue={defaultState}
        size="medium"
      />
    </Box>
  );
};

export default OptionFilter;
