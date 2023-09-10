import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const EpochProgressBar: FC<{ percentage: number }> = ({ percentage }) => (
  <Box
    bg="#D9D9D91A"
    display="flex"
    height="2.4rem"
    borderRadius="m"
    overflow="hidden"
    position="relative"
    alignItems="center"
  >
    <Box
      height="100%"
      display="flex"
      position="absolute"
      alignItems="center"
      width={`${percentage}%`}
      justifyContent="flex-end"
      backgroundImage="linear-gradient(90deg, #7997FF 0%, #99BBFF 100%)"
    >
      <Box border="2px solid #002A78" height="80%" borderRadius="m" m="xs" />
    </Box>
    <Typography variant="medium" color="#002A78" pl="l" position="relative">
      2h 07m 9s
    </Typography>
  </Box>
);

export default EpochProgressBar;
