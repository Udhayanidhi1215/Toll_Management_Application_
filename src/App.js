import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/NavBar";
import AllToll from "./Components/AllToll/AllToll";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />} />
        <Route path="/toll" element={<AllToll />} />
      </Routes>
    </div>
  );
}

export default App;
