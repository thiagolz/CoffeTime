import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import AppCss from "../src/App.css";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/Utils/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/Products/ItemDetailContainer.js";

function App() {
  // let [name, setName] = React.useState("Lionel");
  // let [count, setCount] = React.useState(0);
  // function update() {
  //   setName("Messi");
  // }
  // const [show, setshow] = useState(true);
  return (
    <div className="App">
      <ChakraProvider>
        <NavBar />
        <ItemListContainer name="Student" />
        <ItemCount
          stock={10}
          initial={1}
          onAdd={(count) => console.log(count)}
        />
        <ItemDetailContainer />
      </ChakraProvider>
    </div>
  );
}

export default App;
