import React, { useEffect, useState } from "react";
import "./Home.css";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Home = () => {
  const [standingsData, setStandingsData] = useState(null);
  const [footballTeam, setFootballTeam] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const getFootball = async () => {
    const result = await fetch(
      "https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=2020&sort=asc"
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
  }, []);

  useEffect(() => {
    if (standingsData) {
      setFootballTeam(standingsData[teamId]?.team.name);
      setTeamLogo(standingsData[teamId]?.team.logos[0].href);
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
      <Header />
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
          <article className="name-logo-wrapper">
            <h2 className="team-name">{footballTeam}</h2>
            <img className="logo" src={teamLogo} alt="logo" />
          </article>
          <article className="next-prev-buttons">
            {teamId > 0 && (
              <button
                type="submit"
                className="prevButton"
                onClick={getPreviousTeam}
              >
                Prev
              </button>
            )}

            {teamId < 19 && (
              <button
                type="submit"
                className="nextButton"
                onClick={getNextTeam}
              >
                Next
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
