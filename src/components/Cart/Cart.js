import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";
import "./Cart.css";
import { Box } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Cart = () => {
  // const context = useContext(CartContext);
  // const [show, setShow] = useState(false);
  // const [showOrder, setShowOrder] = useState(false);
  const { cart, totalCart } = useContext(CartContext);

  console.log(cart);
  return (
    <>
      {cart.lenght === 0 ? (
        <>
          <h2>Aún no hay productos, volvé al home</h2>
          <Link to="/">Home</Link>
        </>
      ) : (
        <>
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
        </>
      )}
    </>
  );
};
export default Cart;
