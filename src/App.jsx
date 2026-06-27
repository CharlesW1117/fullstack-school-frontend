<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import TeamsList from "./pages/TeamsList.jsx";
import TeamDetail from "./pages/TeamDetail.jsx";
import MutantsList from "./pages/MutantsList.jsx";
import MutantDetail from "./pages/MutantDetail.jsx";
import Login from "./pages/Login.jsx";
import Register from "./pages/Register.jsx";
import Admin from "./pages/Admin.jsx";
import Error404 from "./pages/Error404.jsx";
import "./App.css";
=======
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeamsList from "./pages/TeamsList";
import TeamDetails from "./pages/TeamDetails";
import MutantsList from "./pages/MutantsList";
import MutantDetails from "./pages/MutantDetails";
>>>>>>> b3e02669d8d9c5b1fcb35b331ebda3975ea6e4f3

/*
App defines all routes for the site.
Layout wraps every page with shared UI (like Navbar).
TeamsList is the default landing page.
*/

export default function App() {
  return (
<<<<<<< HEAD
    <Routes>
      {/* Parent route */}
      <Route path="/" element={<Layout />}>
        {/* Default landing page */}
        <Route index element={<TeamsList />} />

        {/* Nested routes */}
        <Route path="teams/:id" element={<TeamDetail />} />
        <Route path="mutants" element={<MutantsList />} />
        <Route path="mutants/:id" element={<MutantDetail />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="admin" element={<Admin />} />

        {/* Catch-all for unknown routes */}
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
=======
    <Router>
      <nav>
        <Link to="/teams">Teams</Link> | <Link to="/mutants">Mutants</Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={<h1>Welcome to Xavier's School for the Gifted!</h1>}
        />
        <Route path="/teams" element={<TeamsList />} />
        <Route path="/teams/:id" element={<TeamDetails />} />
        <Route path="/mutants" element={<MutantsList />} />
        <Route path="/mutants/:id" element={<MutantDetails />} />
      </Routes>
    </Router>
>>>>>>> b3e02669d8d9c5b1fcb35b331ebda3975ea6e4f3
  );
}
