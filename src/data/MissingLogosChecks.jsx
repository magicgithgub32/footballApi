import React, { useContext } from "react";
import { FootballContext } from "../App";

const MissingLogosChecks = ({ footballTeam }) => {
  const { standingsData } = useContext(FootballContext);

  const getLogoSrc = () =>
    footballTeam === "Sedan"
      ? "./Sedan.png"
      : footballTeam === "FC Istres"
      ? "./Istres.png"
      : footballTeam === "Boulogne"
      ? "./Boulogne.png"
      : footballTeam === "Arles"
      ? "./Arles.png"
      : footballTeam === "Murcia"
      ? "./Murcia.png"
      : footballTeam === "Recreativo Huelva"
      ? "./Recre.png"
      : footballTeam === "Hercules"
      ? "./Hercules.png"
      : footballTeam === "Piacenza"
      ? "./Piacenza.png"
      : footballTeam === "Venezia"
      ? "./Venezia.png"
      : footballTeam === "Ancona"
      ? "./Ancona.png"
      : footballTeam === "Messina"
      ? "./Messina.png"
      : footballTeam === "Treviso"
      ? "./Treviso.png"
      : footballTeam === "Huracán de Tres Arroyos"
      ? "./Huracan.png"
      : footballTeam === "Tiro Federal"
      ? "./Tiro.png"
      : footballTeam === "San Martín de Tucumán"
      ? "./San_martin_tucuman.png"
      : footballTeam === "Energie Cottbus"
      ? "./Energie.png"
      : footballTeam === "Alemannia Aachen"
      ? "./Aachen.png"
      : standingsData.find((item) => item.team.name === footballTeam)
      ? standingsData.find((item) => item.team.name === footballTeam).team
          .logos[0]?.href
      : "";
  const logoSrc = getLogoSrc();
  return <img className="logo" src={logoSrc} alt="team logo" />;
};

export default MissingLogosChecks;
