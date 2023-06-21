import { COIN_TYPE, Network } from '@interest-protocol/sui-sdk';
import { Button, ProgressIndicator } from '@interest-protocol/ui-kit';
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
import { useLocalStorage, useNetwork, useWeb3 } from '@/hooks';
import { LocalTokenMetadataRecord } from '@/interface';
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
  const [loading, setLoading] = useState(true);
  const { account, walletAccount } = useWeb3();
  const { signAndExecuteTransactionBlock } = useWalletKit();
  const { name, symbol, amount, iconUrl, description } = useWatch({ control });

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
          chain: walletAccount?.chains[0] || network,
          options: { showBalanceChanges: true, showEffects: true },
        });

        throwTXIfNotSuccessful(tx);

        await showTXSuccessToast(tx, network);

        const data = tx?.balanceChanges?.filter(
          (data) => data.coinType !== COIN_TYPE[network].SUI
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
      px="2xl"
      mx="auto"
      size="small"
      fontSize="s"
      variant="filled"
      onClick={safeCreateToken}
      disabled={loading || !isValid}
      PrefixIcon={
        loading ? <ProgressIndicator variant="loading" size={16} /> : null
      }
    >
      {t('createToken.button', { isLoading: Number(loading) })}
    </Button>
  );
};

export default CreateTokenButton;
