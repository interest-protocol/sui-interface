import { Network } from '@interest-protocol/sui-amm-sdk';
import { FC } from 'react';

import { COINS } from '@/constants';
import { useModal } from '@/hooks';

import RowTokenField from '../../../components/row-token-field';
import RemovePreviewModal from '../modal/remove-preview-modal';
import PoolCardWrapper from '../wrapper';
import TokenDescription from './token-description';

const RemoveLiquidityCard: FC = () => {
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
    <PoolCardWrapper type="remove" action={openPreviewModal}>
      <RowTokenField
        balance="0.12345"
        amount="0.345"
        coins={[COINS[Network.TESTNET].ETH, COINS[Network.TESTNET].BNB]}
      />
      <TokenDescription coin={COINS[Network.TESTNET].BNB} amount="0.432" />
      <TokenDescription coin={COINS[Network.TESTNET].ETH} amount="0.432" />
    </PoolCardWrapper>
  );
};

export default RemoveLiquidityCard;
