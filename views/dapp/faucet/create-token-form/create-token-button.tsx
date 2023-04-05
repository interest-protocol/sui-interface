import {
  fromB64,
  normalizeSuiObjectId,
  TransactionBlock,
} from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { prop } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { incrementCreatedCoins } from '@/api/analytics';
import { getTokenByteCode } from '@/api/token';
import { COIN_TYPE, GAS_COST, Network } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useLocalStorage, useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
import { AddressZero } from '@/sdk';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';

import { CreateTokenButtonProps } from './create-token-form.types';

const CreateTokenButton: FC<CreateTokenButtonProps> = ({
  control,
  handleCloseModal,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState(false);
  const { name, symbol, amount } = useWatch({ control });
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { account, walletAccount } = useWeb3();
  const isValid = name && symbol && amount && +amount > 0;
  const { network } = useNetwork();

  const [localTokens, setLocalTokens] =
    useLocalStorage<LocalTokenMetadataRecord>(
      'sui-interest-tokens-metadata',
      {}
    );

  const createToken = async () => {
    try {
      setLoading(true);

      if (!account) throw new Error(t('error.accountNotFound'));
      if (isValid) {
        const compiledModulesAndDeps = await getTokenByteCode({
          decimals: 9,
          symbol: symbol.trim().split(' ')[0], // make sure it is one word
          name,
          mintAmount: +amount * 10 ** 9,
        });

        const transactionBlock = new TransactionBlock();

        const [upgradeCap] = transactionBlock.publish(
          compiledModulesAndDeps.modules.map((m: any) =>
            Array.from(fromB64(m))
          ),
          compiledModulesAndDeps.dependencies.map((addr: string) =>
            normalizeSuiObjectId(addr)
          )
        );

        transactionBlock.transferObjects(
          [upgradeCap],
          transactionBlock.pure(account)
        );

        transactionBlock.setGasBudget(GAS_COST[network]);

        const tx = await signAndExecuteTransactionBlock({
          transactionBlock,
          chain: walletAccount?.chains[0] || Network.DEVNET,
          options: { showBalanceChanges: true, showEffects: true },
        });

        throwTXIfNotSuccessful(tx);

        await showTXSuccessToast(tx, network);

        const data = tx?.balanceChanges?.filter(
          (data) => data.coinType !== COIN_TYPE[Network.DEVNET].SUI
        );

        if (data && data.length)
          setLocalTokens({
            ...localTokens,
            [data[0].coinType]: {
              type: data[0].coinType,
              symbol,
              decimals: 9,
            },
          });
        await incrementCreatedCoins(account || AddressZero);
      }
    } catch (error) {
      throw new Error(t('faucet.errorCreateToken'));
    } finally {
      setLoading(false);
      handleCloseModal();
    }
  };

  const safeCreateToken = () =>
    showToast(createToken(), {
      loading: `${t('faucet.modalButton', { isLoading: 1 })}`,
      success: capitalize(t('common.success')),
      error: prop('message'),
    });

  return (
    <Button
      mt="L"
      width="100%"
      variant="primary"
      onClick={safeCreateToken}
      disabled={loading || !isValid}
    >
      {loading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          <Box as="span" display="inline-block" width="1rem">
            <LoadingSVG width="100%" maxHeight="1rem" maxWidth="1rem" />
          </Box>
          <Typography
            fontSize="S"
            variant="normal"
            ml="M"
            textTransform="capitalize"
          >
            {t('faucet.modalButton', { isLoading: 1 })}
          </Typography>
        </Box>
      ) : (
        t('faucet.modalButton', { isLoading: 0 })
      )}
    </Button>
  );
};

export default CreateTokenButton;
