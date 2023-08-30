import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";

const LigaArgentina = () => {
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
    leagueName,
    setLeagueName,
    setLeagueLogo,
    leagueLogo,
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
      `https://api-football-standings.azharimm.dev/leagues/arg.1/standings?season=${
        season + 1
      }&sort=asc`
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
      setLeagueLogo(res.data[0].logos);
      console.log("leagueLogo", leagueLogo);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    season < 2023 && getFootballFetch();
  }, [season]);

  useEffect(() => {
    if (standingsData) {
      const currentFootballTeam = standingsData[teamId]?.team.name;
      setFootballTeam(currentFootballTeam);
    }
  }, [standingsData, teamId]);

  useEffect(() => {
    if (footballTeam) {
      if (
        footballTeam === "Huracán de Tres Arroyos" ||
        footballTeam === "Huracán"
      ) {
        setTeamLogo("./Huracan.png");
      } else if (footballTeam === "Tiro Federal") {
        setTeamLogo("./Tiro.png");
      } else if (footballTeam === "San Martín de Tucumán") {
        setTeamLogo("./San_martin_tucuman.png");
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

  const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

  var today = new Date();
  var year = today.getFullYear();

  return (
    <>
      {console.log("standingsData", standingsData)}
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

              <h2>{seasonDisplay}</h2>

              {season + 1 < year && (
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
              )}
            </article>

            <Link to="/goleadorarg">
              <button type="submit" className="top-scorer">
                GOLEADOR
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            {console.log("standingsData", standingsData)}
            {console.log("season", season)}
            {console.log("rank", rank)}
            {console.log("year", year)}
            {console.log("topSCorer", topScorer)}
            {console.log("leagueName", leagueName)}
            {console.log("goleadorArg", goleadorArg)}

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

export default LigaArgentina;
