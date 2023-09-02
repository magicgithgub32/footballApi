import React, { useContext } from "react";
import "./TopScorer.css";
import Header from "../../components/Header/Header";
import { FootballContext, TopScorerContext } from "../../App";
import HomeButton from "../../components/HomeButton/HomeButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";

const TopScorer = () => {
  const { season, setSeason, leagueName } = useContext(FootballContext);

  const {
    topScorer,
    setTopScorerId,
    topScorerId,
    setTopScorer,
    setPichichiId,
    pichichiId,
    setPichichi,
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
  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${season + 1} ${leagueName} `} />
        <h1 className="top-scorer-title">TOP SCORER</h1>

        <HomeButton />
      </article>

      {console.log("topScorer", topScorer)}

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
          setGoleadorArgId={setGoleadorArgId}
          goleadorArgId={goleadorArgId}
          setGoleadorArg={setGoleadorArg}
          setCapo={setCapo}
          setCapoId={setCapoId}
          capoId={capoId}
          setButeur={setButeur}
          setButeurId={setButeurId}
          buteurId={buteurId}
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
          setGoleadorArgId={setGoleadorArgId}
          goleadorArgId={goleadorArgId}
          setGoleadorArg={setGoleadorArg}
          setCapo={setCapo}
          setCapoId={setCapoId}
          capoId={capoId}
          setButeur={setButeur}
          setButeurId={setButeurId}
          buteurId={buteurId}
        />
      </article>
    </section>
  );
};

export default TopScorer;
