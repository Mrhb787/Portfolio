import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Global Css
import "./index.css";

// Routing
import {BrowserRouter} from "react-router-dom";

// component
import App from "./App/App";
import {SnackbarProvider} from "notistack";
import {HelmetProvider} from "react-helmet-async";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SnackbarProvider maxSnack={3}>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </SnackbarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
