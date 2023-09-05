// import React, { useContext, useEffect } from "react";
// import "../Premier/Premier.css";
// import Header from "../../components/Header/Header";
// import Footer from "../../components/Footer/Footer";
// import { FootballContext, TopScorerContext } from "../../App";
// import { Link } from "react-router-dom";
// import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
// import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
// import HomeButton from "../../components/HomeButton/HomeButton";

// const Calcio = () => {
//   const {
//     setStandingsData,
//     standingsData,
//     setFootballTeam,
//     setTeamLogo,
//     teamId,
//     setTeamId,
//     footballTeam,
//     teamLogo,
//     season,
//     setSeason,
//     seasonDisplay,
//     setSeasonDisplay,
//     leagueName,
//     setLeagueName,
//     setLeagueLogo,
//     leagueLogo,
//     leagueId,
//     dataLogos,
//   } = useContext(FootballContext);

//   const {
//     topScorerId,
//     setTopScorerId,
//     setTopScorer,
//     setPichichiId,
//     setPichichi,
//     pichichiId,
//     goleadorArgId,
//     setGoleadorArgId,
//     setGoleadorArg,
//     setCapoId,
//     capoId,
//     capo,
//     setCapo,
//     setButeur,
//     setButeurId,
//     buteurId,
//   } = useContext(TopScorerContext);

//   console.log("leagueId", leagueId);

//   // const getFootballFetch = async () => {
//   //   const result = await fetch(
//   //     `https://api-football-standings.azharimm.dev/leagues/ita.1/standings?season=${season}&sort=asc`
//   //   );

//   //   if (result.status === 200) {
//   //     const res = await result.json();
//   //     setStandingsData(res.data.standings);
//   //     setLeagueName(res.data.name);
//   //     setSeasonDisplay(res.data.seasonDisplay);
//   //   } else {
//   //     setStandingsData(null);
//   //   }
//   // };

//   // const getLeagueLogoFetch = async () => {
//   //   const result = await fetch(
//   //     "https://api-football-standings.azharimm.dev/leagues"
//   //   );

//   //   if (result.status === 200) {
//   //     const res = await result.json();

//   //     setLeagueLogo(res.data[9].logos);

//   //     //Cambiar este estado de arriba por setDataLogos (res.data)
//   //   }
//   // };

//   // useEffect(() => {
//   //   getLeagueLogoFetch();
//   // }, []);

//   // useEffect(() => {
//   //   getFootballFetch();
//   // }, [season]);

//   console.log("footballTeam", footballTeam);
//   console.log("standingsData", standingsData);

//   useEffect(() => {
//     if (standingsData) {
//       const currentFootballTeam = standingsData[teamId]?.team.name;
//       setFootballTeam(currentFootballTeam);
//     }
//   }, [standingsData, teamId]);

//   useEffect(() => {
//     if (footballTeam) {
//       if (footballTeam === "Piacenza") {
//         setTeamLogo("./Piacenza.png");
//       } else if (footballTeam === "Venezia") {
//         setTeamLogo("./Venezia.png");
//       } else if (footballTeam === "Ancona") {
//         setTeamLogo("./Ancona.png");
//       } else if (footballTeam === "Messina") {
//         setTeamLogo("./Messina.png");
//       } else if (footballTeam === "Treviso") {
//         setTeamLogo("./Treviso.png");
//       } else {
//         setTeamLogo(
//           standingsData[teamId]?.team.logos[0]?.href || "./etrusco.png"
//         );
//       }
//     }
//   }, [footballTeam]);

//   const getPreviousTeam = () => {
//     if (teamId > 0) {
//       setTeamId(teamId - 1);
//     }
//   };

//   const getNextTeam = () => {
//     if (teamId < 19) {
//       setTeamId(teamId + 1);
//     }
//   };

//   const rank = standingsData && standingsData[teamId] ? teamId + 1 : null;

//   var today = new Date();
//   var year = today.getFullYear();

//   return (
//     <>
//       <Header
//         headerText={leagueName}
//         // img={leagueLogo ? leagueLogo.light : ""}
//         img={leagueName === dataLogos.name ? dataLogos.logos.dark : ""}
//         alt="League Logo"
//       />

//       {footballTeam && (
//         <section className="hero-wrapper">
//           <article className="seasons-scorer-article">
//             <HomeButton />
//             <article className="season-buttons">
//               <PrevSeasonButton
//                 season={season}
//                 setSeason={setSeason}
//                 setTopScorerId={setTopScorerId}
//                 topScorerId={topScorerId}
//                 setTopScorer={setTopScorer}
//                 leagueName={leagueName}
//                 setPichichiId={setPichichiId}
//                 setPichichi={setPichichi}
//                 goleadorArgId={goleadorArgId}
//                 setGoleadorArgId={setGoleadorArgId}
//                 setGoleadorArg={setGoleadorArg}
//                 setCapoId={setCapoId}
//                 capoId={capoId}
//                 capo={capo}
//                 setCapo={setCapo}
//                 setButeur={setButeur}
//                 setButeurId={setButeurId}
//                 buteurId={buteurId}
//               />

//               <h2>{seasonDisplay}</h2>

//               <NextSeasonButton
//                 season={season}
//                 setSeason={setSeason}
//                 setTopScorerId={setTopScorerId}
//                 topScorerId={topScorerId}
//                 setTopScorer={setTopScorer}
//                 leagueName={leagueName}
//                 setPichichiId={setPichichiId}
//                 pichichiId={pichichiId}
//                 setPichichi={setPichichi}
//                 goleadorArgId={goleadorArgId}
//                 setGoleadorArgId={setGoleadorArgId}
//                 setGoleadorArg={setGoleadorArg}
//                 setCapoId={setCapoId}
//                 capoId={capoId}
//                 capo={capo}
//                 setCapo={setCapo}
//                 setButeur={setButeur}
//                 setButeurId={setButeurId}
//                 buteurId={buteurId}
//               />
//             </article>

//             <Link to="/capo">
//               <button type="submit" className="top-scorer">
//                 CAPO CANNO NIERE
//               </button>
//             </Link>
//           </article>

//           <article className="name-logo-wrapper">
//             {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

//             <h2 className="team-name">{footballTeam}</h2>
//             <Link to="/stats">
//               <img className="logo" src={teamLogo} alt="logo" />
//               {/* hacer lo mismo con el logo aquí que con el logo de la liga */}
//               {/* <img className="logo" src={} */}
//             </Link>
//           </article>
//           <article className="next-prev-buttons">
//             {teamId > 0 && (
//               <button
//                 type="submit"
//                 className="prevButton"
//                 onClick={getPreviousTeam}
//               >
//                 Prev Club
//               </button>
//             )}

//             {teamId < standingsData.length - 1 && (
//               <button
//                 type="submit"
//                 className="nextButton"
//                 onClick={getNextTeam}
//               >
//                 Next Club
//               </button>
//             )}
//           </article>
//         </section>
//       )}
//     </>
//   );
// };

// export default Calcio;

import React, { useContext, useEffect } from "react";
import "../Premier/Premier.css";
import Header from "../../components/Header/Header";
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
    // setTeamLogo,
    teamId,
    setTeamId,
    footballTeam,
    // teamLogo,
    season,
    setSeason,
    seasonDisplay,
    setSeasonDisplay,
    leagueName,
    setLeagueName,
    dataLogos,
    setDataLogos,
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
    setButeur,
    setButeurId,
    buteurId,
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
      setDataLogos(res.data);
    }
  };

  useEffect(() => {
    getLeagueLogoFetch();
  }, []);

  useEffect(() => {
    getFootballFetch();
  }, [season]);

  console.log("footballTeam", footballTeam);
  console.log("standingsData", standingsData);
  console.log("dataLogos", dataLogos);

  useEffect(() => {
    if (standingsData) {
      const currentFootballTeam = standingsData[teamId]?.team.name;
      setFootballTeam(currentFootballTeam);
    }
  }, [standingsData, teamId]);

  // useEffect(() => {
  //   if (footballTeam) {
  //     if (footballTeam === "Piacenza") {
  //       setTeamLogo("./Piacenza.png");
  //     } else if (footballTeam === "Venezia") {
  //       setTeamLogo("./Venezia.png");
  //     } else if (footballTeam === "Ancona") {
  //       setTeamLogo("./Ancona.png");
  //     } else if (footballTeam === "Messina") {
  //       setTeamLogo("./Messina.png");
  //     } else if (footballTeam === "Treviso") {
  //       setTeamLogo("./Treviso.png");
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
            dataLogos.find((item) => item.name === leagueName)?.logos.light ||
            ""
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

            <Link to="/capo">
              <button type="submit" className="top-scorer">
                CAPO CANNO NIERE
              </button>
            </Link>
          </article>

          <article className="name-logo-wrapper">
            {rank === 1 && season < year ? <p>🍾 CHAMPION 🍾</p> : rank}

            <h2 className="team-name">{footballTeam}</h2>
            {standingsData && footballTeam && (
              <Link to="/stats">
                <img
                  className="logo"
                  src={
                    footballTeam === "Piacenza"
                      ? "./Piacenza.png"
                      : footballTeam === "Venezia"
                      ? "./Venezia.png"
                      : footballTeam === "Ancona"
                      ? "./Ancona.png"
                      : footballTeam === "Messina"
                      ? "./Messina.png"
                      : footballTeam === "Treviso"
                      ? "./Treviso.png"
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

export default Calcio;
