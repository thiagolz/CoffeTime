import React from "react";
import NavBar from "./components/NavBar/NavBar.js";
import "../src/App.css";
import ItemListContainer from "./components/ItemListContainer.js";

import { ChakraProvider } from "@chakra-ui/react";
import ItemDetailContainer from "./components/Products/ItemDetailContainer.js";
import { Route, Routes, Link } from "react-router-dom";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";

import Cart from "./components/Cart/Cart.js";
import CartContextProvider from "./components/Cart/CartContext";
import Message from "./components/context/Message.js";
import { MessageContextProvider } from "./components/context/MessageContext.js";
import { Order } from "./components/Products/Order.js";
function App() {
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
              <Route path="/cart/order" element={<Order />} />
            </Routes>
          </ChakraProvider>
        </CartContextProvider>
      </MessageContextProvider>
    </div>
  );
}

export default App;
