import React, { useContext, useEffect } from "react";
import "./FootballHub.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";
import { FootballContext } from "../../App";

const FootballHub = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    setTeamLogo,
    teamId,
    setTeamId,
    // setSearchQuery,
    // searchQuery,
    footballTeam,
    teamLogo,
    season,
    setSeason,
    topScorerId,
    setTopScorerId,
    topScorer,
    setTopScorer,
    leagueName,
    setLeagueName,
    setLeagueLogo,
    leagueLogo,
    league,
    setLeague,
  } = useContext(FootballContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${season}&sort=asc`
    );

    if (result.status === 200) {
      const res = await result.json();
      setStandingsData(res.data.standings);
      setLeagueName(res.data.name);
    } else {
      setStandingsData(null);
    }
  };

  const getLeagueLogoFetch = async () => {
    const result = await fetch(
      "https://api-football-standings.azharimm.dev/leagues"
    );

    if (result.status === 200) {
      const res = await result.json();
      setLeagueLogo(res.data[5].logos);
      console.log("leagueLogo", leagueLogo);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, [league]);

  useEffect(() => {
    getFootballFetch();
  }, [season, league]);

  console.log("footballTeam", footballTeam);

  useEffect(() => {
    if (standingsData) {
      setFootballTeam(standingsData[teamId]?.team.name);

      setTeamLogo(standingsData[teamId]?.team.logos[0].href);
    }
  }, [standingsData, teamId, season]);

  const handlePrem = () => {
    setLeague("eng.1");
  };

  const handleLiga = () => {
    setLeague("esp.1");
  };
  return (
    <>
      <Header img="./etrusco.png" alt="football" headerText="FOOTBALL - HUB" />

      {console.log("season at FootballHub", season)}

      <article className="selection-wrapper">
        <h2>CHOOSE YOUR LEAGUE</h2>
      </article>

      <article className="league-buttons">
        <Link to="/premierLeague">
          <button type="submit" className="premier-league" onClick={handlePrem}>
            PREMIER LEAGUE
          </button>
        </Link>

        <Link to="/laliga">
          <button type="submit" className="liga" onClick={handleLiga}>
            LA LIGA
          </button>
        </Link>
      </article>

      <Footer />
    </>
  );
};

export default FootballHub;
