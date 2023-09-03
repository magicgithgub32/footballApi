import React from "react";
import { topScorers } from "../../data/topScorers";
import { pichichis } from "../../data/pichichis";
import { goleadoresArg } from "../../data/goleadoresArg";
import { capocannonieres } from "../../data/capocannonieres";
import { buteurs } from "../../data/buteurs";

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
  setCapoId,
  capoId,
  setCapo,
  setButeurId,
  buteurId,
  setButeur,
}) => {
  const getNextSeason = () => {
    if (season === 2001) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setCapoId(capoId + 1);
      setCapo(capocannonieres[capoId + 1]);
      // } else if (season > 2001 && season < year - 1) {
      //   setSeason(season + 1);
      //   setPichichiId(pichichiId + 1);
      //   setPichichi(pichichis[pichichiId + 1]);
      //   setTopScorerId(topScorerId + 1);
      //   setTopScorer(topScorers[topScorerId + 1]);
      //   setCapoId(capoId + 1);
      //   setCapo(capocannonieres[capoId + 1]);
      //   setButeurId(buteurId + 1);
      //   setButeur(buteurs[buteurId + 1]);
      //   setGoleadorArgId(goleadorArgId + 1);
      //   setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
    } else if (season > 2001 && season < year) {
      setSeason(season + 1);
      setPichichiId(pichichiId + 1);
      setPichichi(pichichis[pichichiId + 1]);
      setTopScorerId(topScorerId + 1);
      setTopScorer(topScorers[topScorerId + 1]);
      setCapoId(capoId + 1);
      setCapo(capocannonieres[capoId + 1]);
      setButeurId(buteurId + 1);
      setButeur(buteurs[buteurId + 1]);

      setGoleadorArgId(goleadorArgId + 1);
      setGoleadorArg(goleadoresArg[goleadorArgId + 1]);
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
