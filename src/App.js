import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import AppCss from "../src/App.css";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/Utils/ItemCount";

function App() {
  // let [name, setName] = React.useState("Lionel");
  // let [count, setCount] = React.useState(0);
  // function update() {
  //   setName("Messi");
  // }
  // const [show, setshow] = useState(true);
  return (
    <div className="App">
      <NavBar />
      <ItemListContainer name="Student" />
      <ItemCount stock={10} initial={1} onAdd={(count) => console.log(count)} />
    </div>
  );
}

export default App;
