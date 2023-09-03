import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";

const GoleadorArg = () => {
  const { season, leagueName, setSeason } = useContext(FootballContext);

  const {
    setPichichi,
    setPichichiId,
    pichichiId,
    setTopScorerId,
    topScorerId,
    setTopScorer,
    goleadorArg,
    setGoleadorArg,
    setGoleadorArgId,
    goleadorArgId,
    setCapo,
    setCapoId,
    capoId,
    setButeur,
    setButeurId,
    buteurId,
  } = useContext(TopScorerContext);

  var today = new Date();
  var year = today.getFullYear();

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${leagueName}`} />
        <h1 className="top-scorer-title">GOLEADOR</h1>

        <HomeButton />
      </article>

      {console.log("goleadorArg", goleadorArg)}
      {console.log("season", season)}
      {console.log("leagueName", leagueName)}
      {console.log("year", year)}
      {console.log("season", season)}
      {console.log("pichichiId", pichichiId)}
      {console.log("topScorerId", topScorerId)}
      {console.log("capoId", capoId)}
      {console.log("buteurId", buteurId)}
      {console.log("goleadorArgId", goleadorArgId)}

      <TopScorerCard topScorer={goleadorArg} />

      <article className="season-buttons">
        {season > 2002 && (
          <PrevSeasonButton
            season={season}
            setSeason={setSeason}
            setPichichiId={setPichichiId}
            pichichiId={pichichiId}
            setPichichi={setPichichi}
            setTopScorerId={setTopScorerId}
            topScorerId={topScorerId}
            setTopScorer={setTopScorer}
            setGoleadorArg={setGoleadorArg}
            setGoleadorArgId={setGoleadorArgId}
            goleadorArgId={goleadorArgId}
            setCapo={setCapo}
            setCapoId={setCapoId}
            capoId={capoId}
            setButeur={setButeur}
            setButeurId={setButeurId}
            buteurId={buteurId}
          />
        )}
        {season < year && (
          <NextSeasonButton
            season={season}
            setSeason={setSeason}
            setPichichiId={setPichichiId}
            pichichiId={pichichiId}
            setPichichi={setPichichi}
            setTopScorerId={setTopScorerId}
            topScorerId={topScorerId}
            setTopScorer={setTopScorer}
            setGoleadorArg={setGoleadorArg}
            setGoleadorArgId={setGoleadorArgId}
            goleadorArgId={goleadorArgId}
            setCapo={setCapo}
            setCapoId={setCapoId}
            capoId={capoId}
            setButeur={setButeur}
            setButeurId={setButeurId}
            buteurId={buteurId}
          />
        )}
      </article>
    </section>
  );
};

export default GoleadorArg;
