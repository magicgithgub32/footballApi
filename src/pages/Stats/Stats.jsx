import React, { useContext, useEffect } from "react";

import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";

import StatsCard from "../../components/StatsCard/StatsCard";
import HomeButton from "../../components/HomeButton/HomeButton";

const Stats = () => {
  const { standingsData, footballTeam, teamId, season, teamLogo } =
    useContext(FootballContext);

  const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

  return (
    <>
      {standingsData && (
        <section>
          <article className="header-back-home-article">
            <Header
              headerText={`${season} - ${season + 1} PREMIER LEAGUE STATS`}
            />

            <HomeButton />
          </article>

          <article className="stats-wrapper">
            <StatsCard
              teamLogo={teamLogo}
              footballTeam={footballTeam}
              standingsData={standingsData}
              teamId={teamId}
              rank={rank}
            />
          </article>
        </section>
      )}
    </>
  );
};

export default Stats;
