import { Box, Typography } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { UserInfoProps } from '../profile.types';
import UserInfoHeader from './user-info-header';
import WalletTabs from './wallet-tabs';

const UserInfo: FC<UserInfoProps> = ({
  loading,
  suiNSRecord,
  avatarUrlRecord,
}) => {
  const t = useTranslations();

  return (
    <>
      <Box p="xl">
        <Typography
          variant="small"
          color="onSurface"
          textTransform="capitalize"
        >
          {t('common.v2.wallet.name')}
        </Typography>
      </Box>
      <UserInfoHeader
        avatarUrlRecord={avatarUrlRecord}
        loading={loading}
        suiNSRecord={suiNSRecord}
      />
      <Box p="xl">
        <WalletTabs />
      </Box>
    </>
  );
};

export default UserInfo;
