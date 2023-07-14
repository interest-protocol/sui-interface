export interface LiquidityCardWrapperProps {
  type: 'add' | 'remove';
  disabled?: boolean;
  openPreviewModal: () => void;
}

export interface AddPreviewModalProps {
  handleClose: () => void;
}
