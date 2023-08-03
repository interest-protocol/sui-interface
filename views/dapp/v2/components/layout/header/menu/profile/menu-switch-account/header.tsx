import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLeft } from '@/svg';

import MenuButton from '../../menu-button';
import { MenuSwitchAccountHeaderProps } from '../profile.types';

const MenuSwitchAccountHeader: FC<MenuSwitchAccountHeaderProps> = ({
  onBack,
  handleCloseProfile,
  size,
}) => {
  const t = useTranslations();

  return (
    <>
      <Box
        py={['l', 'l', 'l', 'xl']}
        px={['unset', 'unset', 'unset', 'xl']}
        display="flex"
        gap="xs"
        color="onSurface"
        alignItems="center"
        justifyContent={[
          'space-between',
          'space-between',
          'space-between',
          'unset',
        ]}
      >
        <Button
          variant="icon"
          p="0 !important"
          onClick={onBack}
          nHover={{
            color: 'primary',
            bg: 'transparent',
          }}
        >
          <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
        <Typography variant="small" textTransform="capitalize">
          {t('common.v2.wallet.switch')}
        </Typography>
        <Box
          display={['flex', 'flex', 'flex', 'none']}
          flexDirection="row-reverse"
        >
          <MenuButton isOpen={true} handleClose={handleCloseProfile} />
        </Box>
      </Box>
      <Box p="xl" display={['flex', 'flex', 'flex', 'none']}>
        <Typography
          variant="small"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.v2.wallet.account', {
            count: size,
          })}
        </Typography>
      </Box>
    </>
  );
};

export default MenuSwitchAccountHeader;
