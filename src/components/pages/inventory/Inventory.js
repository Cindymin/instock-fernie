import React from "react";
import InventoryList from "../../inventoryList/InventoryList";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";

export default function Inventory() {
  return (
    <>
      <Header />
      <InventoryList />
      <Footer />
    </>
  );
}
