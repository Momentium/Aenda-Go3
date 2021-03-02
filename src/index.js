import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StylesProvider } from "@material-ui/core/styles";
import GlobalStyle from "./styles/globalStyles";

// document.documentElement.addEventListener(
//   "touchstart",
//   function (event) {
//     if (event.touches.length > 1) {
//       event.preventDefault();
//     }
//   },
//   false
// );
// let lastTouchEnd = 0;
// document.documentElement.addEventListener(
//   "touchend",
//   function (event) {
//     let now = new Date().getTime();
//     if (now - lastTouchEnd <= 300) {
//       event.preventDefault();
//     }
//     lastTouchEnd = now;
//   },
//   false
// );

ReactDOM.render(
  <StylesProvider injectFirst>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </StylesProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
