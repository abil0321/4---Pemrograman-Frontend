import { Provider } from "react-redux";
import store from "./store";

import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// get root element
const container = document.getElementById("root");

// create root
const root = ReactDOM.createRoot(container);

// render app to root
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

reportWebVitals();
