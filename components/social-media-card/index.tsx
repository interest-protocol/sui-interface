import { FC } from 'react';

import { Box } from '@/elements';

import { SocialMediaCardProps } from './social-media-card.types';

const SocialMediaCard: FC<SocialMediaCardProps> = ({ title, link, Logo }) => (
  <a href={link} target="__blank" title={title} rel="noopener noreferrer">
    <Box
      width="2.5rem"
      height="2.5rem"
      nHover={{
        bg: 'accent',
        transform: 'scale(1.2)',
      }}
      color="text"
      mx="0.75rem"
      display="flex"
      borderRadius="50%"
      alignItems="center"
      justifyContent="center"
      transition="all 0.3s ease-in-out"
    >
      <Logo width="100%" height="100%" maxWidth="1rem" maxHeight="1rem" />
    </Box>
  </a>
);

export default SocialMediaCard;
