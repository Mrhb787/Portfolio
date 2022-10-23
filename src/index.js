import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

// Global Css
import "./index.css";

// Routing
import {BrowserRouter} from "react-router-dom";

// component
import App from "./Components/App/App";
import {SnackbarProvider} from "notistack";
import {HelmetProvider} from "react-helmet-async";
import {CurrentUserProvider} from "./Context/userContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentUserProvider>
        <SnackbarProvider maxSnack={3}>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </SnackbarProvider>
      </CurrentUserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
