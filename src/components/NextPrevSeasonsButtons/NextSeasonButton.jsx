import React from "react";
import { topScorers } from "../../data/topScorers";

var today = new Date();
var year = today.getFullYear();

const NextSeasonButton = ({
  season,
  setSeason,
  setTopScorerId,
  topScorerId,
  setTopScorer,
}) => {
  const getNextSeason = () => {
    if (season <= year) {
      setSeason(season + 1);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
    }
  };

  return (
    <>
      <button
        type="button"
        className="prev-season-button"
        onClick={getNextSeason}
      >
        NEXT SEASON
      </button>
    </>
  );
};

export default NextSeasonButton;
