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

import { MONEY_MARKET_OBJECTS } from '@/constants/money-market.constants';
import { useNetwork, useProvider } from '@/hooks';
import { FixedPointMath } from '@/lib';
import { throwTXIfNotSuccessful } from '@/utils';
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
      // show success toast/modal??
    } catch {
      // show fail toast/modal??
    } finally {
      setLoading(false);
      await mutate();
    }
  };

  return (
    <Box
      height="8.375rem"
      width={['unset', 'unset', 'unset', 'unset']}
      p="1rem"
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      border={'unset'}
      borderColor={'unset'}
      borderRadius="4px"
      bg={disabled ? 'surface.containerLow' : 'primary.primaryContainer'}
    >
      <Box width="100%">
        <Typography
          variant="medium"
          color="secondary.onSecondaryContainer"
          fontSize="s"
          textAlign="center"
        >
          {t('Lend.claimReward')}
        </Typography>
        <Typography
          variant="small"
          color={dark ? 'white' : 'black'}
          fontSize={['xs', 'xs', 'xs', 'xl']}
          mb="0.875rem"
          textAlign="center"
        >
          {amount} IPX
        </Typography>
        <Button
          onClick={handleGetRewards}
          variant="filled"
          py="0.625rem"
          width="fill-available"
          display="flex"
          justifyContent="center"
          disabled={disabled}
          bg={disabled ? 'surface.containerHighest' : 'primary'}
        >
          {loading ? 'loading...' : t('Lend.claim')}
        </Button>
      </Box>
    </Box>
  );
};

export default RewardsCard;
