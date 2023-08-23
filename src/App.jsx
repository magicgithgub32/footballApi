import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Premier/Premier";
import Stats from "./pages/Stats/Stats";
import TopScorer from "./pages/TopScorer/TopScorer";
import { topScorers } from "./data/topScorers";
import ReHome from "./pages/ReHome/Rehome";
import FootballHub from "./pages/FootballHub/FootballHub";
import Premier from "./pages/Premier/Premier";
import LaLiga from "./pages/LaLiga/LaLiga";

export const FootballContext = createContext();

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
  const [topScorerId, setTopScorerId] = useState(0);
  const [topScorer, setTopScorer] = useState(topScorers[topScorerId]);

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
          topScorer: topScorer,
          setTopScorer: setTopScorer,
          topScorerId: topScorerId,
          setTopScorerId: setTopScorerId,
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FootballHub />}></Route>

            <Route path="/premier" element={<Premier />}></Route>
            <Route path="/laliga" element={<LaLiga />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="/topScorer" element={<TopScorer />}></Route>
          </Routes>
        </BrowserRouter>
      </FootballContext.Provider>
    </>
  );
};

export default App;
