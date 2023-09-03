import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

const Buteur = () => {
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
    setCapo,
    setCapoId,
    capoId,
    buteur,
    setButeur,
    setButeurId,
    buteurId,
  } = useContext(TopScorerContext);

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

        <h1 className="top-scorer-title">BUTEUR</h1>

        {console.log("season", season)}
        {console.log("leagueName", leagueName)}
        {console.log("leagueName", leagueName)}
        {console.log("pichichiId", pichichiId)}
        {console.log("topScorerId", topScorerId)}
        {console.log("capoId", capoId)}
        {console.log("buteurId", buteurId)}
        {console.log("goleadorArgId", goleadorArgId)}

        <HomeButton />
      </article>

      <TopScorerCard topScorer={buteur} />

      <article className="season-buttons">
        {season > 2002 && (
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
        )}

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

export default Buteur;
