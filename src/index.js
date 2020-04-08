import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";

//TODO: add middleware
const store = createStore(reducers);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
