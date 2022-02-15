import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
const CartItem = (props) => {
  const [show, setShow] = useState(false);

  return (
    <Box bgGradient="linear(red.100 20%, orange.50 5%, yellow.100 50%)">
      <div className="itemCartContainer">
        <Link to={`/cart/${props.id}`}>
          <img src={props.image} alt="Product Image" />
          <div className="card-container">
            <p className="price">$ {props.price}</p>
            <p className="title">{props.title}</p>
            <p className="description">{props.description}</p>
            <button className="btnDelete">Delete</button>
          </div>
        </Link>
        {/* {!itemAmount ? (
          <ItemCount stock={10} initial={1} onAdd={OnAddItem} />
        ) : (
          <Link to="/cart">Checkout</Link>
        )} */}
      </div>
    </Box>
  );
};
export default CartItem;
