import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Myfun from "./components/mfile";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<h1 className="text-2xl">Welcome to Home Page neha pawar</h1>} />
          <Route path="/myfun" element={<Myfun />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
