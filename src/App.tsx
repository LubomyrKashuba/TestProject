import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppHeader from "./components/header/AppHeader";
import AppRoute from "./router/AppRoute";
import "./index.css";
import { Container } from "@mui/material";
import { ModalProvider } from "./context/ModalContext";
import { ConfirmationDialogProvider } from "./context/ConfimContext";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ConfirmationDialogProvider>
        <ModalProvider>
          <AppHeader />
          <Container>
            <AppRoute />
          </Container>
        </ModalProvider>
      </ConfirmationDialogProvider>
    </BrowserRouter>
  );
};

export default App;
