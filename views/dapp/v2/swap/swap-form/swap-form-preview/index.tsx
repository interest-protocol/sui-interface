import { Button } from '@interest-protocol/ui-kit';
import { useTranslations } from 'next-intl';
import { path, pathOr } from 'ramda';
import { FC } from 'react';
import { useWatch } from 'react-hook-form';

import { useModal } from '@/hooks';

import SwapFormConfirmModal from './swap-form-confirm-modal';
import SwapFormFailModal from './swap-form-fail-modal';
import { SwapFormPreviewProps } from './swap-form-preview.types';
import SwapFormPreviewModal from './swap-form-preview-modal';

const SwapFormPreview: FC<SwapFormPreviewProps> = ({
  mutate,
  formSwap,
  dexMarket,
  formSettings,
}) => {
  const { setModal, handleClose } = useModal();
  const t = useTranslations();
  const formValues = useWatch({ control: formSwap.control });

  const isDisabled =
    !path(['to', 'type'], formValues) ||
    !path(['from', 'type'], formValues) ||
    !+pathOr(0, ['to', 'value'], formValues) ||
    !+pathOr(0, ['from', 'value'], formValues) ||
    formValues.disabled;

  const openFailModal = (message?: string) =>
    setModal(
      <SwapFormFailModal message={message} handleClose={handleClose} />,
      {
        isOpen: true,
        custom: true,
        opaque: false,
        allowClose: false,
      }
    );

  const openConfirmModal = (link: string) =>
    setModal(<SwapFormConfirmModal txLink={link} handleClose={handleClose} />, {
      isOpen: true,
      custom: true,
      opaque: false,
      allowClose: false,
    });

  const openPreviewModal = () => {
    if (isDisabled) return;

    setModal(
      <SwapFormPreviewModal
        mutate={mutate}
        formSwap={formSwap}
        dexMarket={dexMarket}
        closeModal={handleClose}
        formSettings={formSettings}
        openFailModal={openFailModal}
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
  };

  return (
    <Button
      mx="auto"
      size="small"
      variant="filled"
      disabled={isDisabled}
      boxSizing="border-box"
      justifyContent="center"
      mt={['4xl', '4xl', '2xl']}
      width={['100%', '100%', 'auto']}
      onClick={isDisabled ? undefined : openPreviewModal}
    >
      {t('swap.form.preview')}
    </Button>
  );
};
export default SwapFormPreview;
