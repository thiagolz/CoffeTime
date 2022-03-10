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
      <hr></hr>
      <Box
        bg="#ffffff"
        display="flex"
        justifyContent="space-between"
        alignContent="space-between"
        alignItems="center"
      >
        <Box className="itemCartContainer">
          <div className="cart-container">
            <Box
              display="flex"
              justifyContent="flex-start"
              alignContent="flex-start"
              alignItems="flex-start"
              className="titleContainer"
              letterSpacing={2}
              fontSize="2rem"
            >
              <p className="title">{props.title}</p>
            </Box>
            <div>
              <img width="50px" src={props.image} alt="Product Image" />
            </div>
            <Box
              display="flex"
              justifyContent="flex-start"
              alignContent="flex-start"
              paddingLeft="10px"
              fontSize="1rem"
            >
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
      <hr></hr>
    </>
  );
};
export default CartItem;
