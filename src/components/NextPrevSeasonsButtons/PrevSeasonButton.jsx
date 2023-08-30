import React from "react";
import { topScorers } from "../../data/topScorers";
import { pichichis } from "../../data/pichichis";
import { goleadoresArg } from "../../data/goleadoresArg";

const PrevSeasonButton = ({
  season,
  setSeason,
  seasonArg,
  setSeasonArg,
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
  const getPrevSeason = () => {
    if (season > 2002) {
      setSeason(season - 1);
      setTopScorerId(topScorerId - 1);
      setTopScorer(topScorers[topScorerId - 1]);
      setPichichiId(pichichiId - 1);
      setPichichi(pichichis[pichichiId - 1]);
      setGoleadorArgId(goleadorArgId - 1);
      setGoleadorArg(goleadoresArg[goleadorArgId - 1]);
    } else if (season === 2002) {
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
