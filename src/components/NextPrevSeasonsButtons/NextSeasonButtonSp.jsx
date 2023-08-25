import React from "react";
import { pichichis } from "../../data/pichichis";
import { topScorers } from "../../data/topScorers";

var today = new Date();
var year = today.getFullYear();

const NextSeasonButtonSp = ({
  season,
  setSeason,
  setPichichiId,
  pichichiId,
  setPichichi,
  setTopScorerId,
  topScorerId,
  setTopScorer,
}) => {
  const getNextSeasonSp = () => {
    if (season <= year) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
    }
  };

  return (
    <>
      {season < year && (
        <button
          type="button"
          className="prev-season-button"
          onClick={getNextSeasonSp}
        >
          NEXT SEASON
        </button>
      )}
    </>
  );
};

export default NextSeasonButtonSp;
