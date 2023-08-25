import React, { useContext } from "react";
import "./Pichichi.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import NextSeasonButtonSp from "../../components/NextPrevSeasonsButtons/NextSeasonButtonSp";
import PrevSeasonButtonSp from "../../components/NextPrevSeasonsButtons/PrevSeasonButtonSp";
import PichichiCard from "../../components/TopScorercards/PichichiCard";

const Pichichi = () => {
  const {
    season,
    leagueName,
    pichichi,
    setSeason,
    setPichichi,
    setPichichiId,
    pichichiId,
    setTopScorerId,
    topScorerId,
    setTopScorer,
  } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} ${leagueName} TOP SCORER`}
        />
        <HomeButton />
      </article>

      <PichichiCard pichichi={pichichi} />

      <article className="season-buttons">
        {/* <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorer={setTopScorer}
          setTopScorerId={setTopScorerId}
        /> */}

        {/* <NextSeasonButton
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
        /> */}

        {console.log("season", season)}

        <PrevSeasonButtonSp
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        />

        <NextSeasonButtonSp
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        />
      </article>
    </section>
  );
};

export default Pichichi;
