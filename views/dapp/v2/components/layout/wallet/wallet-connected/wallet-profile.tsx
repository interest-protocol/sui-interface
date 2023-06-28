import { Box, Typography } from '@interest-protocol/ui-kit';
import { formatAddress } from '@mysten/sui.js';
import { pathOr, prop } from 'ramda';
import { FC, useEffect, useState } from 'react';

import { UserSVG } from '@/components/svg/v2';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';

import { WalletProfileProps } from '../wallet.types';

const WalletProfile: FC<WalletProfileProps> = ({ setIsOpen, suiNSRecord }) => {
  const { account } = useWeb3();
  const { network } = useNetwork();
  const { provider } = useProvider();
  const { suiNSProvider } = useProvider();
  const [avatarUrlRecord, setAvatarUrlRecord] = useState<
    Record<string, string>
  >({});

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

  const getName = (account: string) =>
    suiNSRecord[account] ? suiNSRecord[account] : formatAddress(account);

  return (
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
  );
};

export default WalletProfile;
