import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div className="pages-component">
        <Link className="page-link" to="/">
          Startups
        </Link>
      </div>

      <div className="logo-container">
        <Link className="logo-link" to="/">
          vulatech.
        </Link>
      </div>

      <div className="cta-container">
        <Link>About</Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
