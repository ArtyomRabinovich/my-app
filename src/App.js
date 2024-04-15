import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Games from "./Components/Games";
import HomePage from "../src/pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/games" element={<Games />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
