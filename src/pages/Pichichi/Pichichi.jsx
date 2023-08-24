import React, { useContext } from "react";
import "./Pichichi.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

const Pichichi = () => {
  const {
    season,
    leagueName,
    pichichi,
    setSeason,
    setPichichi,
    setPichichiId,
    pichichiId,
  } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} ${leagueName} TOP SCORER`}
        />
        <HomeButton />
      </article>

      <article className="topscorer-article">
        <div className="topscorer-card">
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
              <img key={index} src={playerPic} alt="Top Scorer" />
            ))
          ) : (
            <img src={pichichi.pic} alt="top Scorer" />
          )}
        </div>
      </article>
      <article className="season-buttons">
        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
        />

        <NextSeasonButton
          season={season}
          setSeason={setSeason}
          setPichichiId={setPichichiId}
          pichichiId={pichichiId}
          setPichichi={setPichichi}
        />
      </article>
    </section>
  );
};

export default Pichichi;
