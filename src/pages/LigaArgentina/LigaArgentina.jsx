import React, { useContext, useEffect } from "react";
import "./LigaArgentina.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";

const LigaArgentina = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    setTeamLogo,
    teamId,
    setTeamId,
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
    setPichichiId,
    setPichichi,
    pichichiId,
  } = useContext(FootballContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/arg.1/standings?season=${season}&sort=asc`
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
      setLeagueLogo(res.data[0].logos);
      console.log("leagueLogo", leagueLogo);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    getFootballFetch();
  }, [season]);

  useEffect(() => {
    if (standingsData) {
      setFootballTeam(standingsData[teamId]?.team.name);

      setTeamLogo(standingsData[teamId]?.team.logos[0].href);
    }
  }, [standingsData, teamId, season]);

  const getPreviousTeam = () => {
    if (teamId > 0) {
      setTeamId(teamId - 1);
    }
  };

  const getNextTeam = () => {
    if (teamId < 19) {
      setTeamId(teamId + 1);
    }
  };

  const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

  return (
    <>
      {console.log("standingsData", standingsData)}
      <Header
        headerText={leagueName}
        img={leagueLogo ? leagueLogo.light : ""}
        alt="League Logo"
      />
    </>
  );
};

export default LigaArgentina;
