// import React, { useContext } from "react";
// import "./MaxScorer.css";
// import { FootballContext, TopScorerContext } from "../../App";
// import Header from "../../components/Header/Header";
// import HomeButton from "../../components/HomeButton/HomeButton";
// import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";
// import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
// import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";

// const MaxScorer = () => {
//   const { season, setSeason, leagueName } = useContext(FootballContext);
//   const {
//     setTopScorerId,
//     topScorerId,
//     setTopScorer,
//     setPichichiId,
//     pichichi,
//     pichichiId,
//     setPichichi,
//     setGoleadorArg,
//     setGoleadorArgId,
//     goleadorArgId,
//     capo,
//     setCapo,
//     setCapoId,
//     capoId,
//     setButeur,
//     setButeurId,
//     buteurId,
//   } = useContext(TopScorerContext);

//   return (
//     <section>
//       <article className="header-season">
//         <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

//         <h1 className="top-scorer-title">TOP-SCORER</h1>

//         {console.log("season", season)}
//         {console.log("leagueName", leagueName)}
//         {console.log("season", season)}
//         {console.log("pichichiId", pichichiId)}
//         {console.log("topScorerId", topScorerId)}
//         {console.log("capoId", capoId)}
//         {console.log("buteurId", buteurId)}
//         {console.log("goleadorArgId", goleadorArgId)}

//         <HomeButton />
//       </article>

//       <TopScorerCard topScorer={pichichi} />

//       <article className="season-buttons">
//         <PrevSeasonButton
//           season={season}
//           setSeason={setSeason}
//           setTopScorerId={setTopScorerId}
//           topScorerId={topScorerId}
//           setTopScorer={setTopScorer}
//           setPichichiId={setPichichiId}
//           pichichiId={pichichiId}
//           setPichichi={setPichichi}
//           setGoleadorArgId={setGoleadorArgId}
//           goleadorArgId={goleadorArgId}
//           setGoleadorArg={setGoleadorArg}
//           setCapo={setCapo}
//           setCapoId={setCapoId}
//           capoId={capoId}
//           setButeur={setButeur}
//           setButeurId={setButeurId}
//           buteurId={buteurId}
//         />
//         <NextSeasonButton
//           season={season}
//           setSeason={setSeason}
//           setTopScorerId={setTopScorerId}
//           topScorerId={topScorerId}
//           setTopScorer={setTopScorer}
//           setPichichiId={setPichichiId}
//           pichichiId={pichichiId}
//           setPichichi={setPichichi}
//           setGoleadorArgId={setGoleadorArgId}
//           goleadorArgId={goleadorArgId}
//           setGoleadorArg={setGoleadorArg}
//           setCapo={setCapo}
//           setCapoId={setCapoId}
//           capoId={capoId}
//           setButeur={setButeur}
//           setButeurId={setButeurId}
//           buteurId={buteurId}
//         />
//       </article>
//     </section>
//   );
// };

// export default MaxScorer;

import React, { useContext, useState } from "react";
import "./MaxScorer.css";
import { FootballContext } from "../../App";
import Header from "../../components/Header/Header";
import HomeButton from "../../components/HomeButton/HomeButton";
import TopScorerCard from "../../components/TopScorerCard/TopScorerCard";
import PrevSeasonButton from "../../components/NextPrevSeasonsButtons/PrevSeasonButton";
import NextSeasonButton from "../../components/NextPrevSeasonsButtons/NextSeasonButton";
import { topScorersData } from "../../data/topScorersData";

const MaxScorer = () => {
  const { season, setSeason, leagueName } = useContext(FootballContext);
  // const {
  //   setTopScorerId,
  //   topScorerId,
  //   setTopScorer,
  //   setPichichiId,
  //   pichichi,
  //   pichichiId,
  //   setPichichi,
  //   setGoleadorArg,
  //   setGoleadorArgId,
  //   goleadorArgId,
  //   capo,
  //   setCapo,
  //   setCapoId,
  //   capoId,
  //   setButeur,
  //   setButeurId,
  //   buteurId,
  // } = useContext(TopScorerContext);

  const [topScorers, setTopScorers] = useState(topScorersData);

  return (
    <section>
      <article className="header-season">
        <Header headerText={`${season} - ${season + 1} ${leagueName}`} />

        <h1 className="top-scorer-title">TOP-SCORER</h1>

        {console.log("season", season)}
        {console.log("leagueName", leagueName)}
        {console.log("season", season)}

        <HomeButton />
      </article>

      <TopScorerCard
        topScorers={topScorers}
        leagueName={leagueName}
        season={season}
      />

      <article className="season-buttons">
        <PrevSeasonButton
          season={season}
          setSeason={setSeason}
          // setTopScorerId={setTopScorerId}
          // topScorerId={topScorerId}
          // setTopScorer={setTopScorer}
          // setPichichiId={setPichichiId}
          // pichichiId={pichichiId}
          // setPichichi={setPichichi}
          // setGoleadorArgId={setGoleadorArgId}
          // goleadorArgId={goleadorArgId}
          // setGoleadorArg={setGoleadorArg}
          // setCapo={setCapo}
          // setCapoId={setCapoId}
          // capoId={capoId}
          // setButeur={setButeur}
          // setButeurId={setButeurId}
          // buteurId={buteurId}
        />
        <NextSeasonButton
          season={season}
          setSeason={setSeason}
          // setTopScorerId={setTopScorerId}
          // topScorerId={topScorerId}
          // setTopScorer={setTopScorer}
          // setPichichiId={setPichichiId}
          // pichichiId={pichichiId}
          // setPichichi={setPichichi}
          // setGoleadorArgId={setGoleadorArgId}
          // goleadorArgId={goleadorArgId}
          // setGoleadorArg={setGoleadorArg}
          // setCapo={setCapo}
          // setCapoId={setCapoId}
          // capoId={capoId}
          // setButeur={setButeur}
          // setButeurId={setButeurId}
          // buteurId={buteurId}
        />
      </article>
    </section>
  );
};

export default MaxScorer;
