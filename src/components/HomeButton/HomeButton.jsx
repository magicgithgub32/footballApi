import React from "react";
import "./HomeButton.css";
import { Link } from "react-router-dom";

const HomeButton = () => {
  return (
    <Link to="/">
      <button type="button" className="back-home-button">
        HOME
      </button>
    </Link>
  );
};

export default HomeButton;
