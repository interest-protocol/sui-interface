import modalContext, { ModalContext } from 'context/modal';
import { useContext } from 'react';

export const useModal = (): ModalContext => useContext(modalContext);
