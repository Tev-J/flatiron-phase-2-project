import React from "react";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "semantic-ui-css/semantic.min.css";
import "./index.css";

const rootElement = document.getElementById("root");

createRoot(rootElement).render(
  // Use createRoot instead of ReactDOM.render
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
