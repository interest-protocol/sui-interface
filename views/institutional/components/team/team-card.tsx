import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { toPairs } from 'ramda';
import { FC } from 'react';
import { v4 } from 'uuid';

import { ResponsiveImage } from '@/elements';
import { TTranslatedMessage } from '@/interface';

import { SOCIAL_SVG } from './team.data';
import { TeamCardProps } from './team.types';

const TeamCard: FC<TeamCardProps> = ({ image, social, name, role }) => {
  const t = useTranslations();

  return (
    <Box
      px="l"
      py="xl"
      gap="l"
      display="flex"
      borderRadius="m"
      overflow="hidden"
      border="1px solid"
      flexDirection="column"
      borderColor="textAccent"
      gridColumn={['span 4', 'span 4', 'span 4', 'span 4']}
    >
      <Box
        height={['18rem', '12rem', '14rem', '18rem']}
        overflow="hidden"
        borderRadius="m"
        bg="#fff1"
      >
        <ResponsiveImage alt={image} path={`team/${image}`} />
      </Box>
      <Typography
        as="h3"
        color="text"
        fontSize="28px"
        variant="title4"
        fontWeight="400"
        textTransform="uppercase"
      >
        {name}
      </Typography>
      <Typography
        as="p"
        width="100%"
        variant="small"
        fontSize="1rem"
        color="textSoft"
      >
        {t(role as TTranslatedMessage)}
      </Typography>
      <Box display="flex" gap="l" alignItems="center">
        {toPairs(social).map(([network, link]) => {
          const Icon = SOCIAL_SVG[network];
          return (
            <a href={link} target="_blank" rel="noreferrer" key={v4()}>
              <Box
                mx="M"
                as="span"
                color="text"
                width="1.6rem"
                display="inline-block"
                nHover={{
                  color: 'primary',
                }}
              >
                <Icon width="100%" maxHeight="1.2rem" maxWidth="1.2rem" />
              </Box>
            </a>
          );
        })}
      </Box>
    </Box>
  );
};

export default TeamCard;
