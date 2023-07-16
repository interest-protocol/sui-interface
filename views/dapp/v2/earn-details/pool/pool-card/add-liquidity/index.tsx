import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';

import { COINS } from '@/constants';
import { useModal } from '@/hooks';

import RowTokenField from '../../../components/row-token-field';
import AddPreviewModal from '../modal/add-preview-modal';
import PoolCardWrapper from '../wrapper';

const AddLiquidityCard: FC = () => {
  const { setModal, handleClose } = useModal();

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
    </PoolCardWrapper>
  );
};

export default AddLiquidityCard;
