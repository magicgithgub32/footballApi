import React from "react";
import "./TopScorerCard.css";

const TopScorerCard = ({ topScorers, leagueName, season }) => {
  return (
    <>
      {topScorers.map((topScorer, index) => {
        if (topScorer.league === leagueName && topScorer.season === season) {
          return (
            <article className="topscorer-article" key={index}>
              <div className="name-goals">
                {topScorer.name && topScorer.name.length > 1 ? (
                  topScorer.name.map((playerName, nameIndex) => (
                    <p key={nameIndex}>{playerName} -</p>
                  ))
                ) : (
                  <p>{topScorer.name}</p>
                )}
                <p>{topScorer.goals} Goals</p>
              </div>

              {topScorer.name && topScorer.name.length > 1 ? (
                topScorer.pic.map((playerPic, picIndex) => (
                  <a
                    href={topScorer.vid}
                    target="_blank"
                    rel="noreferrer"
                    key={picIndex}
                  >
                    <img
                      className="top-scorer-pic-two"
                      src={playerPic}
                      alt="Top Scorer"
                    />
                  </a>
                ))
              ) : (
                <a
                  href={topScorer.vid}
                  target="_blank"
                  rel="noreferrer"
                  key={index}
                >
                  <img
                    className="top-scorer-pic"
                    src={topScorer.pic}
                    alt="Top Scorer"
                  />
                </a>
              )}
            </article>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default TopScorerCard;
