import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Premier/Premier";
import Stats from "./pages/Stats/Stats";
// import TopScorer from "./pages/TopScorer/TopScorer";
// import { topScorers } from "./data/topScorers";
import FootballHub from "./pages/FootballHub/FootballHub";
// import Premier from "./pages/Premier/Premier";
// import LaLiga from "./pages/LaLiga/LaLiga";
// import { pichichis } from "./data/pichichis";
// import Pichichi from "./pages/Pichichi/Pichichi";
// import LigaArgentina from "./pages/LigaArgentina/LigaArgentina";
// import GoleadorArg from "./pages/GoleadorArg/GoleadorArg";
// import { goleadoresArg } from "./data/goleadoresArg";
// import Calcio from "./pages/Calcio/Calcio";
// import { capocannonieres } from "./data/capocannonieres";
// import Capo from "./pages/Capo/Capo";
// import Ligue_1 from "./pages/Ligue_1/Ligue_1";
// import Buteur from "./pages/Buteur/Buteur";
// import { buteurs } from "./data/buteurs";
import League from "./pages/League/League";
import MaxScorer from "./pages/MaxScorer/MaxScorer";

export const FootballContext = createContext();
// export const TopScorerContext = createContext();

const App = () => {
  const [league, setLeague] = useState("");
  const [leagueName, setLeagueName] = useState("");
  const [standingsData, setStandingsData] = useState(null);
  const [footballTeam, setFootballTeam] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [season, setSeason] = useState(2001);
  const [seasonDisplay, setSeasonDisplay] = useState("");

  const [dataLogos, setDataLogos] = useState("");
  // const [teamLogo, setTeamLogo] = useState("");

  // const [topScorerId, setTopScorerId] = useState(0);
  // const [topScorer, setTopScorer] = useState(topScorers[topScorerId]);
  // const [pichichiId, setPichichiId] = useState(0);
  // const [pichichi, setPichichi] = useState(pichichis[pichichiId]);
  // const [goleadorArgId, setGoleadorArgId] = useState(0);
  // const [goleadorArg, setGoleadorArg] = useState(goleadoresArg[goleadorArgId]);
  // const [capoId, setCapoId] = useState(0);
  // const [capo, setCapo] = useState(capocannonieres[capoId]);
  // const [buteurId, setButeurId] = useState(0);
  // const [buteur, setButeur] = useState(buteurs[buteurId]);
  return (
    <>
      <FootballContext.Provider
        value={{
          league: league,
          setLeague: setLeague,
          leagueName: leagueName,
          setLeagueName: setLeagueName,

          standingsData: standingsData,
          setStandingsData: setStandingsData,
          footballTeam: footballTeam,
          setFootballTeam: setFootballTeam,
          // teamLogo: teamLogo,
          // setTeamLogo: setTeamLogo,
          teamId: teamId,
          setTeamId: setTeamId,

          season: season,
          setSeason: setSeason,
          seasonDisplay: seasonDisplay,
          setSeasonDisplay: setSeasonDisplay,
          dataLogos: dataLogos,
          setDataLogos: setDataLogos,
        }}
      >
        {/* <TopScorerContext.Provider
          value={{
            topScorer: topScorer,
            setTopScorer: setTopScorer,
            topScorerId: topScorerId,
            setTopScorerId: setTopScorerId,
            pichichi: pichichi,
            setPichichi: setPichichi,
            pichichiId: pichichiId,
            setPichichiId: setPichichiId,
            goleadorArg: goleadorArg,
            setGoleadorArg: setGoleadorArg,
            goleadorArgId: goleadorArgId,
            setGoleadorArgId: setGoleadorArgId,
            capoId: capoId,
            setCapoId: setCapoId,
            capo: capo,
            setCapo: setCapo,
            buteurId: buteurId,
            setButeurId: setButeurId,
            buteur: buteur,
            setButeur: setButeur,
          }} */}
        {/* > */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FootballHub />}></Route>

            {/* <Route path="/eng.1" element={<Premier />}></Route>
              <Route path="/esp.1" element={<LaLiga />}></Route>
              <Route path="/ita.1" element={<Calcio />}></Route>
              <Route path="/fra.1" element={<Ligue_1 />}></Route>
              <Route path="/arg.1" element={<LigaArgentina />}></Route> */}
            <Route path="/league" element={<League />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/stats" element={<Stats />}></Route>

            <Route path="maxScorer" element={<MaxScorer />}></Route>

            {/* <Route path="/topScorer" element={<TopScorer />}></Route>
              <Route path="/pichichi" element={<Pichichi />}></Route>
              <Route path="/capo" element={<Capo />}></Route>
              <Route path="/buteur" element={<Buteur />}></Route>
              <Route path="/goleadorarg" element={<GoleadorArg />}></Route> */}
          </Routes>
        </BrowserRouter>
        {/* </TopScorerContext.Provider> */}
      </FootballContext.Provider>
    </>
  );
};

export default App;
