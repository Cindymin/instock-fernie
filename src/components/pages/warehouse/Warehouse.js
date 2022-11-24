import React from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import WarehouseDetails from "../../warehouseDetails/WarehouseDetails";
import WarehouseList from "../../warehouseList/WarehouseList";
import axios from "axios";
import { useState, useEffect } from "react";

function Warehouse() {

  const [WHList,setWhList ] = useState([]);

  useEffect(()=>{
    const fetchWarehouses= async () => {
      try {
        const {data} = await axios.get
        (`http://localhost:8080/warehouses`);
        setWhList(data);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchWarehouses();
    },
   []);





  return (
    <>
      <Header />
      <WarehouseList WHList={WHList} />
      {/* <WarehouseDetails className="content" /> */}
      <Footer />
    </>
  );
}

export default Warehouse;
