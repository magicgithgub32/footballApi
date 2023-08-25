import React from "react";
import { topScorers } from "../../data/topScorers";
import { pichichis } from "../../data/pichichis";

const PrevSeasonButton = ({
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
  // const getPrevSeason = () => {
  //   if (season > 2001 && leagueName === "English Premier League") {
  //     setSeason(season - 1);
  //     setTopScorerId(topScorerId - 1);
  //     setTopScorer(topScorers[topScorerId - 1]);
  //   } else if (season > 2001 && leagueName === "Spanish LALIGA") {
  //     setSeason(season - 1);
  //     setPichichiId(pichichiId - 1);
  //     setPichichi(pichichis[pichichiId - 1]);
  //   }
  // };

  const getPrevSeason = () => {
    if (season > 2001) {
      setSeason(season - 1);
      setTopScorerId(topScorerId - 1);
      setTopScorer(topScorers[topScorerId - 1]);
      setPichichiId(pichichiId - 1);
      setPichichi(pichichis[pichichiId - 1]);
    }
  };

  return (
    <>
      {season > 2001 && (
        <button
          type="button"
          className="prev-season-button"
          onClick={getPrevSeason}
        >
          PREV SEASON
        </button>
      )}
    </>
  );
};

export default PrevSeasonButton;
