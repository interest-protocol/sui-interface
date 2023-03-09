import { useTheme } from '@emotion/react';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { useCallback, useState } from 'react';
import { FC } from 'react';

import { incrementTX } from '@/api/analytics';
import {
  COIN_TYPE,
  FAUCET_OBJECT_ID,
  FAUCET_PACKAGE_ID,
  Network,
} from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  mystenLabsProvider,
  showToast,
  showTXSuccessToast,
} from '@/utils';

import { MintButtonProps } from './faucet-form.types';

const COIN_MINT_AMOUNT = {
  [COIN_TYPE[Network.DEVNET].BNB]: '10',
  [COIN_TYPE[Network.DEVNET].ETH]: '5',
  [COIN_TYPE[Network.DEVNET].BTC]: '5',
  [COIN_TYPE[Network.DEVNET].USDT]: '2000',
  [COIN_TYPE[Network.DEVNET].USDC]: '2000',
  [COIN_TYPE[Network.DEVNET].DAI]: '2000',
} as Record<string, string>;

const MintButton: FC<MintButtonProps> = ({ getValues }) => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };
  const [loading, setLoading] = useState(false);
  const { signAndExecuteTransaction } = useWalletKit();
  const { account, mutate } = useWeb3();

  const handleOnMint = useCallback(async () => {
    try {
      setLoading(true);
      const type = getValues('type');

      if (type === COIN_TYPE[Network.DEVNET].SUI) {
        if (!account) throw new Error(t('error.accountNotFound'));
        await mystenLabsProvider.requestSuiFromFaucet(account);
        return;
      }

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'mint',
          gasBudget: 1000,
          module: 'faucet',
          packageObjectId: FAUCET_PACKAGE_ID,
          typeArguments: [type],
          arguments: [FAUCET_OBJECT_ID, COIN_MINT_AMOUNT[type] || '1'],
        },
      });
      await showTXSuccessToast(tx);
      incrementTX(account ?? '');
    } finally {
      setLoading(false);
      await mutate();
    }
  }, []);

  const onMint = () =>
    showToast(handleOnMint(), {
      loading: t('common.loading', { loading: Number(true) }),
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      width="100%"
      onClick={onMint}
      variant="primary"
      disabled={loading}
      hover={{ bg: 'accent' }}
      bg={!loading ? 'accentActive' : 'disabled'}
      cursor={loading ? 'not-allowed' : 'pointer'}
      color={dark ? 'text' : 'textInverted'}
    >
      {loading ? (
        <Box as="span" display="flex" justifyContent="center">
          <Box as="span" display="inline-block" width="1rem">
            <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography
            as="span"
            variant="normal"
            ml="M"
            fontSize="S"
            textTransform="capitalize"
          >
            {capitalize(t('faucet.mint', { isLoading: +loading }))}
          </Typography>
        </Box>
      ) : (
        capitalize(t('faucet.mint', { isLoading: +loading }))
      )}
    </Button>
  );
};

export default MintButton;
