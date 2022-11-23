import Warehouse from "./components/pages/Warehouse";
import EditWarehouse from "./components/editwarehouse/EditWarehouse";
import Inventory from "./components/pages/Inventory";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.scss";

function App() {
  return (

      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" exact element={<EditWarehouse/>} />
            <Route path="/warehouse" element={<Warehouse/>} />
            <Route path="/inventory" element={<Inventory/>} />
          </Routes>
        </BrowserRouter>
      </div>

  );
}

export default App;
