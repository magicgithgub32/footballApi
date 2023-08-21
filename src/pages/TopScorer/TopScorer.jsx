import React, { useContext } from "react";
import "./TopScorer.css";
import Header from "../../components/Header/Header";
import { FootballContext } from "../../App";
import HomeButton from "../../components/HomeButton/HomeButton";

const TopScorer = () => {
  const { season, teamLogo } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} PREMIER LEAGUE TOP SCORER`}
        />
        <HomeButton />
      </article>
    </section>
  );
};

export default TopScorer;
