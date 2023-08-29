import { Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { easeInOut } from 'framer-motion';
import { useState } from 'react';
import { v4 } from 'uuid';

import { Box } from '@/elements';

const LoadingPage = () => {
  const { dark } = useTheme() as Theme;

  const [step, setStep] = useState(1);

  const handleAnimationComplete = () => {
    setStep(step == 3 ? 1 : step + 1);
  };

  const getBoxColor = () =>
    !(step == 1 || step == 3)
      ? dark
        ? '#B4C5FF'
        : '#0053DB'
      : !dark
      ? '#131316'
      : '#FBF8FD';

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      position="absolute"
      top="0"
      bg={dark ? '#131316' : '#FBF8FD'}
      zIndex={10}
    >
      <Box
        mr="L"
        color="accent"
        cursor="pointer"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <Box
          p="0.5rem"
          width={step == 1 ? '2rem' : step == 2 ? '3rem' : '3.65rem'}
          height={step == 1 ? '2rem' : step == 2 ? '3rem' : '3.65rem'}
          display="flex"
          gap="0.5rem"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          flexWrap="wrap"
        >
          {Array.from({ length: step == 1 ? step : step == 2 ? 4 : 9 }).map(
            () => (
              <Motion
                key={v4()}
                animate={{
                  scale: [1, 1.5, 1, 1.5, 1],
                }}
                transition={{
                  duration: 0.8,
                  ease: easeInOut,
                  times: [0],
                  repeat: 0,
                }}
                onAnimationComplete={handleAnimationComplete}
                width={step == 1 ? '0.75rem' : '0.5rem'}
                height={step == 1 ? '0.75rem' : '0.5rem'}
                bg={getBoxColor()}
              />
            )
          )}
        </Box>
      </Box>
    </Box>
  );
};
export default LoadingPage;
