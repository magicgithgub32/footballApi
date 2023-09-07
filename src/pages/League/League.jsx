import React, { useContext, useEffect } from "react";
import "./League.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import { Link } from "react-router-dom";
import MissingLogosChecks from "../../data/missingLogosChecks";

const League = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    teamId,
    setTeamId,
    footballTeam,
    league,
    season,
    setSeason,
    leagueName,
    setLeagueName,
    seasonDisplay,
    setSeasonDisplay,
    dataLogos,
    setDataLogos,
  } = useContext(FootballContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${season}&sort=asc`
    );
    if (result.status === 200) {
      const res = await result.json();
      console.log("res", res);

      setStandingsData(res.data.standings);
      setLeagueName(res.data.name);
      setSeasonDisplay(res.data.seasonDisplay);
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
      setDataLogos(res.data);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    getFootballFetch();
  }, [season, league]);

  useEffect(() => {
    if (standingsData) {
      const currentFootballTeam = standingsData[teamId]?.team.name;
      setFootballTeam(currentFootballTeam);
    }
  }, [standingsData, teamId]);

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

  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      {dataLogos && leagueName && (
        <Header
          headerText={leagueName}
          img={
            dataLogos.find((item) => item.name === leagueName)?.logos.light ||
            dataLogos[16].logos.light
          }
          alt="League Logo"
        />
      )}
      {footballTeam && (
        <section className="hero-wrapper">
          <article className="seasons-scorer-article">
            <HomeButton />
            <article className="season-buttons">
              {season > 2001 && (
                <PrevSeasonButton
                  season={season}
                  setSeason={setSeason}
                  leagueName={leagueName}
                />
              )}

              <h2> {seasonDisplay}</h2>

              {season < year && (
                <NextSeasonButton
                  season={season}
                  setSeason={setSeason}
                  leagueName={leagueName}
                />
              )}
            </article>

            <Link to="/maxScorer">
              <button type="submit" className="top-scorer">
                TOP SCORER
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            <h2 className="team-name">{footballTeam}</h2>

            {standingsData && footballTeam && (
              <Link to="/stats">
                <MissingLogosChecks footballTeam={footballTeam} />
              </Link>
            )}
          </article>

          <article className="next-prev-buttons">
            {teamId > 0 && (
              <button
                type="submit"
                className="prevButton"
                onClick={getPreviousTeam}
              >
                Prev Club
              </button>
            )}
            {teamId < standingsData.length - 1 && (
              <button
                type="submit"
                className="nextButton"
                onClick={getNextTeam}
              >
                Next Club
              </button>
            )}
          </article>
        </section>
      )}
    </>
  );
};

export default League;
