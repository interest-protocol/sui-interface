import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, PropsWithChildren } from 'react';

import { IEmptyObj } from '@/interface';
import { PlusSVG } from '@/svg';

const ValuePropositionCard: FC<PropsWithChildren<IEmptyObj>> = ({
  children,
}) => (
  <Box
    p="l"
    display="flex"
    borderRadius="m"
    border="1px solid"
    alignItems="center"
    borderColor="textAccent"
  >
    <Box
      mr="l"
      display="flex"
      height="2.5rem"
      minWidth="2.5rem"
      borderRadius="2px"
      border="1px solid"
      alignItems="center"
      color="textDisabled"
      borderColor="outline"
      justifyContent="center"
    >
      <PlusSVG maxHeight="1rem" maxWidth="1rem" width="100%" />
    </Box>
    <Typography variant="medium" color="textDisabled">
      {children}
    </Typography>
  </Box>
);
export default ValuePropositionCard;
