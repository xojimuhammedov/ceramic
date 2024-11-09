import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import "./i18n.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastContainer />
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <Suspense fallback="loading">
          <App />
        </Suspense>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
