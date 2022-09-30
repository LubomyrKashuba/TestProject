import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const styles = {
  box: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height:"100%",
  },
  contentWraper: { overflowY: "auto" },
  icon: {
    position: "absolute",
    right:"20px",
    top:"20px",
  },
};

interface PopupDialogI {
    content: React.ReactElement,
    closeModal: () => void
}

const PopupDialog = ({ content, closeModal }: PopupDialogI) => {

  const onClose = () => {
    closeModal();
  };

  return (
    <Dialog maxWidth="xl" onClose={onClose} open>
      <Box sx={styles.box}>
        <IconButton onClick={onClose} sx={styles.icon}>
          <CloseIcon />
        </IconButton>
        <Box sx={styles.contentWraper}>{content}</Box>
      </Box>
    </Dialog>
  );
};

export default PopupDialog;
