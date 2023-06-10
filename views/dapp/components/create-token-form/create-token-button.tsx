import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import {
  fromB64,
  normalizeSuiObjectId,
  TransactionBlock,
} from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { prop, propOr } from 'ramda';
import { FC, useState } from 'react';
import { useWatch } from 'react-hook-form';

import { getTokenByteCode } from '@/api/token';
import { GAS_COST, TREASURY } from '@/constants';
import { Box, Button, Typography } from '@/elements';
import { useLocalStorage, useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
import { LoadingSVG } from '@/svg';
import {
  capitalize,
  showToast,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';

import { CreateTokenButtonProps } from './create-token-form.types';

const CreateTokenButton: FC<CreateTokenButtonProps> = ({ control }) => {
  const t = useTranslations();
  const { network } = useNetwork();
  const [loading, setLoading] = useState(false);
  const { name, symbol, amount, iconUrl, description } = useWatch({ control });
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { account, walletAccount } = useWeb3();

  const isValid =
    name &&
    symbol &&
    amount &&
    +amount > 0 &&
    (network === Network.MAINNET ? !!iconUrl : true);

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
        if (!isNaN(+name) || !isNaN(+symbol))
          throw new Error(t('error.createToken'));

        const compiledModulesAndDeps = await getTokenByteCode({
          decimals: 9,
          symbol: symbol.trim().split(' ')[0], // make sure it is one word
          name,
          mintAmount: +amount * 10 ** 9,
          url: iconUrl ? iconUrl : undefined,
          description: description ? description : undefined,
        });

        const transactionBlock = new TransactionBlock();

        const [payment] = transactionBlock.splitCoins(transactionBlock.gas, [
          transactionBlock.pure(1e9),
        ]);

        transactionBlock.transferObjects(
          [payment],
          transactionBlock.pure(TREASURY)
        );

        const [upgradeCap] = transactionBlock.publish({
          modules: compiledModulesAndDeps.modules.map((m: any) =>
            Array.from(fromB64(m))
          ),
          dependencies: compiledModulesAndDeps.dependencies.map(
            (addr: string) => normalizeSuiObjectId(addr)
          ),
        });

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
      }
    } catch (error) {
      throw new Error(propOr(t('error.createToken'), 'message', error));
    } finally {
      setLoading(false);
    }
  };

  const safeCreateToken = () =>
    showToast(createToken(), {
      loading: `${t('createToken.button', { isLoading: 1 })}`,
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
            {t('createToken.button', { isLoading: 1 })}
          </Typography>
        </Box>
      ) : (
        t('createToken.button', { isLoading: 0 })
      )}
    </Button>
  );
};

export default CreateTokenButton;
