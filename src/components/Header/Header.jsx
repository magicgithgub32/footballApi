import React from "react";
import "./Header.css";

const Header = ({ img, alt, headerText }) => {
  return (
    <header>
      <img src={img} alt={alt} />
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
