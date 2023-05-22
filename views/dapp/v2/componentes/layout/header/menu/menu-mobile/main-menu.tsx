import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { DotsSVG, SuiSVG } from '@/svg';
import { capitalize } from '@/utils';

import Navbar from '../../navbar';
import NavItemText from '../../navbar/nav-item-text';
import { MenuMobileProps } from '../menu.types';

const MainMenu: FC<Pick<MenuMobileProps, 'handleOpenSettings'>> = ({
  handleOpenSettings,
}) => {
  const t = useTranslations();

  return (
    <Box variant="container" justifyItems="unset">
      <Box pt="4xl" mt="4xl" zIndex="2" gridColumn="1/-1">
        <Box mb="2xl">
          <Box display="flex" alignItems="center">
            <Box
              bg="#99BBFF"
              display="flex"
              color="#0055FF"
              width="3.625rem"
              borderRadius="m"
              height="3.625rem"
              alignItems="center"
              justifyContent="center"
            >
              A
            </Box>
            <Typography variant="medium" ml="l" color="textSoft">
              0x85...9be9
            </Typography>
          </Box>
          <Box
            p="xl"
            mt="s"
            display="flex"
            borderRadius="m"
            surface="surface2"
            alignItems="center"
          >
            <Box height="1.5rem" color="text">
              <SuiSVG
                filled
                height="100%"
                maxWidth="1.5rem"
                maxHeight="1.5rem"
              />
            </Box>
            <Box ml="4xl">
              <Typography variant="extraSmall" color="textSoft">
                {capitalize(t('common.v2.wallet.name'))}
              </Typography>
              <Typography variant="title4" color="text">
                0.0123
              </Typography>
            </Box>
          </Box>
          <Box display="flex" gap="s" mt="s">
            <Button variant="outline" width="100%" justifyContent="center">
              {t('common.v2.wallet.switch')}
            </Button>
            <Button variant="filled" width="100%" justifyContent="center">
              {t('common.v2.wallet.disconnect')}
            </Button>
          </Box>
        </Box>
        <Box m="m" pt="xl">
          <Navbar isMobile />
          <Box display="block" onClick={handleOpenSettings}>
            <Box display="flex" alignItems="center" color="textSoft">
              <Box height="1rem">
                <DotsSVG maxWidth="1rem" maxHeight="1rem" height="100%" />
              </Box>
              <NavItemText>{capitalize('settings')}</NavItemText>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default MainMenu;
