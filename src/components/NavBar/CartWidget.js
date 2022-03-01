import react from "react";
import NavBar from "./NavBar.scss";
import { useContext } from "react";
import { CartContext } from "../Cart/CartContext";
import { MessageContext } from "../context/MessageContext";
import "./cartWidget.css";
const CartWidget = () => {
  const { totalCart } = useContext(CartContext);
  const { severity } = useContext(MessageContext);
  return (
    <div className="col-sm">
      <li className="nav-item cart">
        <a class="nav-link" href="">
          {" "}
          <span className="iconify" data-icon="bytesize:cart"></span>
          <>
            {totalCart === 0 ? (
              <div className="hide"></div>
            ) : (
              <div className={totalCart === "" ? "hide" : severity}>
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
