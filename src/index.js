import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import { counterReducer } from "./store/reducers";

const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
