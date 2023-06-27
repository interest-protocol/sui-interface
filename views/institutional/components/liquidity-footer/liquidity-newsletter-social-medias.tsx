import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SOCIAL_MEDIAS } from '@/constants';

const FooterSocialMedias: FC = () => {
  const { dark } = useTheme() as Theme;
  return (
    <Box display="grid" gap="0.5rem" gridTemplateColumns="repeat(4, 1fr)">
      {['Telegram', 'Discord', 'Twitter', 'Medium'].map((socialMediaTitle) => {
        const { Logo, link, title } = SOCIAL_MEDIAS.find(
          ({ title }) => socialMediaTitle === title
        )!;

        return (
          <Box
            bg="#1F1F23"
            height={['5rem', '5rem', '5rem', '7.5rem']}
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            color="textSoft"
            as="a"
            {...{
              href: link,
              target: '_blank',
              rel: 'noreferrer',
            }}
            key={v4()}
          >
            <Box width={['1.375rem', '1.375rem', '1.375rem', '2rem']}>
              <Logo
                width="100%"
                maxWidth="2rem"
                maxHeight="2rem"
                stroke={dark ? '#C7C6CA' : '#1B1B1F'}
                fill="none"
              />
            </Box>
            <Typography
              mt="0.35rem"
              variant="extraSmall"
              textDecoration="underline"
            >
              {title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FooterSocialMedias;
