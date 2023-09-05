import BigNumber from 'bignumber.js';
import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useModal } from '@/hooks';
import { IToken } from '@/views/dapp/dex-pool-details/components/add-liquidity-card/add-liquidity-card.types';

import RemovePreviewModal from '../modal/remove-preview-modal';
import PoolCardWrapper from '../wrapper';
import RemoveLiquidityField from './remove-liquidity-field';
import TokenDescription from './token-description';

const RemoveLiquidityCard: FC<{
  tokens: [Omit<IToken, 'balance'>, Omit<IToken, 'balance'>];
  balance: BigNumber;
  decimals: number;
}> = ({ tokens, balance, decimals }) => {
  const { setModal, handleClose } = useModal();
  const { setValue, control, register } = useForm({
    defaultValues: { lpCoin: '0' },
  });

  const openPreviewModal = () => {
    setModal(<RemovePreviewModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  return (
    <PoolCardWrapper type="remove" action={openPreviewModal}>
      <RemoveLiquidityField
        tokens={tokens}
        balance={balance}
        control={control}
        decimals={decimals}
        register={register}
        setValue={setValue}
      />
      <TokenDescription coin={tokens[0]} amount="0.432" />
      <TokenDescription coin={tokens[0]} amount="0.432" />
    </PoolCardWrapper>
  );
};

export default RemoveLiquidityCard;
