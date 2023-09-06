import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import Header from "../../components/Header/Header";
import { FootballContext, TopScorerContext } from "../../App";
import { Link } from "react-router-dom";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import HomeButton from "../../components/HomeButton/HomeButton";
import MissingLogosChecks from "../../data/missingLogosChecks";

const LaLiga = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    setTeamLogo,
    teamId,
    setTeamId,
    footballTeam,
    season,
    setSeason,
    leagueName,
    setLeagueName,
    league,
    dataLogos,
    setDataLogos,
    seasonDisplay,
    setSeasonDisplay,
  } = useContext(FootballContext);

  const {
    setTopScorerId,
    topScorer,
    setTopScorer,
    setPichichiId,
    setPichichi,
    pichichiId,
    pichichi,
    setGoleadorArgId,
    goleadorArg,
    setGoleadorArg,
    setCapoId,
    capoId,
    capo,
    setCapo,
    setButeur,
    setButeurId,
    buteurId,
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
      setDataLogos(res.data);
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
      {dataLogos && leagueName && (
        <Header
          headerText={leagueName}
          img={
            dataLogos.find((item) => item.name === leagueName)?.logos.dark ||
            dataLogos[16].logos.light
          }
          alt="League Logo"
        />
      )}
      {footballTeam && (
        <section className="hero-wrapper">
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
                setButeur={setButeur}
                setButeurId={setButeurId}
                buteurId={buteurId}
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
                setButeur={setButeur}
                setButeurId={setButeurId}
                buteurId={buteurId}
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
            {console.log("footballteam", footballTeam)}

            <h2 className="team-name">{footballTeam}</h2>

            {standingsData && footballTeam && (
              <Link to="/stats">
                {/* <img
                  className="logo"
                  src={
                    footballTeam === "Real Murcia"
                      ? "./Murcia.png"
                      : footballTeam === "Recreativo Huelva"
                      ? "./Recre.png"
                      : footballTeam === "Hercules"
                      ? "./Hercules.png"
                      : standingsData.find(
                          (item) => item.team.name === footballTeam
                        )
                      ? standingsData.find(
                          (item) => item.team.name === footballTeam
                        ).team.logos[0]?.href
                      : ""
                  }
                  alt="team logo" */}
                {/* /> */}
                <MissingLogosChecks footballTeam={footballTeam} />
              </Link>
            )}
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
export default LaLiga;
