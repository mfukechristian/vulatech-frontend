import React from "react";
import "./HeaderComponent.css";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <header>
      <div className="logo-container">
        <Link className="logo-link" to="/">
          vulatech.
        </Link>
      </div>

      <div className="cta-container">
        <Link
          to={"https://christianmfuke.netlify.app/"}
          target="_blank"
          rel="noreferrer"
        >
          Read about the author of this site
        </Link>
      </div>
    </header>
  );
};

export default HeaderComponent;
