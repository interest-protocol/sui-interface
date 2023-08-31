import { Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box } from '@/elements';

const LoadingPage: FC = () => {
  const { dark } = useTheme() as Theme;

  const boxColor = [dark ? '#FBF8FD' : '#131316', dark ? '#B4C5FF' : '#0053DB'];

  return (
    <Box
      width="100vw"
      height="100vh"
      display="flex"
      alignItems="center"
      position="relative"
      flexDirection="column"
      justifyContent="center"
      bg={dark ? '#131316' : '#FBF8FD'}
    >
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '0.5rem', '1rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '0rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '-0.5rem', '0rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '-0.5rem', '-1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
      <Motion
        key={v4()}
        width="1rem"
        height="1rem"
        position="absolute"
        background={boxColor[0]}
        transition={{ duration: 3, ease: 'backOut', repeat: Infinity }}
        animate={{
          scale: [1, 0.75, 0.5, 1],
          x: ['0rem', '-0.5rem', '-1rem', '0rem'],
          y: ['0rem', '0.5rem', '1rem', '0rem'],
          background: [boxColor[0], boxColor[1], boxColor[0]],
        }}
      />
    </Box>
  );
};
export default LoadingPage;
