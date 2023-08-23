import React, { useContext, useEffect, useState } from "react";
import "./ReHome.css";

import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

import { FootballContext } from "../../App";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";

const ReHome = () => {
  const {
    league,
    setLeague,
    leagueName,
    setLeagueName,
    leagueLogo,
    setLeagueLogo,
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
  } = useContext(FootballContext);

  const getFootball = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${season}&sort=asc`
    );

    if (result.status === 200) {
      const res = await result.json();
      setStandingsData(res.data.standings);
      setLeagueName(res.data.name);
      setLeagueLogo(res.data.logos.light);
    } else {
      setStandingsData(null);
    }
  };

  useEffect(() => {
    getFootball();
  }, [season]);

  console.log("footballTeam", footballTeam);

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

  // const handleSearchInputChange = (event) => {
  //   setSearchQuery(event.target.value);
  // };

  // const handleClick = () => {
  //   if (standingsData) {
  //     const foundTeam = standingsData.find(
  //       (team) => team.name?.toLowerCase() === searchQuery.toLowerCase()
  //     );
  //     console.log("foundTeam", foundTeam);

  //     if (foundTeam) {
  //       setTeamId(foundTeam.stats[0].rank - 1);
  //     } else {
  //       setFootballTeam(null);
  //       setTeamLogo("");
  //     }
  //   }
  // };

  const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

  return (
    <>
      <Header headerText={leagueName} />
      {footballTeam && (
        <section className="hero-wrapper">
          {/* <article className="search-buttons">
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
          </article> */}

          <article className="seasons-scorer-article">
            <article className="season-buttons">
              <PrevSeasonButton
                season={season}
                setSeason={setSeason}
                setTopScorerId={setTopScorerId}
                topScorerId={topScorerId}
                setTopScorer={setTopScorer}
              />

              <h2>{season}</h2>

              <NextSeasonButton
                season={season}
                setSeason={setSeason}
                setTopScorerId={setTopScorerId}
                topScorerId={topScorerId}
                setTopScorer={setTopScorer}
              />
            </article>

            <Link to="/topscorer">
              <button type="submit" className="top-scorer">
                TOP SCORER
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && standingsData[teamId].stats[0].value === 38 ? (
              <p>🍾 CHAMPION 🍾</p>
            ) : (
              rank
            )}

            {console.log("standingsData", standingsData)}
            {console.log("rank", rank)}
            {console.log("games Played", standingsData[teamId].stats[0].value)}
            {console.log("topSCorer", topScorer)}

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
export default ReHome;