import React from "react";
import { Link } from "react-router-dom";
import Menus from "./Menus";
import "../../Assets/css/Front.css";

const Header = () => {
  return (
    <React.Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="logo">
          <img src="/images/logo.png" className="img-responsive" alt="Logo" />
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <Menus />
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
