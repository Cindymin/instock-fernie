import "./App.scss";

// import components
import Warehouse from "./components/pages/warehouse/Warehouse";

import Inventory from "./components/pages/inventory/Inventory";
import DeleteInventory from "./components/delteInventory/DeleteInventory";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" exact element={<Warehouse />} />
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/warehouse/:id" element={<WarehouseDetails />} />

            <Route path="/inventory" element={<Inventory />} />
            <Route path="/delete-inventory" element={<DeleteInventory />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
