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
          if (prop('nftId', object)) {
            const nft = await provider.getObject({
              id: prop('nftId', object)!,
              options: { showContent: true },
            });

            setAvatarUrlRecord((x) => ({
              ...x,
              [account]: `https://ipfs.io/ipfs/${pathOr(
                'QmaLFg4tQYansFpyRqmDfABdkUVy66dHtpnkH15v1LPzcY',
                ['data', 'content', 'fields', 'image_url'],
                nft
              )}`,
            }));
          }
        })
        .catch();
    }
  }, [account, network, suiNSRecord]);

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
            {suiNSRecord[account]
              ? suiNSRecord[account]
              : formatAddress(account)}
          </Typography>
        )}
        <Box
          bg="primary"
          width="2.5rem"
          height="2.5rem"
          cursor="pointer"
          borderRadius="50%"
          onClick={() => setIsOpen(true)}
          transition="transform 300ms ease-in-out"
          nHover={{
            transform: 'scale(1.1)',
          }}
        >
          {avatarUrlRecord[account || ''] ? (
            <img
              width="100%"
              height="100%"
              src={avatarUrlRecord[account || '']}
              alt=""
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
        handleDisconnect={() => {
          setIsOpen(false);
        }}
      />
    </RefBox>
  );
};

export default WalletConnected;
