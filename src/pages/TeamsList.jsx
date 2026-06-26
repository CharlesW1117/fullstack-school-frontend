import React from "react";
import { Link } from "react-router-dom";

export default function TeamsList() {
  const teams = [
    {
      id: 1,
      name: "X‑Men",
      base: "Xavier's Mansion",
      image:
        "https://i.pinimg.com/736x/26/7e/f6/267ef6a890cd8d196ca095ff7e2d17db.jpg",
    },
    {
      id: 2,
      name: "Brotherhood of Mutants",
      base: "Asteroid M",
      image:
        "https://www.sideshow.com/cdn-cgi/image/quality=90,f=auto/https://www.sideshow.com/storage/product-images/500495F/magneto-and-the-brotherhood-of-mutants_marvel_feature.jpg",
    },
    {
      id: 3,
      name: "Hellfire Club",
      base: "New York City",
      image: "https://upload.wikimedia.org/wikipedia/en/5/51/Xml210.jpg",
    },
  ];

  return (
    <div className="page">
      <h1>Mutant Teams</h1>
      <div className="grid">
        {teams.map((team) => (
          <div key={team.id} className="card">
            <img src={team.image} alt={team.name} />
            <h2>{team.name}</h2>
            <p>Base: {team.base}</p>
            <Link to={`/teams/${team.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
