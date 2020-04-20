import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import App from "./components/App";
import reducers from "./reducers";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(reducers, composeWithDevTools(middleware));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
