import { OBJECT_RECORD } from '@interest-protocol/sui-amm-sdk';
import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC, useState } from 'react';

import Button from '@/elements/button';
import { useNetwork, useProvider, useWeb3 } from '@/hooks';
import { capitalize, showToast, showTXSuccessToast } from '@/utils';

import { HarvestButtonProps } from './buttons.types';

const HarvestButton: FC<HarvestButtonProps> = ({
  farm,
  mutatePendingRewards,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);
  const { signTransactionBlock } = useWalletKit();
  const { mutate } = useWeb3();
  const { provider } = useProvider();
  const { network } = useNetwork();

  const harvest = async () => {
    try {
      const objects = OBJECT_RECORD[network];
      setLoading(true);

      const transactionBlock = new TransactionBlock();

      transactionBlock.moveCall({
        target: `${objects.DEX_PACKAGE_ID}::interface::get_rewards`,
        typeArguments: [farm.lpCoin.type],
        arguments: [
          transactionBlock.object(objects.DEX_MASTER_CHEF_STORAGE),
          transactionBlock.object(objects.DEX_MASTER_CHEF_ACCOUNT_STORAGE),
          transactionBlock.object(objects.IPX_STORAGE),
          transactionBlock.object(SUI_CLOCK_OBJECT_ID),
        ],
      });

      const { signature, transactionBlockBytes } = await signTransactionBlock({
        transactionBlock,
      });

      const tx = await provider.executeTransactionBlock({
        signature,
        transactionBlock: transactionBlockBytes,
        requestType: 'WaitForEffectsCert',
        options: { showEffects: true, showEvents: false },
      });

      if (tx?.effects?.status.status === 'success') {
        await showTXSuccessToast(tx, network);
      }
    } finally {
      mutate();
      mutatePendingRewards();
      setLoading(false);
    }
  };

  const handleHarvest = () =>
    showToast(harvest(), {
      success: capitalize(t('common.success')),
      error: propOr(capitalize(t('common.error')), 'message'),
      loading: t('farmsDetails.thirdCardButton', { isLoading: 1 }),
    });

  return (
    <Button
      onClick={handleHarvest}
      variant="primary"
      disabled={farm.pendingRewards.isZero()}
      bg={!farm.pendingRewards.isZero() ? 'success' : 'disabled'}
      cursor={!farm.pendingRewards.isZero() ? 'pointer' : 'not-allowed'}
      nHover={{
        bg: !farm.pendingRewards.isZero() ? 'successActive' : 'disabled',
      }}
    >
      {t('farmsDetails.thirdCardButton', { isLoading: +loading })}
    </Button>
  );
};

export default HarvestButton;
