import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTeams } from "../api/teams";

export default function TeamsList() {
  const [teams, setTeams] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    getTeams()
      .then(setTeams)
      .catch((err) => {
        console.error("Failed to fetch teams:", err);
        setError("Unable to load teams.");
      });
  }, []);

  if (error) return <h2>{error}</h2>;
  if (!teams.length) return <h2>Loading teams...</h2>;

  return (
    <div className="page">
      <h1>Teams</h1>
      <div className="grid">
        {teams.map((team) => (
          <div key={team.id} className="team-card">
            <img
              src={team.image_url}
              alt={team.name}
              style={{ width: "400px", borderRadius: "8px" }}
            />
            <h2>{team.name}</h2>
            <p>
              <strong>Base:</strong> {team.base_of_operations}
            </p>
            <Link to={`/teams/${team.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
