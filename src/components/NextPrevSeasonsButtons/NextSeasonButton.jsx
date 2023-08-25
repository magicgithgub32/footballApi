import React, { useEffect } from "react";
import { topScorers } from "../../data/topScorers";
import { pichichis } from "../../data/pichichis";

var today = new Date();
var year = today.getFullYear();

const NextSeasonButton = ({
  season,
  setSeason,
  setTopScorerId,
  topScorerId,
  setTopScorer,
  leagueName,
  setPichichiId,
  pichichiId,
  setPichichi,
}) => {
  // const getNextSeason = () => {
  //   if (leagueName === "English Premier League" && season <= year) {
  //     setSeason(season + 1);
  //     setTopScorerId(topScorerId + 1);
  //     setTopScorer(topScorers[topScorerId + 1]);
  //   } else if (leagueName === "Spanish LALIGA" && season <= year) {
  //     setSeason(season + 1);
  //     setPichichiId(pichichiId + 1);
  //     setPichichi(pichichis[pichichiId + 1]);
  //   }
  // };

  const getNextSeason = () => {
    console.log("season at NextSeasonB", season);
    console.log("leagueNameatNextSeasonB:", leagueName);
    if (season <= year) {
      setSeason(season + 1);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
    }
  };

  // const getNextSeasonSp = () => {
  //   if (season < year) {
  //     setSeason(season + 1);
  //     setPichichiId(pichichiId + 1);
  //     setPichichi(pichichis[pichichiId + 1]);
  //   }
  // };

  // useEffect(() => {
  //   if (leagueName === "English Premier League" && season <= year) {
  //     setTopScorerId(topScorerId + 1);
  //     setTopScorer(topScorers[topScorerId + 1]);
  //   }
  // }, [leagueName, season]);

  // useEffect(() => {
  //   if (leagueName === "Spanish LALIGA" && season <= year) {
  //     setPichichiId(pichichiId + 1);
  //     setPichichi(pichichis[pichichiId + 1]);
  //   }
  // }, [leagueName, season]);

  return (
    <>
      {season < year && (
        <button
          type="button"
          className="prev-season-button"
          onClick={getNextSeason}
        >
          NEXT SEASON
        </button>
      )}
    </>
  );
};

export default NextSeasonButton;
