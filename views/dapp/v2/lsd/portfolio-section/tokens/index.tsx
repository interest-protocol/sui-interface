import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import CardSection from '../../components/card-section';

const Tokens: FC = () => {
  return (
    <Box height="max-content" width={['100%', '100%', '100%', '50%']}>
      <CardSection title="Tokens"></CardSection>
    </Box>
  );
};

export default Tokens;
