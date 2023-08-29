import {
  Box,
  Button,
  ProgressIndicator,
  Typography,
} from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { toast } from 'react-hot-toast';

import { CopySVG, UserSVG } from '@/components/svg/v2';
import { useWeb3 } from '@/hooks';
import { capitalize } from '@/utils';

import { MenuSwitchAccountProps, UserInfoProps } from '../profile.types';
import { getName } from '../profile.utils';
import ChangeAccount from './change-account';

const UserInfoHeader: FC<UserInfoProps & MenuSwitchAccountProps> = ({
  isOpen,
  avatarUrlRecord,
  handleCloseProfile,
  loading,
  onBack,
  setIsOpen,
  suiNSRecord,
}) => {
  const { account } = useWeb3();
  const t = useTranslations();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };

  return (
    <Box
      py="l"
      gap="l"
      px="xl"
      width="100%"
      color="onSurface"
      alignItems="center"
      fontFamily="Roboto"
    >
      <Box display="flex" alignItems="center" gap="l">
        {loading ? (
          <ProgressIndicator variant="loading" size={24} />
        ) : (
          <Box
            bg="primary"
            display="flex"
            width="2.5rem"
            height="2.5rem"
            borderRadius="50%"
            alignItems="center"
            justifyContent="center"
            color="primary.onPrimary"
          >
            {account && avatarUrlRecord[account] ? (
              <img
                width="100%"
                height="100%"
                src={avatarUrlRecord[account]}
                alt={`${getName(account, suiNSRecord)} NFT`}
              />
            ) : (
              <UserSVG maxHeight="1.5rem" maxWidth="1.5rem" width="100%" />
            )}
          </Box>
        )}
        {account && (
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
          >
            <Box>
              <Typography variant="large">Wallet A</Typography>
              <Box display="flex" gap="l" alignItems="center">
                <Typography variant="small" color="onSurface">
                  {getName(account, suiNSRecord)}
                </Typography>
                <Button
                  size="small"
                  variant="icon"
                  p="0 !important"
                  nHover={{
                    color: 'primary',
                    bg: 'transparent',
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    copyToClipboard(account || '');
                  }}
                >
                  <CopySVG maxHeight="1rem" maxWidth="1rem" width="100%" />
                </Button>
              </Box>
            </Box>
            {/* <MenuSwitchAccount
              loading={loading}
              isOpen={isOpenAccount}
              suiNSRecord={suiNSRecord}
              onBack={handleOpenProfile}
              avatarUrlRecord={avatarUrlRecord}
              handleCloseProfile={handleCloseProfile}
            /> */}
            <ChangeAccount
              loading={loading}
              isOpen={isOpen}
              suiNSRecord={suiNSRecord}
              onBack={onBack}
              avatarUrlRecord={avatarUrlRecord}
              handleCloseProfile={handleCloseProfile}
              setIsOpen={setIsOpen}
            />
          </Box>
        )}
      </Box>
      <Typography variant="displaySmall" mt="l">
        $0.00
      </Typography>
    </Box>
  );
};

export default UserInfoHeader;
