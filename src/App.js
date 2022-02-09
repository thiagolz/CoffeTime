import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import "../src/App.css";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/Utils/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/Products/ItemDetailContainer.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
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
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer name="Welcome to Coffe Time" />}
          />

          <Route path="/products/:itemId" element={<ItemDetailContainer />} />
          <Route
            path="/category/:categoryName"
            element={<ItemListContainer name="Menu" />}
          />
          <Route
            path="*"
            element={
              <Alert status="error">
                <AlertIcon />

                <AlertTitle mr={4}>Page not found</AlertTitle>

                <Link to="/">{"<< "}Back home </Link>
              </Alert>
            }
          />
        </Routes>

        <ItemCount
          stock={10}
          initial={1}
          onAdd={(count) => console.log(count)}
        />
      </ChakraProvider>
    </div>
  );
}

export default App;
