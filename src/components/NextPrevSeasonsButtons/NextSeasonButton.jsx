import React from "react";

const NextSeasonButton = ({ season, setSeason }) => {
  const getNextSeason = () => {
    if (season < 2023) {
      setSeason(season + 1);
    }
  };

  return (
    <>
      {season < 2023 && (
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
