import React from "react";
import logo from "../src/Assets/logo.svg";
import AppCss from "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import ItemListContainer from "./components/ItemListContainer.js";

function App() {
  let [name, setName] = React.useState("Lionel");
  let [count, setCount] = React.useState(0);
  function update() {
    setName("Messi");
  }
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="Student" />
      <h1>{name}</h1>
      <h1>{count}</h1>,<button onClick={update}>Change</button>
      <button onClick={() => setCount((count) => count + 1)}> Increase</button>,
    </div>
  );
}

export default App;
