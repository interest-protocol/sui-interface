import { Box, Button, Motion, Typography } from '@interest-protocol/ui-kit';
import { Variants } from 'framer-motion';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { FC, PropsWithChildren } from 'react';

import { LinkSVG } from '@/svg';

import { LearnMoreProps, LinkWrapperProps } from './learn-more.types';

const cardVariants: Variants = {
  hover: {
    backgroundSize: ['100%', '300%', '100%'],
    backgroundPosition: ['0% 0%', '100% 100%', '100% 0%', '100% 0%'],
    transition: {
      duration: 30,
      repeat: Infinity,
    },
  },
};

const LinkWrapper: FC<PropsWithChildren<LinkWrapperProps>> = ({
  href,
  external,
  children,
}) => {
  if (external)
    return (
      <a href={href} target="_blank" rel="noreferrer">
        {children}
      </a>
    );

  return <Link href={href}>{children}</Link>;
};

const LearnMoreCard: FC<LearnMoreProps> = ({ name, big, link, external }) => {
  const t = useTranslations();

  return (
    <Motion
      p="2xl"
      display="flex"
      borderRadius="m"
      whileHover="hover"
      border="1px solid"
      position="relative"
      borderColor="textAccent"
      justifyContent="space-between"
      gridColumn={big ? '1/-1' : ['1/-1', '1/-1', '1/-1', 'span 6']}
      flexDirection={['column', 'column', 'column', big ? 'row' : 'column']}
    >
      <Box display="flex" flexDirection="column" justifyContent="space-between">
        <LinkWrapper href={link} external={external}>
          <Button
            mb="4xl"
            variant="icon"
            border="1px solid"
            borderColor="outline"
          >
            <LinkSVG maxWidth="100%" maxHeight="100%" />
          </Button>
        </LinkWrapper>
        <Typography variant="displayLarge" color="text" mb="xl">
          {t(`landingPage.learnMore.subTitles.${name}`)}
        </Typography>
      </Box>
      <Motion
        borderRadius="m"
        variants={cardVariants}
        height={['17rem', '17rem', '17rem', big ? '18rem' : '17rem']}
        width={['auto', 'auto', 'auto', big ? '49%' : 'auto']}
        backgroundImage={`url('images/home/${name}.png')`}
        backgroundPosition="0% 50%"
        backgroundRepeat="no-repeat"
        backgroundSize="100%"
      />
    </Motion>
  );
};

export default LearnMoreCard;
