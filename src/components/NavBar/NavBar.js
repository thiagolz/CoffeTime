import logo from "../../Assets/logo.svg";
import React from "react";
import "./NavBar.scss";
import CartWidget from "./CartWidget";
// import { logoImg } from ".//NavBar.scss";
import { Link, NavLink } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

function NavBar() {
  return (
    <>
      <Menu bgGradient="linear(red.100 0%, orange.100 25%, yellow.100 50%)">
        <header className="navbar navbar-expand-sm bg-light">
          <div className="header-container">
            <Link to="/">
              <div className="logo-container">
                <img className="logoImg" src={logo} alt="logo" />
                <Heading size="md" fontSize="30px" Color="#243934">
                  Coffee Time
                </Heading>
              </div>
            </Link>
            <div className="row">
              <nav className="navbar navbar-expand-sm bg-light">
                <ul className="nav justify-content-center">
                  <div className="col-sm">
                    <li className="nav-item">
                      <NavLink to="/" class="nav-link">
                        Home
                      </NavLink>
                    </li>
                  </div>

                  <div className="col-sm">
                    <li className="nav-item">
                      <NavLink to="/category/drinks" class="nav-link">
                        Drinks
                      </NavLink>
                    </li>
                  </div>
                  <div className="col-sm">
                    <li className="nav-item">
                      <NavLink to="/category/food" class="nav-link">
                        Food
                      </NavLink>
                    </li>
                  </div>
                  <Link to="/cart">
                    {" "}
                    <CartWidget />{" "}
                  </Link>
                </ul>
              </nav>
            </div>
          </div>
        </header>
      </Menu>
    </>
  );
}

export default NavBar;
export { default as logo } from "../../Assets/logo.svg";
