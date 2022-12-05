import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./bloat/reportWebVitals";
import Card from "./Cads/Cards";
import { store } from '/app/src/store/store'
import { Provider } from 'react-redux'

// import "../node_modules/react-bootstrap/dist/css/bootstrap";

const root = ReactDOM.createRoot(document.getElementById("root"));
// const root = ReactDOM.createRoot(Card.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
