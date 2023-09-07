import React from "react";

const PrevSeasonButton = ({ season, setSeason }) => {
  const getPrevSeason = () => {
    setSeason(season - 1);
  };

  return (
    <>
      {season > 2002 && (
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
