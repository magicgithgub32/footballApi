import { BrowserRouter, Route, Routes } from "react-router-dom";
import React, { createContext, useState } from "react";
import "./App.css";
import Stats from "./pages/Stats/Stats";
import FootballHub from "./pages/FootballHub/FootballHub";
import League from "./pages/League/League";
import MaxScorer from "./pages/MaxScorer/MaxScorer";

export const FootballContext = createContext();

const App = () => {
  const [league, setLeague] = useState("");
  const [leagueName, setLeagueName] = useState("");
  const [standingsData, setStandingsData] = useState(null);
  const [footballTeam, setFootballTeam] = useState("");
  const [teamId, setTeamId] = useState(0);
  const [season, setSeason] = useState(2001);
  const [seasonDisplay, setSeasonDisplay] = useState("");

  const [dataLogos, setDataLogos] = useState("");

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FootballHub />}></Route>
            <Route path="/league" element={<League />}></Route>
            <Route path="*" element={<FootballHub />}></Route>
            <Route path="/stats" element={<Stats />}></Route>
            <Route path="maxScorer" element={<MaxScorer />}></Route>
          </Routes>
        </BrowserRouter>
      </FootballContext.Provider>
    </>
  );
};

export default App;
