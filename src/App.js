import "./App.scss";
import Warehouse from "./components/pages/warehouse/Warehouse";
import Inventory from "./components/pages/inventory/Inventory";
import DeleteInventory from "./components/delteInventory/DeleteInventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<Warehouse />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/delete-inventory" element={<DeleteInventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
