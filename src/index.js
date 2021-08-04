import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import userReducer from "./Store/usersReducer";
import { thunk } from "redux-thunk";
const store = createStore(userReducer, applyMiddleware(thunk));

//promises in javascript
// const promiseForChocomilo = new Promise((resolve, reject) => {
//   const giveChocomilo = true;
//   if (giveChocomilo) {
//     resolve("chocomilo");
//   } else {
//     reject("no chocomilo");
//   }
// });

// promiseForChocomilo
//   .then((res) => {
//     console.log("Awal says " + "" + res);
//   })
//   .catch((err) => {
//     console.log("Awal says " + "" + err);
//   });

//fetch make api calls
// fetch("https://www.mistaboakye.com")
//   .then((res) => res.json())
//   .then((movies) => {
//     console.log(movies);
//   })
//   .catch((err) => console.log(err));

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
