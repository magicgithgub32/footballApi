import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { FootballContext } from "../../App";

const Home = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    setTeamLogo,
    teamId,
    setTeamId,
    setSearchQuery,
    searchQuery,
    footballTeam,
    teamLogo,
    season,
    setSeason,
  } = useContext(FootballContext);

  const getFootball = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=${season}&sort=asc`
    );

    if (result.status === 200) {
      const res = await result.json();
      setStandingsData(res.data.standings);
    } else {
      setStandingsData(null);
    }
  };

  useEffect(() => {
    getFootball();
  }, [season]);

  console.log("footballTeam", footballTeam);

  // useEffect(() => {
  //   if (standingsData) {
  //     setFootballTeam(standingsData[teamId]?.team.name);

  //     setTeamLogo(standingsData[teamId]?.team.logos[0].href);
  //   }
  // }, [standingsData, teamId, season]);

  useEffect(() => {
    if (standingsData && teamId >= 0 && teamId < standingsData.length) {
      const currentTeamData = standingsData[teamId];
      setFootballTeam(currentTeamData.team.name);
      setTeamLogo(currentTeamData.team.logos[0].href);
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

  const getPrevSeason = () => {
    if (season > 2001) {
      setSeason(season - 1);
    }
  };

  const getNextSeason = () => {
    if (season < 2023) {
      setSeason(season + 1);
      getFootball();
    }
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleClick = () => {
    if (standingsData) {
      const foundTeam = standingsData.find(
        (team) => team.name?.toLowerCase() === searchQuery.toLowerCase()
      );
      console.log("foundTeam", foundTeam);

      if (foundTeam) {
        setTeamId(foundTeam.stats[0].rank - 1);
      } else {
        setFootballTeam(null);
        setTeamLogo("");
      }
    }
  };

  return (
    <>
      <Header headerText="PREMIER LEAGUE STATS" />
      {footballTeam && (
        <section className="hero-wrapper">
          <article className="search-buttons">
            <input
              className="search-input"
              type="text"
              placeholder="Search your club"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button
              type="button"
              className="search-button"
              onClick={handleClick}
            >
              Go!{" "}
            </button>
          </article>

          <article className="season">
            <h2>
              {season} - {season + 1}
            </h2>
          </article>

          <article className="season-buttons">
            {season > 2001 && (
              <button
                type="button"
                className="prev-season-button"
                onClick={getPrevSeason}
              >
                PREV SEASON
              </button>
            )}
            {season < 2023 && (
              <button
                type="button"
                className="prev-season-button"
                onClick={getNextSeason}
              >
                NEXT SEASON
              </button>
            )}
          </article>

          <article className="name-logo-wrapper">
            <h2 className="team-name">{footballTeam}</h2>

            <Link to="/stats">
              <img className="logo" src={teamLogo} alt="logo" />
            </Link>
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

            {teamId < 19 && (
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
      <Footer />
    </>
  );
};
export default Home;
