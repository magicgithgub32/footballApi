import React from "react";

var today = new Date();
var year = today.getFullYear();

const NextSeasonButton = ({ season, setSeason }) => {
  const getNextSeason = () => {
    setSeason(season + 1);
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
