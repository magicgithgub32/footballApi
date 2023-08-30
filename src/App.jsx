import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Premier/Premier";
import Stats from "./pages/Stats/Stats";
import TopScorer from "./pages/TopScorer/TopScorer";
import { topScorers } from "./data/topScorers";
import FootballHub from "./pages/FootballHub/FootballHub";
import Premier from "./pages/Premier/Premier";
import LaLiga from "./pages/LaLiga/LaLiga";
import { pichichis } from "./data/pichichis";
import Pichichi from "./pages/Pichichi/Pichichi";
import LigaArgentina from "./pages/LigaArgentina/LigaArgentina";
import GoleadorArg from "./pages/GoleadorArg/GoleadorArg";
import { goleadoresArg } from "./data/goleadoresArg";
import Calcio from "./pages/Calcio/Calcio";

export const FootballContext = createContext();
export const TopScorerContext = createContext();

// export const TopScorerInfoContext = ({ children }) => {
//   const [topScorerData, setTopScorerData] = useState({
//     eng: [
//       {
//         season: 2001,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Thierry Henry"],
//           goals: 24,
//           pic: ["./TH.jpg"],
//         },
//       },
//       {
//         season: 2002,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Ruud Van Nistelrooy"],
//           goals: 24,
//           pic: ["./RVN.jpeg"],
//         },
//       },
//       {
//         season: 2003,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Thierry Henry"],
//           goals: 30,
//           pic: ["./TH.jpg"],
//         },
//       },
//       {
//         season: 2004,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Thierry Henry"],
//           goals: 25,
//           pic: ["./TH.jpg"],
//         },
//       },
//       {
//         season: 2005,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Thierry Henry"],
//           goals: 27,
//           pic: ["./TH.jpg"],
//         },
//       },
//       {
//         season: 2006,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Didier Drogba"],
//           goals: 20,
//           pic: ["./DD.jpeg"],
//         },
//       },
//       {
//         season: 2007,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Cristiano Ronaldo"],
//           goals: 31,
//           pic: ["./CR.jpeg"],
//         },
//       },
//       {
//         season: 2008,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Nicolas Anelka"],
//           goals: 19,
//           pic: ["./NA.jpeg"],
//         },
//       },
//       {
//         season: 2009,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Didier Drogba"],
//           goals: 29,
//           pic: ["./DD.jpeg"],
//         },
//       },
//       {
//         season: 2010,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Berbatov", "Tevez"],
//           goals: 20,
//           pic: ["./DB.jpeg", "./CT.jpeg"],
//         },
//       },
//       {
//         season: 2011,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Robin Van Persie"],
//           goals: 30,
//           pic: ["./RVP.jpeg"],
//         },
//       },
//       {
//         season: 2012,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Robin Van Persie"],
//           goals: 26,
//           pic: ["./RVP.jpeg"],
//         },
//       },
//       {
//         season: 2013,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Luis Suarez"],
//           goals: 31,
//           pic: ["./LS.jpeg"],
//         },
//       },
//       {
//         season: 2014,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Sergio Agüero"],
//           goals: 26,
//           pic: ["./SA.jpeg"],
//         },
//       },
//       {
//         season: 2015,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Harry Kane"],
//           goals: 25,
//           pic: ["./HK.jpeg"],
//         },
//       },
//       {
//         season: 2016,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Harry Kane"],
//           goals: 29,
//           pic: ["./HK.jpeg"],
//         },
//       },
//       {
//         season: 2017,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Mohamed Salah"],
//           goals: 32,
//           pic: ["./MS.jpeg"],
//         },
//       },
//       {
//         season: 2018,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Salah", "Aubameyang"],
//           goals: 22,
//           pic: ["./MS.jpeg", "PEA.jpeg"],
//         },
//       },
//       {
//         season: 2019,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Jamie Vardy"],
//           goals: 23,
//           pic: ["./JV.jpeg"],
//         },
//       },
//       {
//         season: 2020,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Harry Kane"],
//           goals: 23,
//           pic: ["./HK.jpeg"],
//         },
//       },
//       {
//         season: 2021,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Salah", "Song"],
//           goals: 23,
//           pic: ["./MS.jpeg", "./SEM.jpeg"],
//         },
//       },
//       {
//         season: 2022,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Erling Haaland"],
//           goals: 36,
//           pic: ["./EH.jpeg"],
//         },
//       },
//       {
//         season: 2023,
//         leagueName: "Premier League",
//         topScorer: {
//           name: ["Anyone to beat Haaland?"],
//           goals: "?",
//           pic: ["./EH.jpeg"],
//         },
//       },
//     ],

//     esp: [
//       {
//         season: 2001,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Diego Tristán"],
//           goals: 21,
//           pic: ["DT.jpeg"],
//         },
//       },
//       {
//         season: 2002,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Roy Makaay"],
//           goals: 29,
//           pic: ["RM.jpeg"],
//         },
//       },
//       {
//         season: 2003,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Ronaldo"],
//           goals: 24,
//           pic: ["RN.jpeg"],
//         },
//       },
//       {
//         season: 2004,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Diego Forlán"],
//           goals: 25,
//           pic: ["DF.jpeg"],
//         },
//       },
//       {
//         season: 2005,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Samuel Eto'o"],
//           goals: 26,
//           pic: ["SE.jpeg"],
//         },
//       },
//       {
//         season: 2006,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Ruud Van Nistelrooy"],
//           goals: 25,
//           pic: ["VN.jpeg"],
//         },
//       },
//       {
//         season: 2007,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Dani Güiza"],
//           goals: 27,
//           pic: ["DG.jpeg"],
//         },
//       },
//       {
//         season: 2008,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Diego Forlán"],
//           goals: 32,
//           pic: ["DFATL.jpeg"],
//         },
//       },
//       {
//         season: 2009,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 34,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2010,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Cristiano Ronaldo"],
//           goals: 40,
//           pic: ["CRRM.jpeg"],
//         },
//       },
//       {
//         season: 2011,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 50,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2012,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 46,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2013,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Cristiano Ronaldo"],
//           goals: 31,
//           pic: ["CRRM.jpeg"],
//         },
//       },
//       {
//         season: 2014,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Cristiano Ronaldo"],
//           goals: 48,
//           pic: ["CRRM.jpeg"],
//         },
//       },
//       {
//         season: 2015,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Luis Suárez"],
//           goals: 40,
//           pic: ["LSFCB.jpeg"],
//         },
//       },
//       {
//         season: 2016,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 37,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2017,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 34,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2018,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 36,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2019,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 25,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2020,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Lionel Messi"],
//           goals: 30,
//           pic: ["LM.jpeg"],
//         },
//       },
//       {
//         season: 2021,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Karim Benzema"],
//           goals: 27,
//           pic: ["KB.jpeg"],
//         },
//       },
//       {
//         season: 2022,
//         leagueName: "La Liga",
//         topScorer: {
//           name: ["Robert Lewandowski"],
//           goals: 23,
//           pic: ["RL.jpeg"],
//         },
//       },
//     ],
//   });
//   return (
//     <TopScorerInfoContext.Provider value={{ topScorerData }}>
//       {children}
//     </TopScorerInfoContext.Provider>
//   );
// };

const App = () => {
  const [league, setLeague] = useState("esp.1");
  const [leagueName, setLeagueName] = useState("");
  const [leagueLogo, setLeagueLogo] = useState("");
  const [standingsData, setStandingsData] = useState(null);
  const [footballTeam, setFootballTeam] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [season, setSeason] = useState(2001);
  const [seasonDisplay, setSeasonDisplay] = useState("");

  const [topScorerId, setTopScorerId] = useState(0);
  const [topScorer, setTopScorer] = useState(topScorers[topScorerId]);
  const [pichichiId, setPichichiId] = useState(0);
  const [pichichi, setPichichi] = useState(pichichis[pichichiId]);
  const [goleadorArgId, setGoleadorArgId] = useState(0);
  const [goleadorArg, setGoleadorArg] = useState(goleadoresArg[goleadorArgId]);
  const [capoId, setCapoId] = useState(0);
  const [capo, setCapo] = useState(capocannonieres[capoId]);
  return (
    <>
      <FootballContext.Provider
        value={{
          league: league,
          setLeague: setLeague,
          leagueName: leagueName,
          setLeagueName: setLeagueName,
          leagueLogo: leagueLogo,
          setLeagueLogo: setLeagueLogo,
          standingsData: standingsData,
          setStandingsData: setStandingsData,
          footballTeam: footballTeam,
          setFootballTeam: setFootballTeam,
          teamLogo: teamLogo,
          setTeamLogo: setTeamLogo,
          teamId: teamId,
          setTeamId: setTeamId,
          searchQuery: searchQuery,
          setSearchQuery: setSearchQuery,
          season: season,
          setSeason: setSeason,
          seasonDisplay: seasonDisplay,
          setSeasonDisplay: setSeasonDisplay,
        }}
      >
        <TopScorerContext.Provider
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
          }}
        >
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<FootballHub />}></Route>

              <Route path="/eng.1" element={<Premier />}></Route>
              <Route path="/esp.1" element={<LaLiga />}></Route>
              <Route path="/arg.1" element={<LigaArgentina />}></Route>
              <Route path="/ita.1" element={<Calcio />}></Route>
              <Route path="*" element={<Home />}></Route>
              <Route path="/stats" element={<Stats />}></Route>
              <Route path="/topScorer" element={<TopScorer />}></Route>
              <Route path="/pichichi" element={<Pichichi />}></Route>
              <Route path="/goleadorarg" element={<GoleadorArg />}></Route>
            </Routes>
          </BrowserRouter>
        </TopScorerContext.Provider>
      </FootballContext.Provider>
    </>
  );
};

export default App;
