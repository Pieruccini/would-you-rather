import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import "bootstrap/dist/css/bootstrap.min.css";

const store = createStore(reducers, middleware);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
