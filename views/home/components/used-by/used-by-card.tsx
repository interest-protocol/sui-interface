import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC, useRef } from 'react';
import { useCountUp } from 'react-countup';

import { UsedByCardProps } from './used-by.types';

const UsedByCard: FC<UsedByCardProps> = ({
  Icon,
  color,
  title,
  value,
  mobileHalf,
  description,
}) => {
  const countUpRef = useRef(null);

  useCountUp({
    ref: countUpRef,
    start: 0,
    duration: 5,
    end: value.value,
    suffix: value.unit,
    scrollSpyOnce: true,
    enableScrollSpy: true,
    decimals: value.value - ~~value.value ? 1 : 0,
  });

  return (
    <Box
      p="l"
      display="flex"
      borderRadius="m"
      border="1px solid"
      flexDirection="column"
      alignItems="flex-start"
      borderColor="textAccent"
      justifyContent="space-between"
      height={['auto', 'auto', 'auto', '20rem']}
      gridColumn={[
        mobileHalf ? 'span 2' : 'span 4',
        mobileHalf ? 'span 2' : 'span 4',
        mobileHalf ? 'span 4' : 'span 8',
        'span 4',
      ]}
    >
      <Box
        p="s"
        width="auto"
        color="text"
        lineHeight="0"
        border="1px solid"
        display="inline-block"
        borderRadius="0.125rem"
        borderColor="textAccent"
      >
        <Icon maxWidth="1rem" maxHeight="1rem" width="100%" />
      </Box>
      <Box>
        <Box color={color}>
          <Typography
            ref={countUpRef}
            variant="displayLarge"
            letterSpacing="-0.15rem"
            mt="4xl"
          />
          <Typography
            variant="title3"
            fontWeight="400"
            wordBreak="break-all"
            hyphens="auto"
          >
            {title}
          </Typography>
        </Box>
        <Typography
          mt="l"
          variant="medium"
          color="textSoft"
          wordBreak="break-all"
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
};

export default UsedByCard;
