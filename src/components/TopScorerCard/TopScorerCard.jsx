import React from "react";
import "./TopScorerCard.css";

const TopScorerCard = ({ topScorer }) => {
  return (
    <article className="topscorer-article">
      <div className="name-goals">
        {topScorer.name && topScorer.name.length > 1 ? (
          topScorer.name.map((playerName, index) => (
            <p key={index}>{playerName} -</p>
          ))
        ) : (
          <p>{topScorer.name}</p>
        )}
        <p>{topScorer.goals} Goals</p>
      </div>

      {topScorer.name && topScorer.name.length > 1 ? (
        topScorer.pic.map((playerPic, index) => (
          <a href={topScorer.vid} target="_blank" rel="noreferrer">
            <img
              className="top-scorer-pic-two"
              key={index}
              src={playerPic}
              alt="Top Scorer"
            />
          </a>
        ))
      ) : (
        <a href={topScorer.vid} target="_blank" rel="noreferrer">
          <img
            className="top-scorer-pic"
            src={topScorer.pic}
            alt="top Scorer"
          />
        </a>
      )}
    </article>
  );
};

export default TopScorerCard;
