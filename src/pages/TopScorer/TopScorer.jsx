import React, { useContext } from "react";
import "./TopScorer.css";
import Header from "../../components/Header/Header";
import { FootballContext } from "../../App";
import HomeButton from "../../components/HomeButton/HomeButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import TopScorerCard from "../../components/TopScorercards/TopScorerCard";

const TopScorer = () => {
  const {
    season,
    topScorer,
    setSeason,
    setTopScorerId,
    topScorerId,
    setTopScorer,
    leagueName,
    setPichichiId,
    pichichiId,
    setPichichi,
  } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} ${leagueName} TOP SCORER`}
        />
        <HomeButton />
      </article>

      <TopScorerCard topScorer={topScorer} />

      <article className="season-buttons">
        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
        />

        <NextSeasonButton
          season={season}
          setSeason={setSeason}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
        />
      </article>
    </section>
  );
};

export default TopScorer;
