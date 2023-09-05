import { FC } from 'react';
import { useForm } from 'react-hook-form';

import { useModal } from '@/hooks';
import { IToken } from '@/views/dapp/dex-pool-details/components/add-liquidity-card/add-liquidity-card.types';

import AddPreviewModal from '../modal/add-preview-modal';
import PoolCardWrapper from '../wrapper';
import AddLiquidityField from './add-liquidity-field';

const AddLiquidityCard: FC<{ token0: IToken; token1: IToken }> = ({
  token0,
  token1,
}) => {
  const { setModal, handleClose } = useModal();

  const { setValue, control, register } = useForm({
    defaultValues: { token0: 0, token1: 0 },
  });

  const openPreviewModal = () => {
    setModal(<AddPreviewModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  return (
    <PoolCardWrapper type="add" action={openPreviewModal}>
      <AddLiquidityField
        name="token0"
        tokens={[token0]}
        control={control}
        setValue={setValue}
        register={register}
        balance={token0.balance}
        decimals={token0.decimals}
      />
      <AddLiquidityField
        name="token1"
        tokens={[token1]}
        control={control}
        setValue={setValue}
        register={register}
        balance={token1.balance}
        decimals={token1.decimals}
      />
    </PoolCardWrapper>
  );
};

export default AddLiquidityCard;
