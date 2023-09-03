import React, { useContext } from "react";
import "./FootballHub.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FootballContext, TopScorerContext } from "../../App";
import LeagueButton from "../../components/LeagueButton/LeagueButton";
import { pichichis } from "../../data/pichichis";
import { topScorers } from "../../data/topScorers";
import { capocannonieres } from "../../data/capocannonieres";
import { buteurs } from "../../data/buteurs";
import { goleadoresArg } from "../../data/goleadoresArg";

const FootballHub = () => {
  const { setLeague, season, setSeason } = useContext(FootballContext);
  const {
    setTopScorerId,
    topScorerId,
    setTopScorer,
    setPichichiId,
    pichichiId,
    setPichichi,
    setGoleadorArgId,
    goleadorArgId,
    setGoleadorArg,
    setCapoId,
    capoId,
    setCapo,
    setButeurId,
    buteurId,
    setButeur,
  } = useContext(TopScorerContext);

  const handleLeagueChange = (leagueId) => {
    setLeague(leagueId);
  };

  var today = new Date();
  var year = today.getFullYear();

  const substractYear = () => {
    if (season > 2002) {
      setSeason(season - 1);
      setTopScorerId(topScorerId - 1);
      setTopScorer(topScorers[topScorerId - 1]);
      setPichichiId(pichichiId - 1);
      setPichichi(pichichis[pichichiId - 1]);
      setCapoId(capoId - 1);
      setCapo(capocannonieres[capoId - 1]);
      setGoleadorArgId(goleadorArgId - 1);
      setGoleadorArg(goleadoresArg[goleadorArgId - 1]);
      setButeurId(buteurId - 1);
      setButeur(buteurs[buteurId - 1]);
    } else if (season === 2002) {
      setSeason(season - 1);
      setTopScorerId(topScorerId - 1);
      setTopScorer(topScorers[topScorerId - 1]);
      setPichichiId(pichichiId - 1);
      setPichichi(pichichis[pichichiId - 1]);
      setCapoId(capoId - 1);
      setCapo(capocannonieres[capoId - 1]);
    }
  };

  const addYear = () => {
    // if (season === 2001) {
    //   setSeason(season + 1);
    //   setPichichiId(pichichiId + 1);
    //   setPichichi(pichichis[pichichiId + 1]);
    //   setTopScorerId(topScorerId + 1);
    //   setTopScorer(topScorers[topScorerId + 1]);
    //   setCapoId(capoId + 1);
    //   setCapo(capocannonieres[capoId + 1]);
    // }
    // if (season > 2001 && season < year) {
    //   setSeason(season + 1);
    //   setPichichiId(pichichiId + 1);
    //   setPichichi(pichichis[pichichiId + 1]);
    //   setTopScorerId(topScorerId + 1);
    //   setTopScorer(topScorers[topScorerId + 1]);
    //   setCapoId(capoId + 1);
    //   setCapo(capocannonieres[capoId + 1]);
    //   setButeurId(buteurId + 1);
    //   setButeur(buteurs[buteurId + 1]);
    //   setGoleadorArgId(goleadorArgId + 1);
    //   setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
    // }

    if (season === 2001) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setCapoId(capoId + 1);
      setCapo(capocannonieres[capoId + 1]);
      // } else if (season > 2001 && season < year - 1) {
      //   setSeason(season + 1);
      //   setPichichiId(pichichiId + 1);
      //   setPichichi(pichichis[pichichiId + 1]);
      //   setTopScorerId(topScorerId + 1);
      //   setTopScorer(topScorers[topScorerId + 1]);
      //   setCapoId(capoId + 1);
      //   setCapo(capocannonieres[capoId + 1]);
      //   setButeurId(buteurId + 1);
      //   setButeur(buteurs[buteurId + 1]);
      //   setGoleadorArgId(goleadorArgId + 1);
      //   setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
    } else if (season > 2001 && season < year) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setCapoId(capoId + 1);
      setCapo(capocannonieres[capoId + 1]);
      setButeurId(buteurId + 1);
      setButeur(buteurs[buteurId + 1]);

      setGoleadorArgId(goleadorArgId + 1);
      setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
    }
  };

  console.log("season", season);
  console.log("pichichiId", pichichiId);
  console.log("topScorerId", topScorerId);
  console.log("capoId", capoId);
  console.log("buteurId", buteurId);
  console.log("goleadorArgId", goleadorArgId);

  return (
    <>
      <Header img="./etrusco.png" alt="football" headerText="FOOTBALL - HUB" />

      <article className="selection-wrapper">
        <h2>CHOOSE YOUR LEAGUE</h2>
      </article>

      <article className="season-selection">
        <p>SEASON</p>

        <article className="season-year-buttons">
          {season > 2001 && (
            <button
              type="submit"
              className="add-substract-year"
              onClick={substractYear}
            >
              -
            </button>
          )}
          {season} - {season + 1}
          {season < year && (
            <button
              type="submit"
              className="add-substract-year"
              onClick={addYear}
            >
              +
            </button>
          )}
        </article>
      </article>

      <article className="league-buttons">
        <LeagueButton
          leagueId="eng.1"
          imageSrc="inglaterra.png"
          altText="england"
          onClick={() => handleLeagueChange("eng.1")}
        />
        <LeagueButton
          leagueId="esp.1"
          imageSrc="espana.png"
          altText="spain"
          onClick={() => handleLeagueChange("esp.1")}
        />

        <LeagueButton
          leagueId="ita.1"
          imageSrc="italia.png"
          altText="italy"
          onClick={() => handleLeagueChange("ita.1")}
        />

        {season > 2001 && (
          <>
            <LeagueButton
              leagueId="fra.1"
              imageSrc="francia.png"
              altText="france"
              onClick={() => handleLeagueChange("fra.1")}
            />
            <LeagueButton
              leagueId="arg.1"
              imageSrc="argentina.png"
              altText="argentina"
              onClick={() => handleLeagueChange("arg.1")}
            />
          </>
        )}

        {/* {season < year && season > 2001 && (
          <LeagueButton
            leagueId="arg.1"
            imageSrc="argentina.png"
            altText="argentina"
            onClick={() => handleLeagueChange("arg.1")}
          />
        )} */}
      </article>

      <Footer />
    </>
  );
};

export default FootballHub;
