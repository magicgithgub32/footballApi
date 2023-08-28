import React, { useContext } from "react";
import "./GoleadorArg.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PichichiCard from "../../components/TopScorercards/PichichiCard";

const GoleadorArg = () => {
  const {
    season,
    leagueName,
    pichichi,
    setSeason,
    setSeasonArg,
    setPichichi,
    setPichichiId,
    pichichiId,
    setTopScorerId,
    topScorerId,
    setTopScorer,
    setGoleadorArg,
    setGoleadorArgId,
    goleadorArgId,
  } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} ${leagueName} TOP SCORER`}
        />
        <HomeButton />
      </article>
      //? Cambiar por GoleadorArgCard
      <PichichiCard pichichi={pichichi} />
      <article className="season-buttons">
        //?Cambiar por PrevSeasonButton o PrevSeasonButtonArg
        <PrevSeasonButtonSp
          season={season}
          setSeason={setSeason}
          setSeasonArg={setSeasonArg}
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
          setSeasonArg={setSeasonArg}
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

export default GoleadorArg;
