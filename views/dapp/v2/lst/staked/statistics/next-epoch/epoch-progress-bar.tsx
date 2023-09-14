import { Box, Motion, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';

import { EpochProgressBarProps } from './next-epoch.types';

const renderer =
  (duration: number): CountdownRendererFn =>
  // eslint-disable-next-line react/display-name
  ({ total, days, hours, minutes, seconds, completed }) => {
    if (completed) return null;

    return (
      <>
        <Motion
          height="100%"
          display="flex"
          position="absolute"
          alignItems="center"
          justifyContent="flex-end"
          width={`${100 - (total * 100) / duration}%`}
          backgroundImage="linear-gradient(90deg, #7997FF 0%, #99BBFF 100%)"
        >
          <Box
            m="xs"
            height="80%"
            borderRadius="m"
            border="2px solid #002A78"
          />
        </Motion>
        <Typography variant="medium" color="#002A78" pl="l" position="relative">
          {!!days && `${days}h`} {!!(days || hours) && `${hours}h`}{' '}
          {!!(days || hours || minutes) && `${minutes}m`}{' '}
          {!!(days || hours || minutes || seconds) && `${seconds}s`}
        </Typography>
      </>
    );
  };

const EpochProgressBar: FC<EpochProgressBarProps> = ({ endDate, duration }) => (
  <Box
    bg="#D9D9D91A"
    display="flex"
    height="2.4rem"
    borderRadius="m"
    overflow="hidden"
    position="relative"
    alignItems="center"
  >
    <Countdown date={endDate} renderer={renderer(duration)} />
  </Box>
);

export default EpochProgressBar;
