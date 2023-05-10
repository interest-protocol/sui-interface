import { Box, Typography } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import { ArrowRightSVG } from '@/svg';

import { SecurityCardProps } from './security.types';

const SecurityCard: FC<SecurityCardProps> = ({
  color,
  icon,
  title,
  text,
  cat: { link, name },
}) => (
  <Box
    p="s"
    color="text"
    bg="#1f1f23"
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    gridColumn={['span 4', 'span 8', 'span 4', 'span 6']}
  >
    <Box>
      <Box width="1.7rem" height="4rem" color={color}>
        {icon}
      </Box>
      <Box>
        <Typography
          px="l"
          color={color}
          variant="medium"
          textTransform="uppercase"
        >
          {title}
        </Typography>
        <Typography px="l" py="m" variant="medium" color="textSoft">
          {text}
        </Typography>
      </Box>
    </Box>
    <Box
      px="l"
      as="a"
      py="m"
      mt="l"
      display="flex"
      alignItems="end"
      {...{ href: link, target: '_blank', rel: 'noreferrer' }}
    >
      <Box mr="l">
        <ArrowRightSVG maxHeight="1.1rem" maxWidth="1.1rem" width="100%" />
      </Box>
      <Typography variant="medium" color="#B4C5FF">
        {name}
      </Typography>
    </Box>
  </Box>
);

export default SecurityCard;
