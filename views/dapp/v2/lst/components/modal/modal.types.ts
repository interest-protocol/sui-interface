export interface HeaderModalProps {
  handleClose: () => void;
}

export interface FormModalProps {
  handleClose: () => void;
  onClick: () => void;
  labels: { description: string; button?: string };
}

export interface ViewInExplorerLinkProps {
  viewInExplorerLink: string;
}
