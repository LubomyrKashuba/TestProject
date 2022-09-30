import { Box, CircularProgress } from "@mui/material";
import React from "react";

const Loader: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "90vh",
        width: "100%",
      }}
    >
      <CircularProgress size={100} />
    </Box>
  );
};

export default Loader;
