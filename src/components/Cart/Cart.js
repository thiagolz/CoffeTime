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
          <Box
            className="cart-container"
            display="flex"
            justifyContent="center"
          >
            {cart.map((item) => (
              <CartItem {...item} key={item.id} />
            ))}
          </Box>
          <div className="cart-backhome">
            {cart.length == 0 ? (
              <div>
                <p>You have no items in your cart, go back and add some!</p>

                <Link to="/">
                  <p>
                    <b>Back Home</b>{" "}
                  </p>
                </Link>
              </div>
            ) : (
              <Box
                display="flex"
                justifyContent="flex-end"
                fontSize="20px"
                fontWeight="bold"
                marginRight="50px"
              >
                <h3>Total: ${totalCart()}</h3>
              </Box>
            )}
          </div>
        </Box>
      )}
    </main>
  );
};
export default Cart;
