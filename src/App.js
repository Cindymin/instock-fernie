import "./App.scss";
import Warehouse from "./components/pages/warehouse/Warehouse";
import EditWarehouse from "./components/editwarehouse/EditWarehouse";
import DeleteWarehouse from "./components/deleteWarehouse/DeleteWarehouse";
import Inventory from "./components/pages/inventory/Inventory";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>

            <Route path="/" exact element={<Warehouse />} />
            {/* <Route path="/add-warehouse" element={<AddWarehouse />} */}
            <Route path="/edit-warehouse" element={<EditWarehouse />} />
            <Route path="/delete-warehouse" element={<DeleteWarehouse />} /> 
            <Route path="/warehouse" element={<Warehouse />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
