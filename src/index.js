import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./App";
import { wheelReducer } from "./Reducers/Reducer";
import "bulma/css/bulma.css";
import "./styles.scss";

const store = createStore(wheelReducer);
const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    {" "}
    <App />
  </Provider>,
  rootElement
);
