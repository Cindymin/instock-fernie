import React from "react";
import WarehouseDetails from "../../warehouseDetails/WarehouseDetails";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const SEARCH_URL = `http://localhost:8080/warehouses`;
const searchByWarehouseID = (id) =>
  ` http://localhost:8080/warehouses/${id}/inventories`;

function Warehouse() {
  const [warehouses, setWarehouse] = useState([]);
  const [warehouseInventory, setWarehouseInventory] = useState([]);
  const { warehouseId } = useParams();
  const warehouseIdToDisplay =
    warehouseId || "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9";

  useEffect(() => {
    const fetchData = async () => {
      // get warehouseId data from API
      const warehouse_data = await axios.get(SEARCH_URL);
      const warehouses = warehouse_data.data;
      const getWarehouse = (warehouseId) => {
        return warehouses.find((warehouse) => warehouse.id === warehouseId);
      };
      setWarehouse(getWarehouse(warehouseIdToDisplay));

      // get the warehouseInventory data from API
      const { data } = await axios.get(
        searchByWarehouseID(warehouseIdToDisplay)
      );
      setWarehouseInventory(data.inventoriesData);
    };

    fetchData();
  }, [warehouseIdToDisplay]);

  return (
    <>
      <WarehouseDetails
        warehouses={warehouses}
        warehouseInventory={warehouseInventory}
        // warehouseId={warehouseId}
      />
    </>
  );
}

export default Warehouse;
