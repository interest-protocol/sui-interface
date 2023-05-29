export interface ModalContentProps {
  message: string;
}

export interface ModalLendingProps extends ModalPreviewProps {
  type: 'borrow' | 'repay';
  handleClosed: () => void;
  backToLend: () => void;
  closed: boolean;
}

export interface ModalPreviewProps {
  amount: string;
}
