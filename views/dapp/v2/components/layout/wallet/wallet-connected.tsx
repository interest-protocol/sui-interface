import { Box, Theme, Typography, useTheme } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { pathOr, prop } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { RefBox } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import useClickOutsideListenerRef from '@/hooks/use-click-outside-listener-ref';
import { noop } from '@/utils';

import WalletDropdown from './wallet-dropdown';

const BOX_ID = 'wallet-connected-box-id-123';

const WalletConnected: FC = () => {
  const {
    colors: { surface },
  } = useTheme() as Theme;

  const [isOpen, setIsOpen] = useState(false);
  const { network } = useNetwork();
  const { suiNSProvider } = useProvider();
  const { account } = useWeb3();
  const [loading, setLoading] = useState(false);
  const [suiNSRecord, setSuiNSRecord] = useState<Record<string, string>>({});
  const [avatarUrlRecord, setAvatarUrlRecord] = useState<
    Record<string, string>
  >({});
  const { accounts } = useWalletKit();
  const { provider } = useProvider();

  const closeDropdown = (event: any) => {
    if (
      event?.path?.some((node: any) => node?.id == BOX_ID) ||
      event?.composedPath()?.some((node: any) => node?.id == BOX_ID)
    )
      return;

    setIsOpen(false);
  };

  const connectedBoxRef =
    useClickOutsideListenerRef<HTMLDivElement>(closeDropdown);

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

  const handleClose = () => setIsOpen(false);

  const getName = (account: string) =>
    suiNSRecord[account] ? suiNSRecord[account] : formatAddress(account);

  return (
    <RefBox
      id={BOX_ID}
      height="3rem"
      color={surface}
      position="relative"
      ref={connectedBoxRef}
    >
      <Box display="flex" gap="m" alignItems="center">
        {account && (
          <Typography variant="medium" color="onSurface">
            {getName(account)}
          </Typography>
        )}
        <Box
          bg="primary"
          width="2.5rem"
          height="2.5rem"
          cursor="pointer"
          overflow="hidden"
          borderRadius="50%"
          onClick={() => setIsOpen(true)}
          transition="transform 300ms ease-in-out"
          nHover={{
            transform: 'scale(1.1)',
          }}
        >
          {account && avatarUrlRecord[account] ? (
            <img
              width="100%"
              height="100%"
              src={avatarUrlRecord[account]}
              alt={`${getName(account)} NFT`}
            />
          ) : (
            <UserSVG width="100%" maxWidth="2.5rem" maxHeight="2.5rem" />
          )}
        </Box>
      </Box>
      <WalletDropdown
        isOpen={isOpen}
        loading={loading}
        suiNSRecord={suiNSRecord}
        handleClose={handleClose}
      />
    </RefBox>
  );
};

export default WalletConnected;
