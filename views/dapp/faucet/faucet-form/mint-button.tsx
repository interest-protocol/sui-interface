import { useTheme } from '@emotion/react';
import {
  isValidSuiAddress,
  SUI_TYPE_ARG,
  TransactionBlock,
} from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { pathOr, prop } from 'ramda';
import { useState } from 'react';
import { FC } from 'react';

import { incrementTX } from '@/api/analytics';
import { COIN_TYPE, Network, OBJECT_RECORD } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';

import { MintButtonProps } from './faucet-form.types';

const COIN_MINT_AMOUNT = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: '10000000000',
    [COIN_TYPE[Network.DEVNET].ETH]: '5000000000',
    [COIN_TYPE[Network.DEVNET].BTC]: '5000000000',
    [COIN_TYPE[Network.DEVNET].USDT]: '1000000000000',
    [COIN_TYPE[Network.DEVNET].USDC]: '1000000000000',
  } as Record<string, string>,
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: '10000000000',
    [COIN_TYPE[Network.TESTNET].ETH]: '5000000000',
    [COIN_TYPE[Network.TESTNET].BTC]: '5000000000',
    [COIN_TYPE[Network.TESTNET].USDT]: '1000000000000',
    [COIN_TYPE[Network.TESTNET].USDC]: '1000000000000',
  } as Record<string, string>,
};

const COIN_TYPE_TO_STORAGE = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]:
      OBJECT_RECORD[Network.DEVNET].FAUCET_BNB_STORAGE,
    [COIN_TYPE[Network.DEVNET].ETH]:
      OBJECT_RECORD[Network.DEVNET].FAUCET_ETH_STORAGE,
    [COIN_TYPE[Network.DEVNET].BTC]:
      OBJECT_RECORD[Network.DEVNET].FAUCET_BTC_STORAGE,
    [COIN_TYPE[Network.DEVNET].USDT]:
      OBJECT_RECORD[Network.DEVNET].FAUCET_USDT_STORAGE,
    [COIN_TYPE[Network.DEVNET].USDC]:
      OBJECT_RECORD[Network.DEVNET].FAUCET_USDC_STORAGE,
  } as Record<string, string>,
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]:
      OBJECT_RECORD[Network.TESTNET].FAUCET_BNB_STORAGE,
    [COIN_TYPE[Network.TESTNET].ETH]:
      OBJECT_RECORD[Network.TESTNET].FAUCET_ETH_STORAGE,
    [COIN_TYPE[Network.TESTNET].BTC]:
      OBJECT_RECORD[Network.TESTNET].FAUCET_BTC_STORAGE,
    [COIN_TYPE[Network.TESTNET].USDT]:
      OBJECT_RECORD[Network.TESTNET].FAUCET_USDT_STORAGE,
    [COIN_TYPE[Network.TESTNET].USDC]:
      OBJECT_RECORD[Network.TESTNET].FAUCET_USDC_STORAGE,
  } as Record<string, string>,
};

const COIN_TYPE_TO_CORE_NAME = {
  [Network.DEVNET]: {
    [COIN_TYPE[Network.DEVNET].BNB]: 'ibnb',
    [COIN_TYPE[Network.DEVNET].ETH]: 'ieth',
    [COIN_TYPE[Network.DEVNET].BTC]: 'ibtc',
    [COIN_TYPE[Network.DEVNET].USDT]: 'iusdt',
    [COIN_TYPE[Network.DEVNET].USDC]: 'iusdc',
  } as Record<string, string>,
  [Network.TESTNET]: {
    [COIN_TYPE[Network.TESTNET].BNB]: 'ibnb',
    [COIN_TYPE[Network.TESTNET].ETH]: 'ieth',
    [COIN_TYPE[Network.TESTNET].BTC]: 'ibtc',
    [COIN_TYPE[Network.TESTNET].USDT]: 'iusdt',
    [COIN_TYPE[Network.TESTNET].USDC]: 'iusdc',
  } as Record<string, string>,
};

const MintButton: FC<MintButtonProps> = ({ getValues }) => {
  const t = useTranslations();
  const { dark } = useTheme() as { dark: boolean };
  const [loading, setLoading] = useState(false);
  const { signTransactionBlock } = useWalletKit();
  const { account, mutate } = useWeb3();
  const { network } = useNetwork();
  const { provider } = useProvider();

  const handleOnMint = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      setLoading(true);
      const type = getValues('type');

      if (!type) throw new Error(t('error.tokenNotFound'));

      if (type === SUI_TYPE_ARG) {
        if (!account || !isValidSuiAddress(account))
          throw new Error(t('error.accountNotFound'));
        await provider.requestSuiFromFaucet(account);
        return;
      }

      const transactionBlock = new TransactionBlock();

      transactionBlock.moveCall({
        target: `${objects.FAUCET_PACKAGE_ID}::${COIN_TYPE_TO_CORE_NAME[network][type]}::get`,
        arguments: [
          transactionBlock.object(COIN_TYPE_TO_STORAGE[network][type]),
          transactionBlock.pure(pathOr('1', [network, type], COIN_MINT_AMOUNT)),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
          showEvents: false,
          showInput: false,
          showBalanceChanges: false,
          showObjectChanges: false,
        },
      });

      throwTXIfNotSuccessful(tx);

      await showTXSuccessToast(tx, network);
      incrementTX(account ?? '');
    } finally {
      setLoading(false);
      await mutate();
    }
  };

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
      nHover={{ bg: 'accent' }}
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
