import { Box, Motion, Theme, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SOCIAL_MEDIAS_ALTERNATIVE } from '@/constants';

import { SocialWrapperProps } from './social.types';

const SocialWrapper: FC<SocialWrapperProps> = ({ Icon, link }) => {
  const { dark } = useTheme() as Theme;
  return (
    <Motion
      as="a"
      color={dark ? 'background' : 'accentSoft'}
      cursor="pointer"
      whileHover={{
        translateY: -5,
        filter: 'hue-rotate(15deg) brightness(1.5) opacity(0.95)',
      }}
      transition={{ duration: 0.3 }}
      {...{ href: link, target: '_blank', rel: 'noreferrer' }}
    >
      <Icon width="1.375rem" maxWidth="1.375rem" maxHeight="1.375rem" />
    </Motion>
  );
};

const Socials: FC = () => (
  <Box
    mx="auto"
    gap="1.5rem"
    width="100%"
    pt="6.25rem"
    pb="1.875rem"
    display="flex"
    alignItems="center"
    position="relative"
    justifyContent="center"
    background="background"
  >
    {SOCIAL_MEDIAS_ALTERNATIVE.map(({ Logo, link }) => (
      <SocialWrapper Icon={Logo} link={link} key={v4()} />
    ))}
  </Box>
);

export default Socials;
