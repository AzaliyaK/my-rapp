import React from "react";
import { Component, StrictMode } from "react";

import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           HI! Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const Header = () => {
  return <h2>Hello, Azaliya!</h2>;
};

const Field = () => {
  const holder = "Введите данные";
  const styledField = {
    width: "300px",
  };
  return <input placeholder={holder} type="text" style={styledField} />;
};

class Field1 extends React.Component {
  render() {
    const holder = "Имя";
    const styledField = {
      width: "100px",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

class Field2 extends Component {
  render() {
    const holder = "Телефон";
    const styledField = {
      width: "100px",
    };
    return <input placeholder={holder} type="text" style={styledField} />;
  }
}

function Btn() {
  const text = "Log in";
  const logged = true;
  return <button>{logged ? "Enter" : text}</button>;
}

function Btn1() {
  const res = () => {
    return "Log out";
  };
  return <button>{res()}</button>;
}

function Btn2() {
  const p = <p>Edit</p>;
  return <button>{p}</button>;
}

function App() {
  return (
    <div className="App">
      <StrictMode>
        <Header />
      </StrictMode>
      <Field />
      <Field1 />
      <Field2 />
      <Btn />
      <Btn1 />
      <Btn2 />
    </div>
  );
}

export { Header };
export default App;
