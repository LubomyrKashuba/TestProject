import React, { createContext, useCallback, useContext, useState } from "react";
import PopupDialog from "../components/popup-dialog/PopupDialog";
import { ConfirmationDialogContext } from "./ConfimContext";

interface ModalContextProps {
  openModal: (component: React.ReactElement) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextProps>({} as ModalContextProps);

const ModalProvider = ({ children }: React.PropsWithChildren) => {
  const [modal, setModal] = useState<React.ReactElement | null>();
  const { openConfirmDialog } = useContext(ConfirmationDialogContext)

  const checkConfirmation = useCallback(() => {
    return new Promise((res) => {
      openConfirmDialog({ sendConfirm: res });
    });
  },[openConfirmDialog]);

  const closeModal = useCallback(async () => {
    if (await checkConfirmation()) {
      setModal(null);
    }
  }, [checkConfirmation]);

  const openModal = useCallback(
    (component: React.ReactElement) => {
      setModal(component);
    },
    [setModal]
  );

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal && <PopupDialog closeModal={closeModal} content={modal} />}
    </ModalContext.Provider>
  );
};

export { ModalProvider, ModalContext };
