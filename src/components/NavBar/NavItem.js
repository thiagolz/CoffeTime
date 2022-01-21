import React from "react";
import { navItem } from "./NavBar.scss";

export const NavItem = ({ text }) => {
  return (
    <>
      <li className={navItem}>
        <p>{text}</p>
      </li>
    </>
  );
};
