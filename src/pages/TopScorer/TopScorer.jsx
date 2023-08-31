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
  } = useContext(TopScorerContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} ${leagueName} TOP SCORER`}
        />
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
        />
      </article>
    </section>
  );
};

export default TopScorer;
