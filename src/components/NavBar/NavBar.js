import logo from "../../Assets/logo.svg";
import React from "react";
import NavBarScss from ".//NavBar.scss";
import CartWidget from "./CartWidget";
// import { logoImg } from ".//NavBar.scss";
import { Link } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Menu bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">
        <header className="navbar navbar-expand-sm bg-light">
          <div className="header-container">
            <a>
              <img className="logoImg" src={logo} alt="logo" />
            </a>
            <div className="row">
              <nav className="navbar navbar-expand-sm bg-light">
                <ul className="nav justify-content-center">
                  <div className="col-sm">
                    <li className="nav-item">
                      <a class="nav-link" href="">
                        Home
                      </a>
                    </li>
                  </div>
                  <div className="col-sm">
                    <li className="nav-item">
                      <a class="nav-link" href="">
                        Products
                      </a>
                    </li>
                  </div>
                  <div className="col-sm">
                    <li className="nav-item">
                      <a class="nav-link" href="">
                        About us
                      </a>
                    </li>
                  </div>
                </ul>
                <CartWidget />
              </nav>
            </div>
          </div>
        </header>
      </Menu>
    </>
  );
}
// function CartWidget() {
//   const context = useContext(CartContext);
//   return (
//     <li className={navItem}>
//       <div className={cartWidget}>
//         <i className="fas fa-shopping-cart carritoInicio"></i>
//         {context.cart.length !== 0 && <p>{context.cantidadItems()}</p>}
//       </div>
//     </li>
//   );
// }

export default NavBar;
export { default as logo } from "../../Assets/logo.svg";
