import {
  Box,
  Button,
  Theme,
  Typography,
  useTheme,
} from '@interest-protocol/ui-kit';
import { SUI_CLOCK_OBJECT_ID, TransactionBlock } from '@mysten/sui.js';
import { useWalletKit } from '@mysten/wallet-kit';
import { useTranslations } from 'next-intl';
import { FC, useState } from 'react';
import { toast } from 'react-hot-toast';

import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/lib';
import {
  formatMoney,
  showTXSuccessToast,
  throwTXIfNotSuccessful,
} from '@/utils';
import { useLendProviderValue } from '@/views/dapp/v2/lend/lend.provider';

const RewardsCard: FC = () => {
  const t = useTranslations();
  const { dark } = useTheme() as Theme;
  const [loading, setLoading] = useState(false);

  const { marketRecord, mutate } = useLendProviderValue();
  const { network } = useNetwork();
  const { signTransactionBlock } = useWalletKit();
  const { provider } = useProvider();

  const amount = Object.values(marketRecord).reduce((acc, market) => {
    const totalRewards = market.userCollateralPendingRewards.plus(
      market.userLoanPendingRewards
    );

    // IPX has 9 decimals
    return acc + FixedPointMath.toNumber(totalRewards);
  }, 0);

  const disabled = amount === 0 || loading;

  const handleGetRewards = async () => {
    setLoading(true);

    const objects = MONEY_MARKET_OBJECTS[network];

    try {
      const txb = new TransactionBlock();

      txb.moveCall({
        target: `${objects.MONEY_MARKET_PACKAGE_ID}::ipx_money_market_sdk_interface::get_all_rewards`,
        arguments: [
          txb.object(objects.MONEY_MARKET_STORAGE),
          txb.object(objects.INTEREST_RATE_STORAGE),
          txb.object(objects.IPX_STORAGE),
          txb.object(SUI_CLOCK_OBJECT_ID),
        ],
      });

      const { transactionBlockBytes, signature } = await signTransactionBlock({
        transactionBlock: txb,
      });

      const tx = await provider.executeTransactionBlock({
        transactionBlock: transactionBlockBytes,
        signature,
        options: {
          showEffects: true,
        },
      });

      throwTXIfNotSuccessful(tx);

      showTXSuccessToast(tx, network);
    } catch {
      throw new Error('error translation key'); // TODO: add right error key
    } finally {
      setLoading(false);
      await mutate();
    }
  };

  const onGetRewards = () =>
    toast.promise(handleGetRewards(), {
      // TODO: add translations
      success: 'success',
      error: 'error',
      loading: 'loading...',
    });

  return (
    <Box
      p="m"
      display="flex"
      borderRadius="m"
      flexDirection="column"
      justifyContent="space-between"
      bg={disabled ? 'surface.containerLow' : 'primary.primaryContainer'}
    >
      <Box width="100%">
        <Typography
          variant="medium"
          color="secondary.onSecondaryContainer"
          fontSize="s"
          textAlign="center"
        >
          {t('lend.claimReward')}
        </Typography>
        <Typography
          mb="0.875rem"
          variant="small"
          color={dark ? 'white' : 'black'}
          fontSize={['xs', 'xs', 'xs', 'xl']}
          textAlign="center"
        >
          {formatMoney(amount)} IPX
        </Typography>
        <Button
          py="s"
          display="flex"
          variant="filled"
          disabled={disabled}
          width="fill-available"
          justifyContent="center"
          onClick={disabled ? undefined : onGetRewards}
          bg={disabled ? 'surface.containerHighest' : 'primary'}
        >
          {loading ? 'loading...' : t('lend.claim')}
        </Button>
      </Box>
    </Box>
  );
};

export default RewardsCard;
