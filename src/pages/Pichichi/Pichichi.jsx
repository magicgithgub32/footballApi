import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";

const Pichichi = () => {
  const { season, leagueName, setSeason } = useContext(FootballContext);

  const {
    pichichi,
    setPichichi,
    setPichichiId,
    pichichiId,
    setTopScorerId,
    topScorerId,
    setTopScorer,
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
        <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

        <h1 className="top-scorer-title">PICHICHI</h1>
        <HomeButton />
      </article>

      <TopScorerCard topScorer={pichichi} />

      <article className="season-buttons">
        {console.log("season", season)}

        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
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
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
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

export default Pichichi;
