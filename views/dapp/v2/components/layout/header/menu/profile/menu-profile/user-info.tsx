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

import MenuItemWrapper from '../../menu-item-wrapper';
import { UserInfoProps } from '../profile.types';
import { getName } from '../profile.utils';

const UserInfo: FC<UserInfoProps> = ({
  loading,
  suiNSRecord,
  avatarUrlRecord,
}) => {
  const t = useTranslations();
  const { account } = useWeb3();

  const copyToClipboard = (address: string) => {
    window.navigator.clipboard.writeText(address || '');
    toast(capitalize(t('common.v2.wallet.copy')));
  };

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
      <Box
        borderBottom={['unset', 'unset', 'unset', '1px solid']}
        borderColor="outline.outlineVariant"
      >
        <MenuItemWrapper>
          <Box display="flex" alignItems="center" gap="l">
            {loading ? (
              <ProgressIndicator variant="loading" size={24} />
            ) : (
              <Box
                bg="primary"
                display="flex"
                width="1.5rem"
                height="1.5rem"
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
              <Typography variant="small" color="onSurface">
                {getName(account, suiNSRecord)}
              </Typography>
            )}
          </Box>
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
        </MenuItemWrapper>
      </Box>
    </>
  );
};

export default UserInfo;
