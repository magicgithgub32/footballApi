import React from "react";
import { pichichis } from "../../data/pichichis";
import { topScorers } from "../../data/topScorers";

const PrevSeasonButtonSp = ({
  season,
  setSeason,
  setPichichiId,
  pichichiId,
  setPichichi,
  setTopScorerId,
  topScorerId,
  setTopScorer,
}) => {
  const getPrevSeasonSp = () => {
    if (season > 2001) {
      setSeason(season - 1);
      setPichichiId(pichichiId - 1);
      setPichichi(pichichis[pichichiId - 1]);
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
          onClick={getPrevSeasonSp}
        >
          PREV SEASON
        </button>
      )}
    </>
  );
};

export default PrevSeasonButtonSp;
