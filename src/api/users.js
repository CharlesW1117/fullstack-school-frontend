<<<<<<< HEAD
//register a user 
export async function register(username, password) {
  const res = await fetch('http://localhost:3000/users/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  return res.text()
}

// login function - takes in username password, verifies it against token.
export async function login(username, password) {
  const res = await fetch('http://localhost:3000/users/login', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
  return res.text()
}
=======
import { request } from "./client";

export const register = (payload) =>
  request("/users/register", { method: "POST", body: payload });

export const login = (payload) =>
  request("/users/login", { method: "POST", body: payload });
>>>>>>> b3e02669d8d9c5b1fcb35b331ebda3975ea6e4f3
