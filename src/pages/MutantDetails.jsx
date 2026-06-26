import React from "react";
import { useParams, Link } from "react-router-dom";

export default function MutantDetails() {
  const { id } = useParams();

  const mutant = {
    id,
    name: "Logan",
    alias: "Wolverine",
    bio: "A mutant with enhanced senses, regenerative healing, and adamantium claws.",
    power: "Regeneration, heightened senses, combat mastery",
    status: "Active",
    image:
      "https://static0.cbrimages.com/wordpress/wp-content/uploads/2024/05/10-times-wolverine-embraced-his-animal-side.jpg?w=1200&h=675&fit=crop",
    team: "X‑Men",
  };

  return (
    <div className="page">
      <h1>{mutant.alias}</h1>
      <img src={mutant.image} alt={mutant.alias} />
      <p>
        <strong>Name:</strong> {mutant.name}
      </p>
      <p>
        <strong>Status:</strong> {mutant.status}
      </p>
      <p>
        <strong>Power Description:</strong> {mutant.power}
      </p>
      <p>{mutant.bio}</p>
      <p>
        <strong>Team:</strong>{" "}
        <Link to={`/teams/${mutant.team.toLowerCase()}`}>{mutant.team}</Link>
      </p>
    </div>
  );
}
