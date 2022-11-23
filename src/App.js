import React from "react";
import "./App.css";
import Home from "./components/pages/Home";
import Warehouse from "./components/pages/Warehouse";
import Inventory from "./components/pages/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
