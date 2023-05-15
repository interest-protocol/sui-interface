import { Box } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TTranslatedMessage } from '@/interface';

import ActionButton from './action-button';
import FirstThingFirstHeader from './first-thing-first-header-section';

const FirstThingFirst: FC = () => {
  return (
    <Box variant="container">
      <Box gridColumn="1/-1" width="100%" py="5rem">
        <FirstThingFirstHeader />
        <Box
          display="flex"
          flexDirection={['column', 'column', 'column', 'row']}
          gap="1rem"
        >
          <ActionButton
            url="https://www.portalbridge.com/sui/"
            text={
              'liquidity.firstThingFirst.buttonAssets' as TTranslatedMessage
            }
          />
          <ActionButton
            isText
            url="https://youtu.be/czLQNJoQHBA"
            text={
              'liquidity.firstThingFirst.buttonTutorial' as TTranslatedMessage
            }
          />
        </Box>
      </Box>
    </Box>
  );
};

export default FirstThingFirst;
