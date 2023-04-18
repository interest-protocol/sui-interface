import { Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const UsedByTitle: FC = () => (
  <Typography
    my="4xl"
    gridColumn="1/-1"
    textAlign="center"
    variant="displayLarge"
    background="linear-gradient(270deg, #99BBFF 11.7%, rgba(153, 187, 255, 0) 100%);"
    WebkitBackgroundClip="text"
    WebkitTextFillColor="transparent"
    backgroundClip="text"
  >
    used by...
  </Typography>
);

export default UsedByTitle;
