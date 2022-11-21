import "./App.css";
import Home from "./components/pages/Home";
import Warehouse from "./components/pages/Warehouse";
import Inventory from "./components/pages/Inventory";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/warehouse" element={<Warehouses />} />
            <Route path="/inventory" element={<Inventory />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
