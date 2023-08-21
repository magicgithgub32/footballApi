import React from "react";
import "./Header.css";

const Header = ({ headerText }) => {
  return (
    <header>
      <img src="./premier-league-logo.png" alt="premier-league-logo" />
      <h1>{headerText}</h1>
    </header>
  );
};

export default Header;
