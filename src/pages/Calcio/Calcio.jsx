import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { FootballContext, TopScorerContext } from "../../App";
import { Link } from "react-router-dom";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import HomeButton from "../../components/HomeButton/HomeButton";

const Calcio = () => {
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
  } = useContext(TopScorerContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/ita.1/standings?season=${season}&sort=asc`
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
      setLeagueLogo(res.data[9].logos);
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

  const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

  return (
    <>
      <Header
        headerText={leagueName}
        img={leagueLogo ? leagueLogo.light : ""}
        alt="League Logo"
      />

      {footballTeam && (
        <section className="hero-wrapper">
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
              />
            </article>

            <Link to="/capo">
              <button type="submit" className="top-scorer">
                CAPOCANNONIERE
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && standingsData[teamId].stats[0].value === 38 ? (
              <p>🍾 CHAMPION 🍾</p>
            ) : (
              rank
            )}

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

      <Footer />
    </>
  );
};

export default Calcio;
