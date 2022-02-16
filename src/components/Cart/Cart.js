import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import CartItem from "./CartItem";

const Cart = () => {
  // const context = useContext(CartContext);
  // const [show, setShow] = useState(false);
  // const [showOrder, setShowOrder] = useState(false);
  const { cart } = useContext(CartContext);

  console.log(cart);
  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Cart;
