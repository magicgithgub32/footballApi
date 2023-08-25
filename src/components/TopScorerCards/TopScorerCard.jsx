import React from "react";
import "./TopScorerCard.css";

const TopScorerCard = ({ topScorer }) => {
  return (
    <article className="topscorer-article">
      <div className="name-goals">
        {topScorer.name.length > 1 ? (
          topScorer.name.map((playerName, index) => (
            <p key={index}>{playerName} -</p>
          ))
        ) : (
          <p>{topScorer.name[0]}</p>
        )}
        <p>{topScorer.goals} Goals</p>
      </div>
      <div className="topscorer-card">
        {topScorer.name.length > 1 ? (
          topScorer.pic.map((playerPic, index) => (
            <img key={index} src={playerPic} alt="Top Scorer" />
          ))
        ) : (
          <>
            //? AÑADIR CLAVE VID A CADA TOPSCORER y ARREGLAR CSS
            <a href={topSCorer.vid}>
              <img
                className="top-scorer-pic"
                src={topScorer.pic}
                alt="top Scorer"
              />
            </a>
          </>
        )}
      </div>
    </article>
  );
};

export default TopScorerCard;
