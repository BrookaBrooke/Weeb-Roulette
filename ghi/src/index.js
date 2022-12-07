import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./bloat/reportWebVitals";
import {store} from "./store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
=======
    <Provider store={store}>
      < App />
    </Provider>
>>>>>>> 2d793ebd4c29daf20f41baa6ac8f6948c5294ebf
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
