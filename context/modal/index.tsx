import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

import Modal from '@/elements/modal';
import { IEmptyObj } from '@/interface';

export interface ModalContext {
  handleClose: () => void;
  setModal: (node: ReactNode) => void;
  setCloseModal: (closeFn: (() => void) | null) => void;
}

const modalContext = createContext({} as ModalContext);

export const ModalProvider: FC<PropsWithChildren<IEmptyObj>> = ({
  children,
}) => {
  const { Provider } = modalContext;
  const [component, setComponent] = useState<ReactNode>(null);
  const [onClose, setOnClose] = useState<(() => void) | null>(null);

  const handleClose = () => {
    setComponent(null);
    onClose?.();
  };

  const value: ModalContext = {
    handleClose,
    setModal: (node) => setComponent(node),
    setCloseModal: (closeFn) => setOnClose(closeFn),
  };

  return (
    <Provider value={value}>
      <Modal
        background="#0004"
        modalProps={{
          isOpen: !!component,
          shouldCloseOnEsc: true,
          onRequestClose: handleClose,
          shouldCloseOnOverlayClick: true,
        }}
      >
        {component}
      </Modal>
      {children}
    </Provider>
  );
};

export default modalContext;
