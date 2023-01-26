import React from "react";
// allows us to interact with the DOM in the browser
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// render() takes two things first the element and seond where you want to insert it
//here app component is the root
// ReactDOM.render(
//     // it active some additonal checks and warnigs
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
