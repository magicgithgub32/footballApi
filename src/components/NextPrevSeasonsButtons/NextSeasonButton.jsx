import React from "react";
import { topScorers } from "../../data/topScorers";
import { pichichis } from "../../data/pichichis";
import { goleadoresArg } from "../../data/goleadoresArg";

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
  setGoleadorArgId,
  goleadorArgId,
  setGoleadorArg,
}) => {
  const getNextSeason = () => {
    if (season < year - 1) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setGoleadorArgId(goleadorArgId + 1);
      setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
    } else if (season < year) {
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
          onClick={getNextSeason}
        >
          NEXT SEASON
        </button>
      )}
    </>
  );
};

export default NextSeasonButton;
