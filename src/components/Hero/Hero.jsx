import React, { useEffect, useState } from "react";
import "./Hero.css";

const Hero = () => {
  const [footballTeam, setFootballTeam] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const [teamId, setTeamId] = useState(0);

  const getFootball = async () => {
    const result = await fetch(
      "https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc"
    );

    if (result.status === 200) {
      const res = await result.json();
      setFootballTeam(res.data.standings);
    } else {
      setFootballTeam(null);
    }
  };

  useEffect(() => {
    getFootball();
  }, [footballTeam]);

  return (
    <>
      {footballTeam && (
        <div className="hero-wrapper">
          <h2>{footballTeam[teamId].team?.name}</h2>
          <img
            className="logo"
            src={footballTeam[teamId].team?.logos[0].href}
          />
        </div>
      )}
    </>
  );
};
export default Hero;
