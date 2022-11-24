import "./App.scss";
import Warehouse from "./components/pages/warehouse/Warehouse";
import Inventory from "./components/pages/inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddWarehouse from "./components/addwarehouse/AddWarehouse";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" exact element={<AddWarehouse />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
