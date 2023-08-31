import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

const Capo = () => {
  const { season, setSeason, leagueName } = useContext(FootballContext);
  const {
    setTopScorerId,
    topScorerId,
    setTopScorer,
    setPichichiId,
    pichichiId,
    setPichichi,
    setGoleadorArg,
    setGoleadorArgId,
    goleadorArgId,
    capo,
    setCapo,
    setCapoId,
    capoId,
  } = useContext(TopScorerContext);

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

        <h1 className="top-scorer-title">TOP SCORER</h1>

        <HomeButton />
      </article>

      <TopScorerCard topScorer={capo} />

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

export default Capo;
