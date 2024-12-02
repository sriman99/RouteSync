import React from "react";
import LandingPage from "./pages/LandingPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;