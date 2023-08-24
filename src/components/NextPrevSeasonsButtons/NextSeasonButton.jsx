import React from "react";
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
  setPichichiId,
  pichichiId,
  setPichichi,
}) => {
  const getNextSeason = () => {
    if (season <= year) {
      setSeason(season + 1);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);

      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
    }
  };

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
