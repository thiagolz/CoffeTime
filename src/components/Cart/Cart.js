import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
  // const context = useContext(CartContext);
  // const [show, setShow] = useState(false);
  // const [showOrder, setShowOrder] = useState(false);
  const { cart } = useContext(CartContext);
  return (
    <>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </>
  );
};
export default Cart;
