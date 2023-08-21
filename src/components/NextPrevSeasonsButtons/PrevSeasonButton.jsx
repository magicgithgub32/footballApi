import React from "react";

const PrevSeasonButton = ({ season, setSeason }) => {
  const getPrevSeason = () => {
    if (season > 2001) {
      setSeason(season - 1);
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
