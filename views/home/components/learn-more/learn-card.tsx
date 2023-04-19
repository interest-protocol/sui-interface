import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import ResponsiveImage from '@/elements/responsive-image';

import { LearnMoreProps } from './learn-more.types';

const LearnMoreCard: FC<LearnMoreProps> = ({ name, type }) => {
  const t = useTranslations();

  if (type === 'big')
    return (
      <>
        <Box
          p="4xl"
          position="relative"
          display="grid"
          gridTemplateColumns="repeat(14, 1fr)"
          gap="2xl"
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            gridColumn="span 7"
          >
            <Button
              width="fit-content"
              mb="4xl"
              variant="icon"
              border="1px solid"
              borderColor="outline"
            ></Button>
            <Typography variant="displayLarge" color="text" mb="xl">
              {t(`landingPage.learnMore.subTitles.${name}`)}
            </Typography>
          </Box>
          <Box gridColumn="span 7">
            <ResponsiveImage alt={name} path={`home/${name}`} />
          </Box>
        </Box>
      </>
    );

  return (
    <Box p="4xl" position="relative">
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
