import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ModalContext } from "./components/context/modal-context";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ModalContext>
      <App />
    </ModalContext>
  </React.StrictMode>
);
