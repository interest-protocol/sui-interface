import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLinkSVG } from '@/svg';

import { AboutUsCardProps } from './about-us.types';

const AboutUsCard: FC<AboutUsCardProps> = ({ name, link, Illustration }) => {
  const t = useTranslations();

  return (
    <Box
      p="2xs"
      my="4xl"
      width="100%"
      display="grid"
      columnGap="2xl"
      alignItems="end"
      borderRadius="m"
      gridColumn="1/13"
      border="1px solid"
      borderColor="textAccent"
      gridTemplateColumns={['1fr', '1fr 1fr']}
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
      <Box bg="#B6C4FF0A" height="100%" position="relative">
        <Link href={link}>
          <Button
            m="xl"
            right="0"
            variant="icon"
            border="1px solid"
            position="absolute"
            borderColor="outline"
          >
            <ArrowLinkSVG maxWidth="1rem" maxHeight="1rem" width="100%" />
          </Button>
        </Link>
        <Box
          m="4xl"
          p="4xl"
          height={['21rem', '21rem', '28rem']}
          display="flex"
        >
          <Motion
            color="primary"
            cursor="pointer"
            minHeight="100%"
            minWidth="100%"
            whileHover={{
              translateY: -7,
              filter: 'hue-rotate(360deg) brightness(1.5) opacity(0.95)',
            }}
            transition={{ duration: 0.8 }}
          >
            <Illustration />
          </Motion>
        </Box>
      </Box>
    </Box>
  );
};

export default AboutUsCard;
