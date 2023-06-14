import { Modal as IUIModal } from '@interest-protocol/ui-kit';
import { ModalProps } from '@interest-protocol/ui-kit/dist/components/modal/modal.types';
import {
  createContext,
  FC,
  PropsWithChildren,
  ReactNode,
  useState,
} from 'react';

import Modal from '@/elements/modal';

export interface ModalContext {
  handleClose: () => void;
  setModal: (node: ReactNode, props?: ModalProps) => void;
}

const modalContext = createContext({} as ModalContext);

export const ModalProvider: FC<PropsWithChildren<{ newDesign?: boolean }>> = ({
  children,
  newDesign,
}) => {
  const { Provider } = modalContext;
  const [component, setComponent] = useState<ReactNode>(null);
  const [modalProps, setModalProps] = useState<Omit<ModalProps, 'isOpen'>>({});

  const handleClose = () => {
    setComponent(null);
    modalProps?.onClose?.();
  };

  const setModal = (node: ReactNode, props = {} as ModalProps) => {
    setComponent(node);
    setModalProps(props);
  };

  const value: ModalContext = {
    setModal,
    handleClose,
  };

  return (
    <Provider value={value}>
      {newDesign ? (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <IUIModal {...modalProps} isOpen={!!component} onClose={handleClose}>
          {component}
        </IUIModal>
      ) : (
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
      )}
      {children}
    </Provider>
  );
};

export default modalContext;
