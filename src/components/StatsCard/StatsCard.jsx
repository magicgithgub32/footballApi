import React from "react";
import "./StatsCard.css";

const StatsCard = ({ footballTeam, standingsData, teamId, rank }) => {
  const getLogoSrc = () => {
    const team = standingsData.find((item) => item.team.name === footballTeam);
    return team ? team.team.logos[0]?.href : "";
  };

  const logoSrc = getLogoSrc();

  return (
    <section className="stats-card">
      <article className="name-logo-stats">
        <img className="logo-stats" src={logoSrc} alt="logo" />
        <h4>{footballTeam.toUpperCase()}</h4>
        <p>{rank == 1 ? "🏆" : rank}</p>
      </article>

      <p>⚽️ {standingsData[teamId].stats[0].displayName} ⚽️</p>
      <p>{standingsData[teamId].stats[0].value}</p>
      <p>👍 {standingsData[teamId].stats[3].displayName} 👍</p>
      <p>{standingsData[teamId].stats[3].value}</p>
      <p>✌️ {standingsData[teamId].stats[7].displayName} ✌️</p>
      <p>{standingsData[teamId].stats[7].value}</p>
      <p>👉 {standingsData[teamId].stats[6].displayName} 👈</p>
      <p>{standingsData[teamId].stats[6].value}</p>
      <p>👎 {standingsData[teamId].stats[1].displayName} 👎</p>
      <p>{standingsData[teamId].stats[1].value}</p>
    </section>
  );
};

export default StatsCard;
