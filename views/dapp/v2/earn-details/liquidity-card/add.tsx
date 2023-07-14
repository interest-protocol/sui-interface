import { FC } from 'react';

import { useModal } from '@/hooks';

import AddPreviewModal from './add-preview-modal';
import RowTokenField from './row-token-field';
import LiquidityCardWrapper from './wrapper';

const LiquidityCardAdd: FC = () => {
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
    <LiquidityCardWrapper type="add" openPreviewModal={openPreviewModal}>
      {}
      <RowTokenField />
      <RowTokenField />
    </LiquidityCardWrapper>
  );
};

export default LiquidityCardAdd;
