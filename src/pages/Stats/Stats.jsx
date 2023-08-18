import React, { useContext } from "react";

import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";

const Stats = () => {
  const { standingsData, footballTeam } = useContext(FootballContext);

  return (
    <>
      {standingsData && (
        <section className="stats-wrapper">
          <Header headerText="2020 PREMIER LEAGUE STATS" />

          <h2>{footballTeam.toUpperCase()}</h2>
          {/* <p>{standingsData?.stats[0].name}</p> */}
        </section>
      )}
    </>
  );
};

export default Stats;
