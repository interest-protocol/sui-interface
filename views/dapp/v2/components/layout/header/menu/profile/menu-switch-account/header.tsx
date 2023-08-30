import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { ArrowLeft } from '@/svg';

import { MenuSwitchAccountHeaderProps } from '../profile.types';

const MenuSwitchAccountHeader: FC<MenuSwitchAccountHeaderProps> = ({
  handleCloseSwitchAccount,
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
          onClick={handleCloseSwitchAccount}
          nHover={{
            color: 'primary',
            bg: 'transparent',
          }}
        >
          <ArrowLeft maxHeight="1rem" maxWidth="1rem" width="100%" />
        </Button>
        <Box width="100%" display="flex" justifyContent="center">
          <Typography
            variant="small"
            textAlign="center"
            textTransform="uppercase"
          >
            {t('common.v2.wallet.manage')}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MenuSwitchAccountHeader;
