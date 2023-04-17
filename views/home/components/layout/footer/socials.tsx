import { Box, Motion } from '@interest-protocol/ui-kit';
import { FC } from 'react';

import {
  DiscordSVG,
  GithubSVG,
  InstagramSVG,
  MediumSVG,
  TelegramSVG,
  TwitterSVG,
  YoutubeSVG,
} from '@/svg';

import { SocialWrapperProps } from './social.types';

const SocialWrapper: FC<SocialWrapperProps> = ({ Icon, ...props }) => {
  return (
    <Motion
      color="primary"
      cursor="pointer"
      whileHover={{
        translateY: -7,
        filter: 'hue-rotate(360deg) brightness(1.5) opacity(0.95)',
      }}
      transition={{ duration: 0.8 }}
      {...props}
    >
      <Icon width="1.375rem" maxWidth="1.375rem" maxHeight="1.375rem" />
    </Motion>
  );
};

const Socials: FC = () => {
  return (
    <Box
      mx="auto"
      gap={['1.5rem', '1.5rem', '2.5rem']}
      width="100%"
      pt="6.25rem"
      pb="1.875rem"
      display="flex"
      position="relative"
      justifyContent="center"
      background="background"
    >
      <SocialWrapper Icon={MediumSVG} />
      <SocialWrapper Icon={InstagramSVG} />
      <SocialWrapper Icon={YoutubeSVG} />
      <SocialWrapper Icon={TwitterSVG} />
      <SocialWrapper Icon={TelegramSVG} />
      <SocialWrapper Icon={GithubSVG} />
      <SocialWrapper Icon={DiscordSVG} />
    </Box>
  );
};

export default Socials;
