import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import ActionButton from './action-button';
import FirstThingFirstHeader from './first-thing-first-header-section';
import MediaSample from './media';

const FirstThingFirst: FC = () => (
  <Box bg="background">
    <Box variant="container">
      <Box gridColumn="1/-1" width="100%" py="5rem">
        <FirstThingFirstHeader />
        <MediaSample />
        <ActionButton />
      </Box>
    </Box>
  </Box>
);

export default FirstThingFirst;
