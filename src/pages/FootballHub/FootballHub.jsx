import React, { useContext } from "react";
import "./FootballHub.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FootballContext } from "../../App";
import LeagueButton from "../../components/LeagueButton/LeagueButton";

const FootballHub = () => {
  const { setLeague, season } = useContext(FootballContext);

  const handleLeagueChange = (leagueId) => {
    setLeague(leagueId);
  };

  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      <Header img="./etrusco.png" alt="football" headerText="FOOTBALL - HUB" />

      <article className="selection-wrapper">
        <h2>CHOOSE YOUR LEAGUE</h2>
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

        {season < year && (
          <LeagueButton
            leagueId="arg.1"
            imageSrc="argentina.png"
            altText="argentina"
            onClick={() => handleLeagueChange("arg.1")}
          />
        )}
      </article>

      <Footer />
    </>
  );
};

export default FootballHub;
