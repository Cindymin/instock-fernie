import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import WarehouseDetails from "../../warehouseDetails/WarehouseDetails";

function Warehouse() {
  return (
    <>
      <Header />
      <WarehouseDetails className="content" />
      <Footer />
    </>
  );
}

export default Warehouse;
