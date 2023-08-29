import React from "react";
import "./TopScorerCard.css";

const GoleadorArgCard = ({ goleadorArg }) => {
  return (
    <article className="topscorer-article">
      <div className="name-goals">
        {goleadorArg.name && goleadorArg.name.length > 1 ? (
          goleadorArg.name.map((playerName, index) => (
            <p key={index}>{playerName} -</p>
          ))
        ) : (
          <p>{goleadorArg.name}</p>
        )}
        <p>{goleadorArg.goals} Goals</p>
      </div>

      {goleadorArg.name && goleadorArg.name.length > 1 ? (
        goleadorArg.pic.map((playerPic, index) => (
          <a href={goleadorArg.vid} target="_blank" rel="noreferrer">
            <img
              className="top-scorer-pic-two"
              key={index}
              src={playerPic}
              alt="Top Scorer"
            />
          </a>
        ))
      ) : (
        <a href={goleadorArg.vid} target="_blank" rel="noreferrer">
          <img
            className="top-scorer-pic"
            src={goleadorArg.pic}
            alt="top Scorer"
          />
        </a>
      )}
    </article>
  );
};

export default GoleadorArgCard;
