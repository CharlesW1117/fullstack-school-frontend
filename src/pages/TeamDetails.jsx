import React from "react";
import { useParams, Link } from "react-router-dom";

export default function TeamDetails() {
  const { id } = useParams();

  const team = {
    id,
    name: "X‑Men",
    description:
      "A team of mutants dedicated to peaceful coexistence between humans and mutants.",
    base: "Xavier's Mansion",
    image: "https://upload.wikimedia.org/wikipedia/en/3/35/X-Men_Logo.svg",
    mutants: ["Wolverine", "Storm", "Cyclops", "Jean Grey"],
  };

  return (
    <div className="page">
      <h1>{team.name}</h1>
      <img src={team.image} alt={team.name} />
      <p>
        <strong>Base of Operations:</strong> {team.base}
      </p>
      <p>{team.description}</p>

      <h2>Mutants in this Team</h2>
      <ul>
        {team.mutants.map((name) => (
          <li key={name}>
            <Link to={`/mutants/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
