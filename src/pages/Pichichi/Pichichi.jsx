import React, { useContext } from "react";
import "../TopScorer/TopScorer.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PichichiCard from "../../components/TopScorercards/PichichiCard";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

const Pichichi = () => {
  const { season, leagueName, setSeason, setSeasonArg } =
    useContext(FootballContext);

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
  } = useContext(TopScorerContext);
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

        {/* <PrevSeasonButtonSp
          season={season}
          setSeason={setSeason}
          setSeasonArg={setSeasonArg}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        /> */}

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
          setGoleadorArgId={setGoleadorArgId}
          goleadorArgId={goleadorArgId}
          setGoleadorArg={setGoleadorArg}
        />

        {/* <NextSeasonButtonSp
          season={season}
          setSeason={setSeason}
          setSeasonArg={setSeasonArg}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        /> */}

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
          setGoleadorArgId={setGoleadorArgId}
          goleadorArgId={goleadorArgId}
          setGoleadorArg={setGoleadorArg}
        />
      </article>
    </section>
  );
};

export default Pichichi;
