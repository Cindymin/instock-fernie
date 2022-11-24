import "./App.scss";

// import components
import Warehouse from "./components/pages/warehouse/Warehouse";
import EditWarehouse from "./components/editwarehouse/EditWarehouse";
import DeleteWarehouse from "./components/deleteWarehouse/DeleteWarehouse";
import Inventory from "./components/pages/inventory/Inventory";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WarehouseDetails from "./components/warehouseDetails/WarehouseDetails";
import EditWarehouse from "./components/editwarehouse/EditWarehouse";

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
           {/* <Route path="/warehouse/add" element={<AddWarehouse />} */}
            
             {/*<Route path="/warehouse/delete" element={<DeleteWarehouse />} />
          <Route path="/warehouse/edit" element={<EditWarehouse />} />*/}
          <Route path="/inventory" element={<Inventory />} />
        </Routes>
        <Footer />
      </BrowserRouter>


      </div>
    </>
  );
}

export default App;
