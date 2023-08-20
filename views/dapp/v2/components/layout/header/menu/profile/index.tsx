import { Box } from '@interest-protocol/ui-kit';
import { useWalletKit } from '@mysten/wallet-kit';
import { useRouter } from 'next/router';
import { pathOr, prop } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { noop } from '@/utils';

import MenuProfile from './menu-profile';
import MenuSwitchAccount from './menu-switch-account';
import { getName } from './profile.utils';

const BOX_ID = 'wallet-box';

const Profile: FC = () => {
  const { query } = useRouter();
  const [isOpenProfile, setIsOpenProfile] = useState(Boolean(query.profile));
  const [isOpenAccount, setIsOpenAccount] = useState(Boolean(query.account));
  const [menuIsDropdown, setMenuIsDropdown] = useState(
    isOpenProfile || isOpenAccount
  );
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

  useEffect(() => {
    setMenuIsDropdown(isOpenProfile || isOpenAccount);
  }, [isOpenAccount, isOpenProfile]);

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

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    handleCloseProfile();
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

  const handleOpenProfile = () => {
    handleCloseAccount();
    const url = new URL(window.location.href);
    url.searchParams.set('profile', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpenProfile(true);
  };

  const handleCloseProfile = () => {
    handleCloseAccount();
    const url = new URL(window.location.href);
    url.searchParams.delete('profile');
    window.history.pushState('', '', url.toString());
    setIsOpenProfile(false);
  };

  const handleOpenAccount = () => {
    handleCloseProfile();
    const url = new URL(window.location.href);
    url.searchParams.set('account', 'true');
    window.history.pushState('', '', url.toString());
    setIsOpenAccount(true);
  };

  const handleCloseAccount = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('account');
    window.history.pushState('', '', url.toString());
    setIsOpenAccount(false);
  };

  return (
    <Box
      id={BOX_ID}
      display="flex"
      cursor="pointer"
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      ref={connectedBoxRef}
      flexDirection="column"
      justifyContent="center"
      ml={['0.5rem', '0.5rem', '0.5rem', 'unset']}
      top={menuIsDropdown ? ['-2rem', '-2rem', '-2rem', 'unset'] : 'unset'}
      left={menuIsDropdown ? ['-2rem', '-2rem', '-2rem', 'unset'] : 'unset'}
      width={menuIsDropdown ? ['100vw', '100vw', '100vw', 'unset'] : 'unset'}
      height={menuIsDropdown ? ['100vh', '100vh', '100vh', 'unset'] : 'unset'}
      position={
        menuIsDropdown
          ? ['absolute', 'absolute', 'absolute', 'relative']
          : 'relative'
      }
      bg={
        menuIsDropdown
          ? [
              'surface.container',
              'surface.container',
              'surface.container',
              'unset',
            ]
          : 'unset'
      }
    >
      {account && (
        <Box
          gap="m"
          display={[
            menuIsDropdown ? 'none' : 'flex',
            menuIsDropdown ? 'none' : 'flex',
            menuIsDropdown ? 'none' : 'flex',
            'flex',
          ]}
          alignItems="center"
          onClick={handleOpenProfile}
        >
          <Box
            display="flex"
            width="2.5rem"
            height="2.5rem"
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
              <img
                width="100%"
                height="100%"
                src={avatarUrlRecord[account]}
                alt={`${getName(account, suiNSRecord)} NFT`}
              />
            ) : (
              <UserSVG maxWidth="2.5rem" maxHeight="2.5rem" width="100%" />
            )}
          </Box>
        </Box>
      )}
      <MenuProfile
        loading={loading}
        isOpen={isOpenProfile}
        suiNSRecord={suiNSRecord}
        avatarUrlRecord={avatarUrlRecord}
        handleOpenSwitch={handleOpenAccount}
        handleCloseProfile={handleCloseProfile}
      />
      <MenuSwitchAccount
        loading={loading}
        isOpen={isOpenAccount}
        suiNSRecord={suiNSRecord}
        onBack={handleOpenProfile}
        avatarUrlRecord={avatarUrlRecord}
        handleCloseProfile={handleCloseProfile}
      />
    </Box>
  );
};

export default Profile;
