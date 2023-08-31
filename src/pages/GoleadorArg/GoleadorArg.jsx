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
  } = useContext(TopScorerContext);

  var today = new Date();
  var year = today.getFullYear();

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season + 2} - ${leagueName}`} />
        <h1 className="top-scorer-title">GOLEADOR</h1>

        <HomeButton />
      </article>

      {console.log("goleadorArg", goleadorArg)}
      {console.log("season", season)}
      {console.log("leagueName", leagueName)}
      {console.log("year", year)}
      <TopScorerCard topScorer={goleadorArg} />

      <article className="season-buttons">
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
        />
        {season < year - 2 && (
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
          />
        )}
      </article>
    </section>
  );
};

export default GoleadorArg;
