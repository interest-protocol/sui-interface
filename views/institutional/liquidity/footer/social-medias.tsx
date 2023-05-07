import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { FC } from 'react';
import { v4 } from 'uuid';

import { SOCIAL_MEDIAS } from '@/constants';

const FooterSocialMidia: FC = () => {
  const { colors } = useTheme() as Theme;
  return (
    <Box display="grid" gap="0.5rem" gridTemplateColumns="repeat(4, 1fr)">
      {SOCIAL_MEDIAS.filter((item) =>
        ['Medium', 'Discord', 'Telegram', 'Twitter'].includes(item.title)
      ).map((socialMedia) => {
        const Icon = socialMedia.Logo;
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
              href: socialMedia.link,
              target: '_blank',
              rel: 'noreferrer',
            }}
            key={v4()}
          >
            <Box width={['1.375rem', '1.375rem', '1.375rem', '2rem']}>
              <Icon
                width="100%"
                maxWidth="2rem"
                maxHeight="2rem"
                stroke={colors.textSoft}
                fill="none"
              />
            </Box>
            <Typography variant="extraSmall" mt="0.35rem">
              {socialMedia.title}
            </Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default FooterSocialMidia;
