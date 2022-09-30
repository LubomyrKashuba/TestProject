import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  IconButton,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ConfirmModalPropsI {
    open: boolean,
    onConfirm: () => void,
    onDismiss: () => void
}

export const styles = {
  root: {
    minWidth: "400px",
  },
  icon: {
    position: "absolute",
    right: 16,
    top: 16,
    p: 0,
  },
  title: {
    p: "13px 16px",
  },
  content: {
    p: 2,
  },
  actions: {
    p: "12px",
  },
};

const ConfirmDialog: React.FC<ConfirmModalPropsI> = ({ open, onConfirm, onDismiss }) => {
  return (
    <Dialog PaperProps={{ sx: styles.root }} onClose={onDismiss} open={open}>
      <Typography sx={styles.title} variant="h6">
        Confirmation
      </Typography>
      <IconButton onClick={onDismiss} sx={styles.icon}>
        <CloseIcon />
      </IconButton>
      <DialogContent dividers sx={styles.content}>
        <Typography variant="subtitle1">Do you realy want to leave?</Typography>
      </DialogContent>
      <DialogActions sx={styles.actions}>
        <Button onClick={onConfirm} size="large" variant="contained">
          yes
        </Button>
        <Button onClick={onDismiss} size="large" variant="contained">
          no
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ConfirmDialog;
