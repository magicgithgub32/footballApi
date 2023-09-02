import React, { useContext, useEffect } from "react";
import "./Premier.css";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";

import { FootballContext, TopScorerContext } from "../../App";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import HomeButton from "../../components/HomeButton/HomeButton";

const Premier = () => {
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
    seasonDisplay,
    setSeasonDisplay,
    leagueName,
    setLeagueName,
    setLeagueLogo,
    leagueLogo,
  } = useContext(FootballContext);

  const {
    topScorerId,
    setTopScorerId,
    topScorer,
    setTopScorer,
    setPichichiId,
    setPichichi,
    pichichiId,
    goleadorArgId,
    setGoleadorArgId,
    setGoleadorArg,
    setCapoId,
    capoId,
    capo,
    setCapo,
    setButeur,
    setButeurId,
    buteurId,
  } = useContext(TopScorerContext);

  // const { topScorerData } = useContext(TopScorerInfoContext);

  // const premierTopScorers = topScorerData.eng;

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/eng.1/standings?season=${season}&sort=asc`
    );

    if (result.status === 200) {
      const res = await result.json();
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
      setLeagueLogo(res.data[5].logos);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    getFootballFetch();
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

  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      <Header
        headerText={leagueName}
        img={leagueLogo ? leagueLogo.light : ""}
        alt="League Logo"
      />
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
            <HomeButton />
            <article className="season-buttons">
              <PrevSeasonButton
                season={season}
                setSeason={setSeason}
                setTopScorerId={setTopScorerId}
                topScorerId={topScorerId}
                setTopScorer={setTopScorer}
                leagueName={leagueName}
                setPichichiId={setPichichiId}
                setPichichi={setPichichi}
                goleadorArgId={goleadorArgId}
                setGoleadorArgId={setGoleadorArgId}
                setGoleadorArg={setGoleadorArg}
                setCapoId={setCapoId}
                capoId={capoId}
                capo={capo}
                setCapo={setCapo}
                setButeur={setButeur}
                setButeurId={setButeurId}
                buteurId={buteurId}
              />

              <h2>{seasonDisplay}</h2>

              <NextSeasonButton
                season={season}
                setSeason={setSeason}
                setTopScorerId={setTopScorerId}
                topScorerId={topScorerId}
                setTopScorer={setTopScorer}
                leagueName={leagueName}
                setPichichiId={setPichichiId}
                pichichiId={pichichiId}
                setPichichi={setPichichi}
                goleadorArgId={goleadorArgId}
                setGoleadorArgId={setGoleadorArgId}
                setGoleadorArg={setGoleadorArg}
                setCapoId={setCapoId}
                capoId={capoId}
                capo={capo}
                setCapo={setCapo}
                setButeur={setButeur}
                setButeurId={setButeurId}
                buteurId={buteurId}
              />
            </article>

            <Link to="/topscorer">
              <button type="submit" className="top-scorer">
                TOP SCORER
              </button>
            </Link>

            {/* <Link to="/topScorer?league=eng">
              View Premier League Top Scorer
            </Link> */}
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            {console.log("standingsData", standingsData)}
            {console.log("season", season)}
            {console.log("rank", rank)}
            {console.log("topSCorer", topScorer)}
            {console.log("leagueName", leagueName)}

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
export default Premier;
