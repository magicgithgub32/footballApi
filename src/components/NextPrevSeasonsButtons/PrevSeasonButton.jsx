import React from "react";
import { topScorers } from "../../data/topScorers";

const PrevSeasonButton = ({
  season,
  setSeason,
  setTopScorerId,
  topScorerId,
  setTopScorer,
  topScorer,
}) => {
  const getPrevSeason = () => {
    if (season > 2001) {
      setSeason(season - 1);
      setTopScorerId(topScorerId - 1);
      setTopScorer(topScorers[topScorerId - 1]);
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
