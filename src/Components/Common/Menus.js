import React from "react";
import { Anchor } from "../Form/Anchor";

const Menus = (props) => {
  return (
    <React.Fragment>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Anchor className="nav-link" path="/" label="Home" />
        </li>
        <li className="nav-item">
          <Anchor className="nav-link" path="/contact" label="Contact" />
        </li>
        <li className="nav-item">
          <Anchor className="nav-link" path="/listing" label="Listing" />
        </li>
      </ul>
    </React.Fragment>
  );
};

export default Menus;
