import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FootballContext, TopScorerContext } from "../../App";
import { Link } from "react-router-dom";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import HomeButton from "../../components/HomeButton/HomeButton";

const LaLiga = () => {
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
    leagueName,
    setLeagueName,
    setLeagueLogo,
    leagueLogo,
    league,
    seasonDisplay,
    setSeasonDisplay,
  } = useContext(FootballContext);

  const {
    topScorerId,
    setTopScorerId,
    topScorer,
    setTopScorer,
    setPichichiId,
    setPichichi,
    pichichiId,
    pichichi,
    goleadorArgId,
    setGoleadorArgId,
    goleadorArg,
    setGoleadorArg,
    setCapoId,
    capoId,
    capo,
    setCapo,
  } = useContext(TopScorerContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/${league}/standings?season=${season}&sort=asc`
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
      setLeagueLogo(res.data[16].logos);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    getFootballFetch();
  }, [season, league]);

  console.log("footballTeam", footballTeam);

  useEffect(() => {
    if (standingsData) {
      const currentFootballTeam = standingsData[teamId]?.team.name;
      setFootballTeam(currentFootballTeam);
    }
  }, [standingsData, teamId]);

  useEffect(() => {
    if (footballTeam) {
      if (footballTeam === "Real Murcia" || footballTeam === "Murcia") {
        setTeamLogo("./Murcia.png");
      } else if (footballTeam === "Recreativo Huelva") {
        setTeamLogo("./Recre.png");
      } else if (footballTeam === "Hercules") {
        setTeamLogo("./Hercules.png");
      } else {
        setTeamLogo(
          standingsData[teamId]?.team.logos[0]?.href || "./etrusco.png"
        );
      }
    }
  }, [footballTeam]);

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
                setPichichiId={setPichichiId}
                pichichiId={pichichiId}
                setPichichi={setPichichi}
                pichichi={pichichi}
                leagueName={leagueName}
                setTopScorerId={setTopScorerId}
                setTopScorer={setTopScorer}
                topScorer={topScorer}
                setGoleadorArgId={setGoleadorArgId}
                setGoleadorArg={setGoleadorArg}
                goleadorArg={goleadorArg}
                setCapoId={setCapoId}
                capoId={capoId}
                capo={capo}
                setCapo={setCapo}
              />

              <h2> {seasonDisplay}</h2>

              <NextSeasonButton
                season={season}
                setSeason={setSeason}
                setPichichiId={setPichichiId}
                pichichiId={pichichiId}
                pichichi={pichichi}
                setPichichi={setPichichi}
                leagueName={leagueName}
                setTopScorerId={setTopScorerId}
                setTopScorer={setTopScorer}
                topScorer={topScorer}
                setGoleadorArgId={setGoleadorArgId}
                setGoleadorArg={setGoleadorArg}
                goleadorArg={goleadorArg}
                setCapoId={setCapoId}
                capoId={capoId}
                capo={capo}
                setCapo={setCapo}
              />
            </article>

            <Link to="/pichichi">
              <button type="submit" className="top-scorer">
                PI CHI CHI
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            {console.log("standingsData", standingsData)}
            {console.log("rank", rank)}
            {console.log("pichichi", pichichi)}

            {console.log("leagueName", leagueName)}
            {console.log("standingsData", standingsData)}
            {console.log("season", season)}
            {console.log("rank", rank)}
            {console.log("games Played", standingsData[teamId].stats[0].value)}
            {console.log("pichichi", pichichi)}
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
      {/* <Footer /> */}
    </>
  );
};
export default LaLiga;
