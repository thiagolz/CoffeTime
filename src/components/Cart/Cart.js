import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Cart = () => {
  const { cart, totalCart } = useContext(CartContext);

  console.log(cart);
  return (
    <main>
      {cart.lenght == 0 ? (
        <div>
          <h2>You have not added any item, go back home and add some!</h2>
          <Link to="/">Home</Link>
        </div>
      ) : (
        <Box>
          <div className="cart-container">
            {cart.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </div>
          <div>
            <h3>Total: ${totalCart()}</h3>
          </div>
        </Box>
      )}
    </main>
  );
};
export default Cart;
