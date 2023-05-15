import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ActionButton from './action-button';
import FirstThingFirstHeader from './first-thing-first-header-section';

const FirstThingFirst: FC = () => (
  <Box variant="container">
    <Box gridColumn="1/-1" width="100%" py="5rem">
      <FirstThingFirstHeader />
      <Box display="flex" gap="m">
        <ActionButton />
        <ActionButton tutorial />
      </Box>
    </Box>
  </Box>
);

export default FirstThingFirst;
