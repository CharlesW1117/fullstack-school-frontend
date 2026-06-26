import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import TeamsList from "./pages/TeamsList";
import TeamDetails from "./pages/TeamDetails";
import MutantsList from "./pages/MutantsList";
import MutantDetails from "./pages/MutantDetails";

function App() {
  return (
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
  );
}

export default App;
