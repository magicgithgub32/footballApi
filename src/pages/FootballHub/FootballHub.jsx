import React, { useContext } from "react";
import "./FootballHub.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FootballContext } from "../../App";
import LeagueButton from "../../components/LeagueButton/LeagueButton";

const FootballHub = () => {
  const { league, season, setSeason } = useContext(FootballContext);

  var today = new Date();
  var year = today.getFullYear();

  const substractYear = () => {
    if (season > 2002) {
      setSeason(season - 1);
    } else if (season === 2002) {
      setSeason(season - 1);
    }
  };

  const addYear = () => {
    if (season === 2001) {
      setSeason(season + 1);
    }
    if (season > 2001 && season < year) {
      setSeason(season + 1);
    }

    if (season === 2001) {
      setSeason(season + 1);
    } else if (season > 2001 && season < year - 1) {
      setSeason(season + 1);
    } else if (season > 2001 && season < year) {
      setSeason(season + 1);
    }
  };

  console.log("season", season);
  console.log("league", league);

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
              Prev
            </button>
          )}
          {season} - {season + 1}
          {season < year && (
            <button
              type="submit"
              className="add-substract-year"
              onClick={addYear}
            >
              Next
            </button>
          )}
        </article>
      </article>

      <article className="league-buttons">
        <LeagueButton
          leagueId="eng.1"
          imageSrc="inglaterra.png"
          altText="england"
        />
        <LeagueButton leagueId="esp.1" imageSrc="espana.png" altText="spain" />

        <LeagueButton leagueId="ita.1" imageSrc="italia.png" altText="italy" />

        <LeagueButton
          leagueId="ger.1"
          imageSrc="alemania.png"
          altText="germany"
        />

        {season > 2001 && (
          <>
            <LeagueButton
              leagueId="fra.1"
              imageSrc="francia.png"
              altText="france"
            />
            <LeagueButton
              leagueId="arg.1"
              imageSrc="argentina.png"
              altText="argentina"
            />
          </>
        )}
      </article>

      <Footer />
    </>
  );
};

export default FootballHub;
