import { useTheme } from '@interest-protocol/ui-kit';
import { Box, Button } from '@interest-protocol/ui-kit';
import { FC } from 'react';

const Home: FC = () => {
  const theme = useTheme();

  console.log('>> context :: ', theme);

  return (
    <Box variant="container">
      <Button variant="filled">Home</Button>
    </Box>
  );
};

export default Home;
