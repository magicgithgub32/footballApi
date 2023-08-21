import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import Stats from "./pages/Stats/Stats";
import TopScorer from "./pages/TopScorer/TopScorer";

export const FootballContext = createContext();

const App = () => {
  const [standingsData, setStandingsData] = useState(null);
  const [footballTeam, setFootballTeam] = useState("");
  const [teamLogo, setTeamLogo] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [season, setSeason] = useState(2001);

  return (
    <>
      <FootballContext.Provider
        value={{
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
        }}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="/topscorer" element={<TopScorer />}></Route>
          </Routes>
        </BrowserRouter>
      </FootballContext.Provider>
    </>
  );
};

export default App;
