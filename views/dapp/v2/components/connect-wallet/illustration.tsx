import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  BodyConnectorSVG,
  ConnectConnectorFragSVG,
  ConnectStructureSVG,
} from '@/components/svg/v2';
import HeroBlock from '@/views/institutional/components/hero/hero-block';

const ConnectIllustration: FC = () => {
  return (
    <Box
      width="100%"
      display="flex"
      justifyContent="center"
      position="relative"
    >
      <Motion
        initial={{ scale: 0, translateY: '25%' }}
        animate={{
          scale: 1,
          translateY: '0%',
        }}
        transition={{ duration: 1.5, delay: 3.4 }}
        position="absolute"
        left="21%"
        top="-17%"
      >
        <HeroBlock scale=".44" />
      </Motion>
      <Box position="absolute" width="6%" top="35%" left="79%">
        <Motion
          position="absolute"
          transform="rotate(210deg)"
          initial={{ rotate: 210, scaleX: 1, width: '10px' }}
          top="68.5%"
          left="105%"
          zIndex="3"
          transformOrigin="bottom left"
          bg="white"
          borderRadius="24px"
          width="10px"
          height="2px"
          animate={{
            width: '78px',
            rotate: 210,
          }}
          transition={{ duration: 1.5, delay: 2 }}
        ></Motion>
        <Motion
          initial={{ translate: '0, 0' }}
          position="relative"
          transformOrigin="bottom left"
          animate={{
            translateX: '-58px',
            translateY: '-32px',
          }}
          transition={{ duration: 1.5, delay: 2 }}
          zIndex="2"
        >
          <BodyConnectorSVG maxHeight="100%" maxWidth="100%" width="100%" />
        </Motion>
      </Box>
      <Box
        position="absolute"
        width="72px"
        height="12px"
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
        width="3%"
        top="34%"
        left="77.4%"
        transition={{ duration: 1, delay: 2 }}
        animate={{
          translateX: '-43px',
          translateY: '-24px',
        }}
      >
        <ConnectConnectorFragSVG
          maxHeight="100%"
          maxWidth="100%"
          width="100%"
        />
      </Motion>
    </Box>
  );
};

export default ConnectIllustration;
