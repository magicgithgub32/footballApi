import React, { useContext } from "react";
import "./TopScorer.css";
import Header from "../../components/Header/Header";
import { FootballContext } from "../../App";
import HomeButton from "../../components/HomeButton/HomeButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";

const TopScorer = () => {
  const {
    season,
    topScorer,
    setSeason,
    setTopScorerId,
    topScorerId,
    setTopScorer,
  } = useContext(FootballContext);
  return (
    <section>
      <article className="header-season">
        <Header
          headerText={`${season} - ${season + 1} PREMIER LEAGUE TOP SCORER`}
        />
        <HomeButton />
      </article>

      <article className="topscorer-article">
        <div className="topscorer-card">
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
          {topScorer.name.length > 1 ? (
            topScorer.pic.map((playerPic, index) => (
              <img key={index} src={playerPic} alt="Top Scorer" />
            ))
          ) : (
            <img src={topScorer.pic} alt="top Scorer" />
          )}
        </div>
      </article>

      <article className="season-buttons">
        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        />

        <NextSeasonButton
          season={season}
          setSeason={setSeason}
          setTopScorerId={setTopScorerId}
          topScorerId={topScorerId}
          setTopScorer={setTopScorer}
        />
      </article>
    </section>
  );
};

export default TopScorer;
