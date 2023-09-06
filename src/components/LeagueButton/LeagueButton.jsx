// import React from "react";
// import "./LeagueButton.css";
// import { Link } from "react-router-dom";

// const LeagueButton = ({ leagueId, imageSrc, altText, onClick }) => {
//   return (
//     <Link to={`/${leagueId}`}>
//       <button type="submit" className="league-button" onClick={onClick}>
//         <img src={imageSrc} alt={altText} />
//       </button>
//     </Link>
//   );
// };

// export default LeagueButton;

import React, { useContext } from "react";
import "./LeagueButton.css";
import { Link } from "react-router-dom";
import { FootballContext } from "../../App";

const LeagueButton = ({ leagueId, imageSrc, altText }) => {
  const { setLeague } = useContext(FootballContext);

  const handleLeagueChange = (leagueId) => {
    setLeague(leagueId);
  };
  return (
    <Link to={`/league`}>
      <button
        type="submit"
        className="league-button"
        onClick={() => handleLeagueChange(leagueId)}
      >
        <img src={imageSrc} alt={altText} />
      </button>
    </Link>
  );
};

export default LeagueButton;
