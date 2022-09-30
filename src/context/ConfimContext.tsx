import { createContext, useState } from "react";
import ConfirmDialog from "../components/confirm-dialog/ConfirmDialog";

interface OpenConfirmArgs {
  sendConfirm: (arg0: boolean) => void;
}

interface ConfirmContextProps {
  openConfirmDialog: ({ sendConfirm }: OpenConfirmArgs) => void;
}

export const ConfirmationDialogContext = createContext<ConfirmContextProps>(
  {} as ConfirmContextProps
);

export const ConfirmationDialogProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogConfig, setDialogConfig] = useState<OpenConfirmArgs>();

  const openConfirmDialog = ({ sendConfirm }: OpenConfirmArgs) => {
    setDialogOpen(true);
    setDialogConfig({ sendConfirm });
  };

  const onConfirm = () => {
    dialogConfig?.sendConfirm(true);
    setDialogOpen(false);
  };

  const onDismiss = () => {
    dialogConfig?.sendConfirm(false);
    setDialogOpen(false);
  };

  return (
    <ConfirmationDialogContext.Provider value={{ openConfirmDialog }}>
      <ConfirmDialog
        onConfirm={onConfirm}
        onDismiss={onDismiss}
        open={dialogOpen}
      />
      {children}
    </ConfirmationDialogContext.Provider>
  );
};
