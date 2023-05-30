import { Button } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { FC } from 'react';

import { useModal } from '@/hooks';

import SwapFormConfirmModal from './swap-form-confirm-modal';
import SwapFormPreviewModal from './swap-form-preview-modal';

const SwapFormPreview: FC = () => {
  const { setModal, handleClose } = useModal();
  const t = useTranslations();

  const openConfirmModal = () =>
    setModal(
      <SwapFormConfirmModal
        txLink="link"
        loading={true}
        handleClose={handleClose}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );

  const openPreviewModal = () =>
    setModal(
      <SwapFormPreviewModal
        closeModal={handleClose}
        openConfirmModal={openConfirmModal}
      />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: true,
        onClose: handleClose,
      }
    );

  return (
    <Button
      mx="auto"
      size="small"
      variant="filled"
      boxSizing="border-box"
      justifyContent="center"
      mt={['4xl', '4xl', '2xl']}
      onClick={openPreviewModal}
      width={['100%', '100%', 'auto']}
    >
      {t('swap.swapForm.preview')}
    </Button>
  );
};
export default SwapFormPreview;
