import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Warehouse from "./components/pages/warehouse/Warehouse";
import Inventory from "./components/pages/inventory/Inventory";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
