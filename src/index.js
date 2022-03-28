import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// const elem = <h2>Hello, Azaliya!</h2>;
// const elem = React.createElement(
//   "h2",
//   { classname: "greetings" },
//   "Слава Роду!"
// );
const text = "Hello, Azaliya!";
const elem = (
  <div>
    <h2 className="text">{text}</h2>
    <input type="text" />
    <label htmlFor=""></label>
    <button tabIndex="0">ClickMe</button>
  </div>
);
ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  elem,
  document.getElementById("root")
);

reportWebVitals();
