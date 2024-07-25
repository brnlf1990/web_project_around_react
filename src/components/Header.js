import React from "react";

import "../blocks/Header.css";
import aroundImage from "../images/header_title.jpg";

function Header() {
  return (
    <header className="header">
      <img
        src={aroundImage}
        alt="header title image"
        className="header__image"
      />
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
