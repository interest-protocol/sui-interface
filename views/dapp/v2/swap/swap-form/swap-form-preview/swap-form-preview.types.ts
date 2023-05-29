export interface SwapFormPreviewModalProps {
  closeModal: () => void;
  openConfirmModal: () => void;
}

export interface SwapFormConfirmModalProps {
  txLink?: string;
  loading: boolean;
  handleClose: () => void;
}
