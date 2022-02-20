import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import "./CartItem.css";
import { CartContext } from "./CartContext";

const CartItem = (props) => {
  const { cart, vaciarCarrito, deleteItem, emptyCart, totalCart } =
    useContext(CartContext);
  const [show, setShow] = useState(false);

  return (
    <div>
      <Box bgGradient="linear(to-r, green.200, pink.500)">
        <div className="itemCartContainer">
          <img width="50px" src={props.image} alt="Product Image" />

          <div className="cart-container">
            <div className="priceContainer">
              <p className="price">$ {props.price}</p>
            </div>
            <Box className="titleContainer" letterSpacing={2}>
              <p className="title">{props.title}</p>
            </Box>
            <Box
              className="quantityContainer"
              alignItems="center"
              alignContent="center"
            >
              <p className="quantity">({props.quantity})</p>
            </Box>
          </div>
          <div className="deleteContainer">
            <button className="btnDelete" onClick={() => deleteItem(props.id)}>
              Delete X
            </button>
          </div>
        </div>

        <button className="btnClean" onClick={emptyCart}>
          Clean
        </button>
      </Box>
    </div>
  );
};
export default CartItem;
