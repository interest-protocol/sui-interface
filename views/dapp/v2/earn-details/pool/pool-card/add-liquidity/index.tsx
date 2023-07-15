import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';

import { COINS } from '@/constants';
import { useModal } from '@/hooks';

import RowTokenField from '../../../components/row-token-field';
import RemovePreviewModal from '../modal/remove-preview-modal';
import LiquidityCardWrapper from '../wrapper';

const AddLiquidityCard: FC = () => {
  const { setModal, handleClose } = useModal();

  const openPreviewModal = () => {
    setModal(<RemovePreviewModal handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: true,
    });
  };

  return (
    <LiquidityCardWrapper type="add" action={openPreviewModal}>
      {}
      <RowTokenField
        balance="0.12345"
        amount="0.345"
        coins={[COINS[Network.TESTNET].BNB]}
      />
      <RowTokenField
        balance="0.12345"
        amount="0.345"
        coins={[COINS[Network.TESTNET].ETH]}
      />
    </LiquidityCardWrapper>
  );
};

export default AddLiquidityCard;
