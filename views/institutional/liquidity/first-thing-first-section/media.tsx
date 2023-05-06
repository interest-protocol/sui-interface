/* eslint-disable jsx-a11y/media-has-caption */
import { Box } from '@interest-protocol/ui-kit';
import { FC, useEffect, useRef, useState } from 'react';

import { PauseSVG, PlaySVG } from '@/svg';

const MediaSample: FC = () => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const handleControlMedia = () => {
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    if (isPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  }, [isPlaying]);

  return (
    <Box
      bg="#1F1F23"
      height={['14.75rem', '14.75rem', '14.75rem', '34rem']}
      color="text"
      display="flex"
      alignItems="center"
      justifyContent="center"
      mt={['2.5rem', '2.5rem', '2.5rem', '5rem']}
      mb="1.5rem"
      position="relative"
    >
      <video width="100%" height="100%" ref={videoRef}>
        <source
          src="https://www.w3schools.com/html/mov_bbb.ogg"
          type="video/ogg"
        />
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <Box position="absolute" color="primary" onClick={handleControlMedia}>
        {!isPlaying ? (
          <PlaySVG
            maxWidth="2rem"
            maxHeight="2rem"
            width="2rem"
            height="2rem"
            cursor="pointer"
          />
        ) : (
          <PauseSVG
            maxWidth="2rem"
            maxHeight="2rem"
            width="2rem"
            height="2rem"
            cursor="pointer"
          />
        )}
      </Box>
    </Box>
  );
};

export default MediaSample;
