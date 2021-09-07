import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//this compose makes it eaiser to set up what we want
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
import usersReducer from "./Store/usersReducer";

// //this helps ust to set up firebase to used in our action
// //1. use redux firebase as a second parameter inside our create store
// // call it it as a function with the firebase packege we want to use

const store = createStore(usersReducer);

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
    {/* with the help of the <Provider/> we've been able to 
    connect our app to the store with the help of the react-redux*/}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
