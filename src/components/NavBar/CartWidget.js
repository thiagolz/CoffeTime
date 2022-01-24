import react from "react";
import NavBar from "./NavBar.scss";

const cartWidget = () => {
  return (
    <div className="col-sm">
      <li className="nav-item cart">
        <a class="nav-link" href="">
          {" "}
          <span className="iconify" data-icon="bytesize:cart"></span>
        </a>
      </li>
    </div>
  );
};

export default cartWidget;
