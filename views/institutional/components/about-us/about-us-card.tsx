import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLinkSVG } from '@/svg';

import { AboutUsCardProps } from './about-us.types';

const cardVariants: Variants = {
  offscreen: {
    y: '105%',
  },
  onscreen: {
    y: '0%',
    transition: {
      bounce: 0.2,
      duration: 0.5,
      type: 'spring',
    },
  },
};

const AboutUsCard: FC<AboutUsCardProps> = ({ name, link, Illustration }) => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Motion
      p="2xs"
      my="4xl"
      width="100%"
      display="grid"
      columnGap="2xl"
      alignItems="end"
      borderRadius="m"
      cursor="pointer"
      overflow="hidden"
      border="1px solid"
      initial="offscreen"
      whileInView="onscreen"
      borderColor="textAccent"
      whileHover={{
        backgroundColor: '#ffffff08',
      }}
      onClick={() => push(link)}
      viewport={{ once: true, amount: 0.8 }}
      gridColumn={['1/-1', '1/-1', '1/-1', '2/12']}
      gridTemplateColumns={['1fr', '1fr', '1fr', '1fr 1fr']}
    >
      <Box
        p="xl"
        maxWidth="23rem"
        pb={['4xl', '4xl', 'xl']}
        mb={['xl', 'xl', 'unset']}
      >
        <Typography variant="displaySmall" color="text" mb="xl">
          {t(`landingPage.aboutUs.services.${name}.name`)}
        </Typography>
        <Typography variant="medium" color="textSoft">
          {t(`landingPage.aboutUs.services.${name}.description`)}
        </Typography>
      </Box>
      <Motion
        bg="#B6C4FF0A"
        height="100%"
        position="relative"
        variants={cardVariants}
      >
        <Button
          m="xl"
          right="0"
          zIndex="1"
          variant="icon"
          border="1px solid"
          position="absolute"
          borderColor="outline"
        >
          <ArrowLinkSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
        </Button>
        <Box m="4xl" p="4xl" height={['15rem', '21rem']} position="relative">
          <Illustration />
        </Box>
      </Motion>
    </Motion>
  );
};

export default AboutUsCard;
