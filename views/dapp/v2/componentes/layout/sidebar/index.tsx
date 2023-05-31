import {
  Box,
  SwitchButton,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';
import { not } from 'ramda';
import { FC } from 'react';
import { v4 } from 'uuid';

import { LogoSVG } from '@/components/svg/v2';
import { Routes, RoutesEnum } from '@/constants';
import { AppTheme } from '@/interface';

import { SIDEBAR_ITEMS } from './sidebar.data';

const Sidebar: FC = () => {
  const { asPath } = useRouter();
  const { dark, setDark } = useTheme() as AppTheme<Theme>;
  const t = useTranslations();

  return (
    <Box
      p="2xl"
      width="100%"
      display="flex"
      maxWidth="20rem"
      flexDirection="column"
      borderRadius="0 1rem 1rem 0"
      justifyContent="space-between"
      {...(dark ? { surface: 'surface1' } : { bg: '#EFEDF1' })}
    >
      <Box>
        <Link href={Routes[RoutesEnum.Home]}>
          <Box textAlign="center">
            <LogoSVG full maxWidth="100%" maxHeight="2.6rem" height="100%" />
          </Box>
        </Link>
        <Typography
          variant="small"
          m="xl"
          color={dark ? 'disabled' : 'foreground'}
        >
          Menu
        </Typography>
        <Box display="flex" flexDirection="column" gap="s">
          {SIDEBAR_ITEMS.map(({ Icon, name, path }) => (
            <Link href={path} key={v4()}>
              <Box
                p="l"
                display="flex"
                borderRadius="m"
                cursor="pointer"
                color={dark ? 'disabled' : 'textDisabled'}
                bg={asPath === path ? '#99BBFF14' : undefined}
                nHover={{
                  bg: '#99BBFF28',
                }}
              >
                <Icon maxHeight="1.2rem" maxWidth="1.2rem" width="100%" />
                <Typography variant="small" ml="l">
                  {name}
                </Typography>
              </Box>
            </Link>
          ))}
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" gap="l">
        <Typography variant="medium" color="text">
          {t('common.v2.menu.light')}
        </Typography>
        <SwitchButton
          name="theme"
          size="medium"
          defaultValue={dark}
          onChange={() => setDark(not)}
        />
        <Typography variant="medium" color="text">
          {t('common.v2.menu.dark')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
