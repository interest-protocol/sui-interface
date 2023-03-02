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
import { capitalize, showToast, showTXSuccessToast } from '@/utils';

import { HarvestButtonProps } from './buttons.types';

const HarvestButton: FC<HarvestButtonProps> = ({ farm, refetch }) => {
  const t = useTranslations();
  const [loading, setLoading] = useState<boolean>(false);
  const { signAndExecuteTransaction } = useWalletKit();

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
      await refetch();
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
