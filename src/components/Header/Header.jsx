import React from "react";
import "./Header.css";

const Header = () => {
  const hanleInputChange = () => {
    return;
  };

  return (
    <header>
      <h1>PREMIER LEAGUE CLUBS & THEIR LOGOS</h1>
      <input
        className="searchInput"
        type="text"
        placeholder="Search your club"
        //   value=
        onChange="handleInputChange"
      />
      <button type="submit" className="searchButton" onClick="handleClick">
        Search{" "}
      </button>
    </header>
  );
};

export default Header;
