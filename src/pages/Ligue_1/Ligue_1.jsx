import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import { FootballContext, TopScorerContext } from "../../App";
import Header from "../../components/Header/Header";
import { Link } from "react-router-dom";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

const Ligue_1 = () => {
  const {
    setStandingsData,
    standingsData,
    setFootballTeam,
    // setTeamLogo,
    teamId,
    setTeamId,
    footballTeam,
    // teamLogo,
    season,
    setSeason,
    leagueName,
    setLeagueName,
    seasonDisplay,
    setSeasonDisplay,
    dataLogos,
    setDataLogos,
  } = useContext(FootballContext);

  const {
    // topScorerId,
    setTopScorerId,
    topScorer,
    setTopScorer,
    setPichichiId,
    setPichichi,
    pichichiId,
    setGoleadorArgId,
    goleadorArg,
    setGoleadorArg,
    setCapoId,
    capoId,
    capo,
    setCapo,
    setButeurId,
    setButeur,
    buteurId,
    buteur,
  } = useContext(TopScorerContext);

  const getFootballFetch = async () => {
    const result = await fetch(
      `https://api-football-standings.azharimm.dev/leagues/fra.1/standings?season=${season}&sort=asc`
    );

    if (result.status === 200) {
      const res = await result.json();
      console.log("res", res);

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
  }, [season]);

  useEffect(() => {
    if (standingsData) {
      const currentFootballTeam = standingsData[teamId]?.team.name;
      setFootballTeam(currentFootballTeam);
    }
  }, [standingsData, teamId]);

  // useEffect(() => {
  //   if (footballTeam) {
  //     if (footballTeam === "Sedan") {
  //       setTeamLogo("./Sedan.png");
  //     } else if (footballTeam === "FC Istres") {
  //       setTeamLogo("./Istres.png");
  //     } else if (footballTeam === "Boulogne") {
  //       setTeamLogo("./Boulogne.png");
  //     } else if (footballTeam === "Arles") {
  //       setTeamLogo("Arles.png");
  //     } else {
  //       setTeamLogo(
  //         standingsData[teamId]?.team.logos[0]?.href || "./etrusco.png"
  //       );
  //     }
  //   }
  // }, [footballTeam]);

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
              {season > 2003 && (
                <PrevSeasonButton
                  season={season}
                  setSeason={setSeason}
                  setPichichiId={setPichichiId}
                  pichichiId={pichichiId}
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
                  setButeurId={setButeurId}
                  setButeur={setButeur}
                  buteurId={buteurId}
                  buteur={buteur}
                />
              )}

              <h2> {seasonDisplay}</h2>

              <NextSeasonButton
                season={season}
                setSeason={setSeason}
                setPichichiId={setPichichiId}
                pichichiId={pichichiId}
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
                setButeurId={setButeurId}
                setButeur={setButeur}
                buteurId={buteurId}
                buteur={buteur}
              />
            </article>

            <Link to="/buteur">
              <button type="submit" className="top-scorer">
                BUTEUR
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            {console.log("standingsData", standingsData)}
            {console.log("rank", rank)}
            {console.log("pichichi", buteur)}

            {console.log("leagueName", leagueName)}
            {console.log("standingsData", standingsData)}
            {console.log("season", season)}
            {console.log("rank", rank)}
            {console.log("games Played", standingsData[teamId].stats[0].value)}
            {console.log("leagueName", leagueName)}

            <h2 className="team-name">{footballTeam}</h2>

            {standingsData && footballTeam && (
              <Link to="/stats">
                <img
                  className="logo"
                  src={
                    footballTeam === "Sedan"
                      ? "./Sedan.png"
                      : footballTeam === "FC Istres"
                      ? "./Istres.png"
                      : footballTeam === "Boulogne"
                      ? "./Boulogne.png"
                      : footballTeam === "Arles"
                      ? "./Arles.png"
                      : standingsData.find(
                          (item) => item.team.name === footballTeam
                        )
                      ? standingsData.find(
                          (item) => item.team.name === footballTeam
                        ).team.logos[0]?.href
                      : ""
                  }
                  alt="team logo"
                />
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

export default Ligue_1;
