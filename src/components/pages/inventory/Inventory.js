import InventoryList from "../../inventoryList/InventoryList";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import axios from "axios";
import React, { useState, useEffect } from "react";
import DeleteInventory from "../../delteInventory/DeleteInventory";
import InventoryDetails from "../../inventoryDetails/InventoryDetails";
import EditInventory from "../../editInventory/EditInventory";

export default function Inventory() {
  const [inventory, setInventory] = useState([]);

  const getInventory = () => {
    axios
      .get("http://localhost:8080/inventories")
      .then((res) => {
        console.log(res.data);
        setInventory(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getInventory();
  }, []);

  return (
    <>

      {/* <InventoryList inventory={inventory} /> */}
      <EditInventory />
      <InventoryDetails item={inventory} />
    </>
  );
}
