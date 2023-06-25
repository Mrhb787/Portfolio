import React from "react";
import ReactDOM from "react-dom/client";

// App
import App from "./app/App";

// index css
import "./index.css";

import reportWebVitals from "./reportWebVitals";

// Browser Router
import {BrowserRouter as Router} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router basename="/Portfolio">
      <App />
    </Router>
  </React.StrictMode>
);
reportWebVitals();
