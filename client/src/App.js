import React, { useState } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import {
  unstable_HistoryRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import history from "./history";
import "./reset.css";

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router history={history}>
      <Routes>
        <Route path="/" exact element={<Home setUser={setUser} />} />
        <Route path="/messenger" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
