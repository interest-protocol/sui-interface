import { useTranslations } from 'next-intl';
import { FC } from 'react';
import { v4 } from 'uuid';

import { Box, Button } from '@/elements';
import { FixedPointMath } from '@/sdk';
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
  refetch,
  setValue,
  getValues,
  fetchingInitialData,
}) => {
  const t = useTranslations();

  return (
    <>
      <ErrorLiquidityMessage control={control} />
      {tokens.map(({ symbol, balance, decimals }, index) => (
        <BalanceError
          key={v4()}
          name={INPUT_NAMES[index]}
          balance={FixedPointMath.toNumber(balance, decimals).toString()}
          control={control}
          symbol={symbol}
        />
      ))}
      <WalletGuardButton>
        <Box
          mt="L"
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns="1fr 1fr"
        >
          <Button
            width="100%"
            variant="neutral"
            disabled={fetchingInitialData}
            onClick={() => {
              setValue('token0Amount', '0.0');
              setValue('token1Amount', '0.0');
              setValue('token0InputLocked', false);
              setValue('token1InputLocked', false);
            }}
          >
            {capitalize(t('common.reset'))}
          </Button>
          <AddLiquidityButton
            tokens={tokens}
            refetch={refetch}
            getValues={getValues}
          />
        </Box>
      </WalletGuardButton>
    </>
  );
};

export default AddLiquidityCardContent;
