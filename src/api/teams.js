<<<<<<< HEAD

// conection
const API = import.meta.env.VITE_API;

//call back all teams
export async function getTeams() {
  const res = await fetch(`${API}/teams`)
  return res.json()
}

// get a team by ID number
export async function getTeamById(id) {
  const res = await fetch(`${API}/teams/${id}`)
  return res.json()
}

// create a team
export async function createTeam(team, token) {
  const res = await fetch(`${API}/teams`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(team),
  })
  return res.json()
}

// post update a teams information
export async function updateTeam(id, team, token) {
  const res = await fetch(`${API}/teams/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(team),
  })
  return res.json()
}

//delete a team

export async function deleteTeam(id, token) {
  await fetch(`${API}/teams/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  })
}
=======
import { request } from "./client";

export const getTeams = () => request("/teams", { method: "GET" });
export const getTeam = (id) => request(`/teams/${id}`, { method: "GET" });
>>>>>>> b3e02669d8d9c5b1fcb35b331ebda3975ea6e4f3
