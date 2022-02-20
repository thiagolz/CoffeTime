import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar.js";
import "../src/App.css";
import ItemListContainer from "./components/ItemListContainer.js";
import ItemCount from "./components/Utils/ItemCount";
import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/Products/ItemDetailContainer.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import cartWidget from "./components/NavBar/CartWidget.js";
import Cart from "./components/Cart/Cart.js";
import CartContextProvider from "./components/Cart/CartContext";
import Message from "./components/context/Message.js";
import { MessageContextProvider } from "./components/context/MessageContext.js";
function App() {
  // let [name, setName] = React.useState("Lionel");
  // let [count, setCount] = React.useState(0);
  // function update() {
  //   setName("Messi");
  // }
  // const [show, setshow] = useState(true);
  return (
    <div className="App">
      <MessageContextProvider>
        <CartContextProvider>
          <ChakraProvider>
            <NavBar />
            <Message />
            <Routes>
              <Route
                path="/"
                element={<ItemListContainer name="Welcome to Coffe Time" />}
              />

              <Route
                path="/products/:itemId"
                element={<ItemDetailContainer />}
              />
              <Route path="/cart" element={<Cart />} />
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
          </ChakraProvider>
        </CartContextProvider>
      </MessageContextProvider>
    </div>
  );
}

export default App;
