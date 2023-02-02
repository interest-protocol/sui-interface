import BigNumber from 'bignumber.js';
import { useTranslations } from 'next-intl';
import { FC } from 'react';
import Skeleton from 'react-loading-skeleton';
import { v4 } from 'uuid';

import { Box, Button } from '@/elements';
import { LineLoaderSVG } from '@/svg';
import { capitalize } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import AddLiquidityButton from './add-liquidity-button';
import {
  AddLiquidityCardContentProps,
  INPUT_NAMES,
} from './add-liquidity-card.types';
import BalanceError from './balance-error';
import ErrorLiquidityMessage from './error-liquidity-message';

const AddLiquidityCardContent: FC<AddLiquidityCardContentProps> = ({
  tokens,
  control,
  loading,
  refetch,
  setValue,
  setLoading,
  fetchingInitialData,
}) => {
  const t = useTranslations();

  return (
    <>
      <Box mb="L">{loading && <LineLoaderSVG width="100%" />}</Box>
      <ErrorLiquidityMessage control={control} />
      {tokens.map(({ symbol, balance, decimals }, index) => (
        <BalanceError
          key={v4()}
          name={INPUT_NAMES[index]}
          balance={balance
            .decimalPlaces(decimals, BigNumber.ROUND_DOWN)
            .toString()}
          control={control}
          symbol={symbol}
        />
      ))}
      <WalletGuardButton>
        <Box display="grid" gridColumnGap="1rem" gridTemplateColumns="1fr 1fr">
          {fetchingInitialData && (
            <Box width="200%" mx="auto" cursor="pointer">
              <Skeleton height="2rem" width="100%" borderRadius="L" />
            </Box>
          )}
          <>
            <Button
              width="100%"
              variant="neutral"
              disabled={loading}
              onClick={() => {
                setValue('token0Amount', '0.0');
                setValue('token1Amount', '0.0');
                setValue('locked', false);
              }}
            >
              {capitalize(t('common.reset'))}
            </Button>
            <AddLiquidityButton
              refetch={refetch}
              setLoading={setLoading}
              loading={loading || fetchingInitialData}
            />
          </>
        </Box>
      </WalletGuardButton>
    </>
  );
};

export default AddLiquidityCardContent;
