import React, { useContext, useState } from "react";
import "./MaxScorer.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import { topScorersData } from "../../data/topScorersData";

const MaxScorer = () => {
  const { season, setSeason, leagueName } = useContext(FootballContext);

  const [topScorers, setTopScorers] = useState(topScorersData);

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

        <h1 className="top-scorer-title">TOP-SCORER</h1>

        {console.log("season", season)}
        {console.log("leagueName", leagueName)}
        {console.log("season", season)}

        <HomeButton />
      </article>

      <TopScorerCard
        topScorers={topScorers}
        leagueName={leagueName}
        season={season}
      />

      <article className="season-buttons">
        <PrevSeasonButton season={season} setSeason={setSeason} />
        <NextSeasonButton season={season} setSeason={setSeason} />
      </article>
    </section>
  );
};

export default MaxScorer;
