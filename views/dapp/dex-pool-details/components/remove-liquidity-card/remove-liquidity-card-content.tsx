import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { Box, Button } from '@/elements';
import { capitalize } from '@/utils';
import { WalletGuardButton } from '@/views/dapp/components';

import ApproveButton from './approve-button';
import LinearLoader from './linear-loader';
import RemoveLiquidityButton from './remove-liquidity-button';
import { RemoveLiquidityCardContentProps } from './remove-liquidity-card.types';
import TokenAmount from './token-amount';

const RemoveLiquidityCardContent: FC<RemoveLiquidityCardContentProps> = ({
  tokens,
  lpAllowance,
  isFetchingInitialData,
  setValue,
  control,
}) => {
  const t = useTranslations();

  return (
    <>
      <LinearLoader control={control} />
      <Box
        my="L"
        rowGap="1rem"
        display="grid"
        gridTemplateColumns="auto auto 1fr"
      >
        <TokenAmount
          Icon={tokens[0].Icon}
          symbol={tokens[0].symbol}
          control={control}
          name="token0Amount"
          isFetchingInitialData={isFetchingInitialData}
        />
        <TokenAmount
          Icon={tokens[1].Icon}
          symbol={tokens[1].symbol}
          control={control}
          name="token1Amount"
          isFetchingInitialData={isFetchingInitialData}
        />
      </Box>
      <WalletGuardButton>
        <Box
          mt="L"
          display="grid"
          gridColumnGap="1rem"
          gridTemplateColumns={lpAllowance == '0 ' ? '1fr' : '1fr 1fr'}
        >
          {lpAllowance == '0' ? (
            <ApproveButton
              control={control}
              symbol0={tokens[0].symbol}
              symbol1={tokens[1].symbol}
            />
          ) : (
            <>
              <Button
                width="100%"
                variant="primary"
                bg="bottomBackground"
                hover={{ bg: 'disabled' }}
                onClick={() => {
                  setValue('lpAmount', '0.0');
                }}
              >
                {capitalize(t('common.reset'))}
              </Button>
              <RemoveLiquidityButton control={control} disabled={false} />
            </>
          )}
        </Box>
      </WalletGuardButton>
    </>
  );
};

export default RemoveLiquidityCardContent;
