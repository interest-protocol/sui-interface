import { Box, darkTheme, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import ConnectIllustration from './illustration';

const IllustrationSection: FC = () => {
  const menuVariants = {
    open: {
      rotate: '0deg',
      scaleY: 1,
    },
    closed: {
      rotate: '180deg',
      scaleY: 0,
    },
  };

  return (
    <Box
      display={['none', 'none', 'none', 'flex']}
      color="text"
      overflowY="auto"
      maxHeight="100vh"
      height="100vh"
      width={['100%', '100%', '100%', '50%']}
    >
      <Box display="flex" flexDirection="column" width="100%" height="100%">
        <Motion
          as="span"
          display="flex"
          borderRadius="50%"
          p=".8rem"
          border="1px solid"
          width="fit-content"
          margin="1.5rem 1.5rem 0 auto"
          alignItems="center"
          justifyContent="center"
          animate={menuVariants.open}
          initial={menuVariants.closed}
          borderColor={darkTheme.colors['outline.outlineVariant']}
          color="white"
        >
          <TimesSVG
            width="100%"
            height="100%"
            maxWidth=".9rem"
            maxHeight=".9rem"
          />
        </Motion>
        <Box width="75%" display="flex" m="auto">
          <ConnectIllustration />
        </Box>
      </Box>
    </Box>
  );
};

export default IllustrationSection;
