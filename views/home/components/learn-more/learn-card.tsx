import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ResponsiveImage from '@/elements/responsive-image';

import { LearnMoreProps } from './learn-more.types';

const LearnMoreCard: FC<LearnMoreProps> = ({ name }) => {
  const t = useTranslations();

  return (
    <Box maxWidth="23rem" p="4xl" pb="0" position="relative">
      <Button
        mb="4xl"
        variant="icon"
        border="1px solid"
        borderColor="outline"
      ></Button>
      <Typography variant="displayLarge" color="text" mb="xl">
        {t(`landingPage.learnMore.subTitles.${name}`)}
      </Typography>
      <ResponsiveImage alt={name} path={`home/${name}`} />
    </Box>
  );
};

export default LearnMoreCard;