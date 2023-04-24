import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import Title from '../title';
import { TEAM_MEMBERS } from './team.data';
import TeamCard from './team-card';

const Team: FC = () => {
  const t = useTranslations();

  return (
    <Box bg="background" pb="4xl">
      <Box variant="container" justifyItems="unset">
        <Title as="h2" textAlign="center" my="4xl" py="4xl" gridColumn="1/-1">
          <Typography
            as="span"
            display="block"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background="linear-gradient(270deg, #99BBFF 50%, rgba(153, 187, 255, 0.2) 99.07%)"
            WebkitTextFillColor="transparent"
            WebkitBackgroundClip="text"
            backgroundClip="text"
          >
            {t('team.title.first')}
          </Typography>
          <Typography
            as="span"
            display="block"
            variant="displayLarge"
            letterSpacing="-0.15rem"
            background="linear-gradient(90deg, #99BBFF 3%, rgba(153, 187, 255, 0.2) 94.16%)"
            WebkitBackgroundClip="text"
            WebkitTextFillColor="transparent"
            backgroundClip="text"
          >
            {t('team.title.second')}
          </Typography>
        </Title>
        {TEAM_MEMBERS.map((member) => (
          <TeamCard key={v4()} {...member} />
        ))}
      </Box>
    </Box>
  );
};

export default Team;
