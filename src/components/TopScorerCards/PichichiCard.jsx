import React from "react";
import "./TopScorerCard.css";

const PichichiCard = ({ pichichi }) => {
  return (
    <article className="topscorer-article">
      <div className="name-goals">
        {pichichi.name.length > 1 ? (
          pichichi.name.map((playerName, index) => (
            <p key={index}>{playerName} -</p>
          ))
        ) : (
          <p>{pichichi.name[0]}</p>
        )}
        <p>{pichichi.goals} Goals</p>
      </div>
      {pichichi.name.length > 1 ? (
        pichichi.pic.map((playerPic, index) => (
          <a href={pichichi.vid} target="_blank" rel="noreferrer">
            <img
              className="top-scorer-pic-two"
              key={index}
              src={playerPic}
              alt="Top Scorer"
            />
          </a>
        ))
      ) : (
        <a href={pichichi.vid} target="_blank" rel="noreferrer">
          <img className="top-scorer-pic" src={pichichi.pic} alt="top Scorer" />
        </a>
      )}
    </article>
  );
};

export default PichichiCard;
