import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { MessageContext } from "../context/MessageContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { cart, totalCart } = useContext(CartContext);

  return (
    <div className="col-sm">
      <li className="nav-item cart">
        <a class="nav-link" href="">
          {" "}
          <span className="iconify" data-icon="bytesize:cart"></span>
          <>
            {cart.length > 0 && (
              <div>
                <span>Total: ${totalCart()}</span>
              </div>
            )}
          </>
        </a>
      </li>
    </div>
  );
};

export default CartWidget;
