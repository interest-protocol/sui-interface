import { Box, Button, Typography } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useRouter } from 'next/router';
import { pathOr, prop } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import RefBox from '@/elements/ref-box';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { noop } from '@/utils';

import MenuProfile from './menu-profile';
import { getName } from './profile.utils';

const BOX_ID = 'wallet-box';

const Profile: FC = () => {
  const { query } = useRouter();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenProfile, setIsOpenProfile] = useState(Boolean(query.profile));
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isOpenAccount, setIsOpenAccount] = useState(Boolean(query.account));
  const [isOpen, setIsOpen] = useState(false);
  const [isSwitchAccountOpen, setIsSwitchAccountOpen] = useState(false);

  const { account } = useWeb3();
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const [loading, setLoading] = useState(false);
  const [suiNSRecord, setSuiNSRecord] = useState<Record<string, string>>({});
  const [avatarUrlRecord, setAvatarUrlRecord] = useState<
    Record<string, string>
  >({});
  const { accounts } = useWalletKit();
  const { provider } = useProvider();

  const closeMenu = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const connectedBoxRef = useClickOutsideListenerRef<HTMLDivElement>(closeMenu);

  useEffect(() => {
    if (accounts.length) {
      setLoading(true);

      const promises = accounts.map((walletAccount) =>
        suiNSProvider.getName(walletAccount.address)
      );

      Promise.all(promises)
        .then(async (names) => {
          setSuiNSRecord(
            names.reduce(
              (acc, name, index) =>
                name ? { ...acc, [accounts[index].address]: name } : acc,
              {} as Record<string, string>
            )
          );
        })
        .catch(noop)
        .finally(() => setLoading(false));
    }
  }, [network, accounts]);

  useEffect(() => {
    if (account && suiNSRecord[account]) {
      suiNSProvider
        .getNameObject(suiNSRecord[account], {
          showAvatar: true,
        })
        .then(async (object) => {
          const nftId = prop('nftId', object);
          if (nftId) {
            const nft = await provider.getObject({
              id: nftId,
              options: { showDisplay: true },
            });

            const imageUrl = pathOr(
              null,
              ['data', 'display', 'data', 'image_url'],
              nft
            ) as string | null;

            if (imageUrl) {
              setAvatarUrlRecord((x) => ({
                ...x,
                [account]: imageUrl.replace('ipfs://', 'https://ipfs.io/ipfs/'),
              }));
            }
          }
        })
        .catch();
    }
  }, [account, network, suiNSRecord]);

  const handleCloseProfile = () => {
    handleCloseAccount();
    handleCloseSwitchAccount;
    const url = new URL(window.location.href);
    url.searchParams.delete('profile');
    window.history.pushState('', '', url.toString());
    setIsOpenProfile(false);
  };

  const handleCloseAccount = () => {
    handleCloseSwitchAccount;
    const url = new URL(window.location.href);
    url.searchParams.delete('account');
    window.history.pushState('', '', url.toString());
    setIsOpenAccount(false);
  };

  const handleOpenSwitchAccount = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('accounts-menu', 'true');
    window.history.pushState('', '', url.toString());
    setIsSwitchAccountOpen(true);
  };

  const handleCloseSwitchAccount = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('accounts-menu', 'false');
    window.history.pushState('', '', url.toString());
    setIsSwitchAccountOpen(false);
  };

  return (
    <>
      <Box
        id={BOX_ID}
        display="flex"
        cursor="pointer"
        flexDirection="column"
        justifyContent="center"
      >
        {account && (
          <Button variant="outline" borderRadius="full" size="small">
            <Box
              gap="m"
              display="flex"
              alignItems="center"
              onClick={() => setIsOpen(true)}
            >
              <Box
                display="flex"
                width="1.5rem"
                height="1.5rem"
                cursor="pointer"
                overflow="hidden"
                alignItems="center"
                borderRadius="full"
                background="primary"
                justifyContent="center"
                color="primary.onPrimary"
                transition="background-color .5s"
              >
                {avatarUrlRecord[account] ? (
                  <Box
                    display="flex"
                    width="1.5rem"
                    height="1.5rem"
                    overflow="hidden"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img
                      width="100%"
                      height="100%"
                      src={avatarUrlRecord[account]}
                      alt={`${getName(account, suiNSRecord)} NFT`}
                    />
                  </Box>
                ) : (
                  <UserSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />
                )}
              </Box>
              <Typography color="primary" variant="medium">
                {getName(account, suiNSRecord)}
              </Typography>
            </Box>
          </Button>
        )}
      </Box>
      <RefBox id={BOX_ID} ref={connectedBoxRef}>
        <MenuProfile
          isOpen={isOpen}
          loading={loading}
          setIsOpen={setIsOpen}
          suiNSRecord={suiNSRecord}
          avatarUrlRecord={avatarUrlRecord}
          handleCloseProfile={handleCloseProfile}
          isSwitchAccountOpen={isSwitchAccountOpen}
          handleOpenSwitchAccount={handleOpenSwitchAccount}
          handleCloseSwitchAccount={handleCloseSwitchAccount}
        />
      </RefBox>
    </>
  );
};

export default Profile;
