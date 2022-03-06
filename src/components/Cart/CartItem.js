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
    <>
      <Box
        bg="#ffffff"
        display="flex"
        justifyContent="space-between"
        alignContent="space-between"
        alignItems="center"
      >
        <Box className="itemCartContainer">
          <div>
            <img width="50px" src={props.image} alt="Product Image" />
          </div>

          <div className="cart-container">
            <Box className="titleContainer" letterSpacing={2} fontSize="2rem">
              <p className="title">{props.title}</p>
            </Box>
            <Box paddingLeft="10px" fontSize="1rem">
              <div className="priceContainer">
                <p className="price">$ {props.price}</p>
              </div>
            </Box>
          </div>
        </Box>
        <Box
          className="quantityContainer"
          display="flex"
          justifyContent="space-between"
        >
          <p className="quantity">Quantity({props.quantity})</p>
        </Box>

        <Box
          className="btnclean-container"
          display="flex"
          justifyContent="space-between"
        >
          <button className="btnClean" onClick={emptyCart}>
            Clean
          </button>
        </Box>
        <Box display="flex" justifyContent="space-between" padding="15px">
          <button className="btnDelete" onClick={() => deleteItem(props.id)}>
            Delete
          </button>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          color="#3483fa"
          fontSize="1rem"
        >
          <Link to="order">Order</Link>
        </Box>
      </Box>
    </>
  );
};
export default CartItem;
