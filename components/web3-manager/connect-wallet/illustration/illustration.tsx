import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BodyConnectorSVG,
  ConnectConnectorFragSVG,
  ConnectStructureSVG,
} from '@/components/svg/v2';

import BlockIllustration from './blocks-illustration';

const ConnectIllustration: FC = () => (
  <Box width="100%" display="flex" justifyContent="center" position="relative">
    <Motion
      initial={{ scale: 0, translateY: '25%' }}
      animate={{
        scale: 1,
        translateY: '0%',
      }}
      transition={{ duration: 1.5, delay: 3.4 }}
      left="36%"
      top="1.2%"
      width="25%"
      height="25%"
      position="absolute"
    >
      <BlockIllustration />
    </Motion>
    <Box position="absolute" width="6%" top="35%" left="79%">
      <Motion
        initial={{ translate: '0, 0' }}
        position="relative"
        transformOrigin="bottom left"
        animate={{
          translateX: '-205%',
          translateY: '-110%',
        }}
        transition={{ duration: 1.5, delay: 2 }}
        zIndex="2"
      >
        <BodyConnectorSVG maxHeight="100%" maxWidth="100%" width="100%" />
      </Motion>
      <Motion
        position="absolute"
        transform="rotate(210deg)"
        initial={{
          rotate: 210,
          width: '32%',
        }}
        right="0"
        top="65.69%"
        left="101%"
        zIndex="3"
        bg="white"
        transformOrigin="bottom left"
        borderRadius="24px"
        height="5.7%"
        animate={{
          width: '272%',
          rotate: 210,
        }}
        transition={{ duration: 1.5, delay: 2 }}
      ></Motion>
    </Box>
    <Box
      position="absolute"
      width="14%"
      height="2%"
      transform="skewY(30deg) rotate(180deg)"
      top="33.2%"
      display="flex"
      left="28%"
      gap="10px"
    >
      <Motion
        flex="1"
        bg="#D9F99D"
        height="0%"
        initial={{ height: '0%' }}
        animate={{ height: ['0%', '60%', '43%', '35%', '93%', '5%'] }}
        transition={{ delay: 3.4, repeat: Infinity, repeatType: 'reverse' }}
      ></Motion>
      <Motion
        flex="1"
        bg="#D9F99D"
        height="0%"
        initial={{ height: '0%' }}
        animate={{ height: ['0%', '34%', '93%', '24%', '64%', '23%'] }}
        transition={{ delay: 3.4, repeat: Infinity, repeatType: 'reverse' }}
      ></Motion>
      <Motion
        flex="1"
        bg="#D9F99D"
        height="0%"
        initial={{ height: '0%' }}
        animate={{ height: ['0%', '12%', '72%', '43%', '97%', '22%'] }}
        transition={{ delay: 3.4, repeat: Infinity, repeatType: 'reverse' }}
      ></Motion>
      <Motion
        flex="1"
        bg="#D9F99D"
        height="0%"
        initial={{ height: '0%' }}
        animate={{ height: ['0%', '63%', '16%', '1%', '92%', '54%'] }}
        transition={{ delay: 3.4, repeat: Infinity, repeatType: 'reverse' }}
      ></Motion>
      <Motion
        flex="1"
        bg="#D9F99D"
        height="0%"
        initial={{ height: '0%' }}
        animate={{ height: ['0%', '85%', '32%', '56%', '35%', '74%'] }}
        transition={{ delay: 3.4, repeat: Infinity, repeatType: 'reverse' }}
      ></Motion>
    </Box>
    <ConnectStructureSVG maxHeight="100%" maxWidth="100%" width="85%" />
    <Motion
      initial={{ translate: '0, 0' }}
      transformOrigin="bottom left"
      position="absolute"
      zIndex="1"
      top="34.1%"
      width="3%"
      left="77.4%"
      transition={{ duration: 1, delay: 2 }}
      animate={{
        translateX: '-287%',
        translateY: '-113.7%',
      }}
    >
      <ConnectConnectorFragSVG maxHeight="100%" maxWidth="100%" width="100%" />
    </Motion>
  </Box>
);

export default ConnectIllustration;
