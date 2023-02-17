import { useTranslations } from 'next-intl';
import { FC } from 'react';

import SwitchLang from '@/components/switch-lang';
import { SOCIAL_MEDIAS } from '@/constants/social-media';
import { Box, Dropdown, Typography } from '@/elements';
import { BarsSVG, GitBookSVG } from '@/svg';

import { SwitchThemeProps } from '../layout.types';
import SwitchTheme from './switch-theme';

const MobileMenu: FC<SwitchThemeProps> = ({ changeTheme, dark }) => {
  const t = useTranslations();

  return (
    <>
      <Dropdown
        buttonMode
        mode="menu"
        header={
          <Box
            display="grid"
            alignItems="center"
            justifyItems="center"
            gridTemplateColumns="1fr auto 1fr"
          >
            <SwitchLang isMobile={true} />
            <Typography variant="small">{t('common.followUs')}</Typography>
            <SwitchTheme dark={dark} changeTheme={changeTheme} />
          </Box>
        }
        title={
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mx="S"
          >
            <Box as="span" display="inline-block" width="1rem">
              <BarsSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
            </Box>
          </Box>
        }
        data={[
          ...[
            ...SOCIAL_MEDIAS,
            {
              title: 'GitBook',
              Logo: GitBookSVG,
              link: 'https://docs.interestprotocol.com/',
            },
          ].map(({ title, link }) => ({
            value: title,
            onSelect: () => parent.open(link),
            displayOption: (
              <a
                href={link}
                target="__blank"
                rel="noopener noreferrer"
                style={{ width: '100%' }}
              >
                <Typography
                  px="M"
                  py="L"
                  width="100%"
                  variant="normal"
                  textAlign="center"
                  textTransform="uppercase"
                >
                  {title}
                </Typography>
              </a>
            ),
          })),
          {
            value: 'feedback',
            onSelect: () => parent.open('https://forms.gle/aDP4wHvshLPKkKv97'),
            displayOption: (
              <Box width="100%">
                <a
                  href="https://forms.gle/aDP4wHvshLPKkKv97"
                  target="__blank"
                  rel="noopener noreferrer"
                >
                  <Typography
                    px="M"
                    py="L"
                    width="100%"
                    variant="normal"
                    textAlign="center"
                    bg="accentActive"
                    textTransform="uppercase"
                    hover={{
                      bg: 'warning',
                    }}
                  >
                    Feedback
                  </Typography>
                </a>
              </Box>
            ),
          },
        ]}
      />
    </>
  );
};

export default MobileMenu;
