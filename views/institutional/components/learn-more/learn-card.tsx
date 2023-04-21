import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { Variants } from 'framer-motion';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { LinkSVG } from '@/svg';

import { LearnMoreProps } from './learn-more.types';

const cardVariants: Variants = {
  hover: {
    backgroundSize: ['100%', '300%', '100%'],
    backgroundPosition: ['0% 0%', '100% 100%', '0% 100%', '100% 0%'],
    transition: {
      duration: 30,
      repeat: Infinity,
    },
  },
};

const wrapperVariant = {
  hover: {
    backgroundColor: '#ffffff08',
  },
};

const LearnMoreCard: FC<LearnMoreProps> = ({ name, big, link, external }) => {
  const t = useTranslations();
  const { push } = useRouter();

  return (
    <Motion
      p="2xl"
      display="flex"
      borderRadius="m"
      cursor="pointer"
      whileHover="hover"
      border="1px solid"
      position="relative"
      borderColor="textAccent"
      variants={wrapperVariant}
      justifyContent="space-between"
      gridColumn={big ? '1/-1' : ['1/-1', '1/-1', '1/-1', 'span 6']}
      flexDirection={['column', 'column', 'column', big ? 'row' : 'column']}
      {...(external
        ? { as: 'a', href: link, target: '_blank', rel: 'noreferrer' }
        : { onClick: () => push(link) })}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <Button
          mb="4xl"
          variant="icon"
          border="1px solid"
          width="fit-content"
          borderColor="outline"
        >
          <LinkSVG maxWidth="100%" maxHeight="100%" width="100%" />
        </Button>
        <Typography
          mb="xl"
          color="text"
          wordBreak="break-all"
          variant="displayLarge"
        >
          {t(`landingPage.learnMore.subTitles.${name}`)}
        </Typography>
      </Box>
      <Motion
        borderRadius="m"
        variants={cardVariants}
        width={['auto', 'auto', 'auto', big ? '49%' : 'auto']}
        height={['10rem', '17rem', '18rem', big ? '18rem' : '14rem']}
        backgroundImage={`url('images/home/${name}.png')`}
        backgroundPosition="0% 50%"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      />
    </Motion>
  );
};

export default LearnMoreCard;
