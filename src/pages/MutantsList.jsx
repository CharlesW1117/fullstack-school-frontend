import React from "react";
import { Link } from "react-router-dom";

export default function MutantsList() {
  const mutants = [
    { id: 1, name: "Logan", alias: "Wolverine", status: "Active" },
    { id: 2, name: "Ororo Munroe", alias: "Storm", status: "Active" },
    { id: 3, name: "Jean Grey", alias: "Phoenix", status: "Unknown" },
  ];

  return (
    <div className="page">
      <h1>Mutant Registry</h1>
      <ul>
        {mutants.map((m) => (
          <li key={m.id}>
            <Link to={`/mutants/${m.id}`}>{m.alias}</Link> — {m.name} (
            {m.status})
          </li>
        ))}
      </ul>
    </div>
  );
}
