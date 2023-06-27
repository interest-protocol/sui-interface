import { Box, Motion } from '@interest-protocol/ui-kit';
// import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import ConnectIllustration from './illustration';

const ConnectWallet: FC = () => {
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
      width="100vw"
      height="100vh"
      zIndex="5"
      position="fixed"
      top="0"
      left="0"
      background="surface"
      color="text"
    >
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        width="100%"
        height="100%"
        margin={0}
      >
        <Box
          gridColumn="1/5"
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <ConnectIllustration />
        </Box>
        <Box
          gridColumn="5/-1"
          width="100%"
          height="100%"
          borderTopLeftRadius={32}
          borderBottomLeftRadius={32}
          backgroundColor="white"
        >
          <Motion
            as="span"
            display="flex"
            borderRadius="50%"
            p=".8rem"
            border="1px solid black"
            width="fit-content"
            margin="1.5rem 1.5rem 0 auto"
            alignItems="center"
            justifyContent="center"
            animate={menuVariants.open}
            initial={menuVariants.closed}
          >
            <TimesSVG
              width="100%"
              height="100%"
              maxWidth=".9rem"
              maxHeight=".9rem"
            />
          </Motion>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectWallet;
