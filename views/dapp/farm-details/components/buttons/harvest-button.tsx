import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { propOr } from 'ramda';
import { FC, useState } from 'react';

import {
  FARMS_PACKAGE_ID,
  IPX_ACCOUNT_STORAGE,
  IPX_STORAGE,
} from '@/constants';
import Button from '@/elements/button';
import { useWeb3 } from '@/hooks';
import { capitalize, showToast, showTXSuccessToast, sleep } from '@/utils';

import { HarvestButtonProps } from './buttons.types';

const HarvestButton: FC<HarvestButtonProps> = ({
  farm,
  mutatePendingRewards,
}) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);
  const { signAndExecuteTransaction } = useWalletKit();
  const { mutate } = useWeb3();

  const harvest = async () => {
    try {
      setLoading(true);

      const tx = await signAndExecuteTransaction({
        kind: 'moveCall',
        data: {
          function: 'get_rewards',
          gasBudget: 15000,
          module: 'interface',
          packageObjectId: FARMS_PACKAGE_ID,
          typeArguments: [farm.lpCoin.type],
          arguments: [IPX_STORAGE, IPX_ACCOUNT_STORAGE],
        },
      });
      await showTXSuccessToast(tx);
    } finally {
      await sleep(2000);
      await Promise.all([mutatePendingRewards(0n), mutate()]);
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
      hover={{
        bg: !farm.pendingRewards.isZero() ? 'successActive' : 'disabled',
      }}
    >
      {t('farmsDetails.thirdCardButton', { isLoading: +loading })}
    </Button>
  );
};

export default HarvestButton;
