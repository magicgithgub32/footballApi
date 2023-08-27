import React from "react";
import "./LeagueButton.css";
import { Link } from "react-router-dom";

const LeagueButton = ({ leagueId, imageSrc, altText, onClick }) => {
  return (
    <Link to={`/${leagueId}`}>
      <button type="submit" className="league-button" onClick={onClick}>
        <img src={imageSrc} alt={altText} />
      </button>
    </Link>
  );
};

export default LeagueButton;
