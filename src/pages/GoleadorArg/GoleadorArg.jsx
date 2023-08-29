import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import GoleadorArgCard from "../../components/TopScorerCards/GoleadorArgCard";

const GoleadorArg = () => {
  const { season, seasonArg, leagueName, setSeason, setSeasonArg } =
    useContext(FootballContext);

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
  } = useContext(TopScorerContext);

  var today = new Date();
  var year = today.getFullYear();

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season + 2} - ${leagueName} - TOP SCORER`} />
        <HomeButton />
      </article>

      {console.log("goleadorArg", goleadorArg)}
      {console.log("season", season)}
      <GoleadorArgCard goleadorArg={goleadorArg} />

      <article className="season-buttons">
        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setSeasonArg={setSeasonArg}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
          setGoleadorArg={setGoleadorArg}
          setGoleadorArgId={setGoleadorArgId}
          goleadorArgId={goleadorArgId}
        />
        {season < year - 2 && (
          <NextSeasonButton
            season={season}
            setSeason={setSeason}
            setSeasonArg={setSeasonArg}
            setPichichiId={setPichichiId}
            pichichiId={pichichiId}
            setPichichi={setPichichi}
            setTopScorerId={setTopScorerId}
            topScorerId={topScorerId}
            setTopScorer={setTopScorer}
            setGoleadorArg={setGoleadorArg}
            setGoleadorArgId={setGoleadorArgId}
            goleadorArgId={goleadorArgId}
          />
        )}
      </article>
    </section>
  );
};

export default GoleadorArg;
