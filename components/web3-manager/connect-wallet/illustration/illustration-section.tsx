import { Box, darkTheme, Motion } from '@interest-protocol/ui-kit';
import { not } from 'ramda';
import { FC } from 'react';

import { TimesSVG } from '@/components/svg/v2';

import { IllustrationProps } from '../connect-wallet.types';
import ConnectIllustration from './illustration';

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

const IllustrationSection: FC<IllustrationProps> = ({ setOpenWallet }) => (
  <Box
    width="50%"
    color="text"
    height="100vh"
    overflowY="auto"
    maxHeight="100vh"
    display={['none', 'none', 'none', 'flex']}
  >
    <Box display="flex" flexDirection="column" width="100%" height="100%">
      <Motion
        p="m"
        as="span"
        color="white"
        display="flex"
        cursor="pointer"
        borderRadius="50%"
        border="1px solid"
        alignItems="center"
        width="fit-content"
        justifyContent="center"
        margin="1.5rem 1.5rem 0 auto"
        animate={menuVariants.open}
        initial={menuVariants.closed}
        onClick={() => setOpenWallet(not)}
        borderColor={darkTheme.colors['outline.outlineVariant']}
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

export default IllustrationSection;
