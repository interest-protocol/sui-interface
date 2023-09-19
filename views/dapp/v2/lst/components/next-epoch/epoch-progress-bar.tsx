import {
  Box,
  Motion,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Countdown, { CountdownRendererFn } from 'react-countdown';

import { useLocale } from '@/hooks';

import { EpochProgressBarProps } from './next-epoch.types';
import { getRelativeDate, getTimeAMPM } from './next-epoch.utils';

const renderer =
  (duration: number, onlyTime: boolean): CountdownRendererFn =>
  // eslint-disable-next-line react/display-name
  ({ total, days, hours, minutes, seconds, completed }) => {
    if (completed) return null;

    return (
      <>
        {onlyTime ? (
          <Typography variant="medium" position="relative">
            {!!days && `${days}h`} {!!(days || hours) && `${hours}h`}{' '}
            {!!(days || hours || minutes) && `${minutes}m`}{' '}
            {!!(days || hours || minutes || seconds) && `${seconds}s`}{' '}
          </Typography>
        ) : (
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
              border="1px solid #002A78"
            />
          </Motion>
        )}
      </>
    );
  };

const EpochProgressBar: FC<EpochProgressBarProps> = ({
  startDate,
  endDate,
  duration,
}) => {
  const { dark } = useTheme() as Theme;
  const t = useTranslations();
  const { currentLocale } = useLocale();

  return (
    <Box display="flex" flexDirection="column" gap="0.5rem">
      <Typography
        variant="extraSmall"
        color="onSurface"
        fontSize="0.688rem"
        opacity="0.6"
      >
        {t('lst.epoch.started', {
          time: `${getTimeAMPM(new Date(startDate))}, ${getRelativeDate(
            new Date(startDate),
            currentLocale
          )}`,
        })}
      </Typography>
      <Typography
        variant="medium"
        color={dark ? 'white' : 'black'}
        display="flex"
        gap="0.5rem"
      >
        <Countdown date={endDate} renderer={renderer(duration, true)} />
        {' ' + t('lst.epoch.timeLeft')}
      </Typography>
      <Box
        bg={dark ? '#D9D9D91A' : '#D9D9D9'}
        display="flex"
        borderRadius="m"
        overflow="hidden"
        position="relative"
        alignItems="center"
        height="0.5rem"
      >
        <Countdown date={endDate} renderer={renderer(duration, false)} />
      </Box>
    </Box>
  );
};

export default EpochProgressBar;
