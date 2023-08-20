import React, { useContext, useEffect } from "react";

import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";

const Stats = () => {
  const { standingsData, footballTeam, teamId, season, setSeason } =
    useContext(FootballContext);

  const rank = standingsData[teamId].note.rank;

  const getPrevSeason = () => {
    if (season > 2001) {
      setSeason(season - 1);
    }
  };

  const getNextSeason = () => {
    if (season < 2023) {
      setSeason(season + 1);
    }
  };

  // useEffect(() => {}, [season]);

  return (
    <>
      {standingsData && (
        <section>
          <Header
            headerText={`${season} - ${season + 1} PREMIER LEAGUE STATS`}
          />
          <article className="back-home-article-wrapper">
            <Link to="/">
              <button type="button" className="back-home-button">
                HOME
              </button>
            </Link>
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

          <article className="stats-wrapper">
            <h2>{footballTeam.toUpperCase()}</h2>
            <p>🏅 Rank 🏅</p>

            <p>{rank == 1 ? "🏆" + "--" + rank + "--" + "🏆" : rank}</p>

            <p>⚽️ {standingsData[teamId].stats[0].displayName} ⚽️</p>
            <p>{standingsData[teamId].stats[0].value}</p>
            <p>👍 {standingsData[teamId].stats[3].displayName} 👍</p>
            <p>{standingsData[teamId].stats[3].value}</p>
            <p>✌️ {standingsData[teamId].stats[7].displayName} ✌️</p>
            <p>{standingsData[teamId].stats[7].value}</p>
            <p>👉 {standingsData[teamId].stats[6].displayName} 👈</p>
            <p>{standingsData[teamId].stats[6].value}</p>
            <p>👎 {standingsData[teamId].stats[1].displayName} 👎</p>
            <p>{standingsData[teamId].stats[1].value}</p>
          </article>
        </section>
      )}
    </>
  );
};

export default Stats;
