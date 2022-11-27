import axios from "axios";
import React, { useState } from "react";
import "./AddInventory.scss"

const AddInventory = () => {
  const [item_name, setItemName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [itemWarehouse, setItemWarehouse] = useState("");
  const [warehouse_id, setWarehouseID] = useState("");
  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];
  const warehouses = [
    "Manhattan",
    "Washington",
    "Jersey",
    "San Fran",
    "Santa Monica",
    "Seattle",
    "Miami",
  ];

  function statusHandler(e) {
    if (e.target.value === "In Stock") {
      setStatus(true);
    }
    if (e.target.value === "Out Of Stock") {
      setStatus(false);
    }
  }

  function getWarehouseId(name) {
    axios.get("http://localhost:8080/warehouses").then((res) => {
      const selectedWarehouse = res.data.find((w) => w.name === name);
      setWarehouseID(selectedWarehouse.id);
    });
  }
  const newInventoryItemData = {
    warehouse_id: warehouse_id,
    warehouseName: itemWarehouse,
    item_name: item_name,
    description: description,
    category: category,
    status: status ? "In Stock" : "Out of Stock",
    quantity: quantity,
  };

  function postNewInventoryItem() {
    getWarehouseId(itemWarehouse);
    axios
      .post("http://localhost:8000/inventories", newInventoryItemData)
      .then((response) => console.log(response.data));
    window.location = "/";

    setItemName("");
    setDescription("");
    setCategory("");
    setStatus(true);
    setQuantity(0);
    setItemWarehouse("");

  }
  return (
    <form className="addInventoryForm" onSubmit={postNewInventoryItem}>
      <div className="addInventoryForm__title">
        <p className="addInventoryForm__title-text">Add New Inventory Item</p>
      </div>

      <div className="addInventoryForm__content">
        <div className="addInventoryForm__itemdetails">
          <p className="addInventoryForm__subtitle">Item Details</p>

          <div className="addInventoryForm__container">
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Item Name</label>
              <input
                className="addInventoryForm__input"
                placeholder="Item Name"
                type="text"
                value={item_name}
                onChange={(e) => setItemName(e.target.value)}
                // required
              />
            </div>

            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">
                Item Description
              </label>

              <textarea
                className="addInventoryForm__input editInventoryForm__input-description"
                type="textarea"
                placeholder="Please enter a brief item description..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Category</label>

              <select
                className="addInventoryForm__select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value={`Please Select`}>Please Select</option>
                {categories.map((category, i) => (
                  <option value={category} key={i}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="addInventoryForm__itemavailability">
          <p className="addInventoryForm__subtitle">Item Availability</p>

          <div className="addInventoryForm__container">
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Status</label>

              <div className="addInventoryForm__input-radioContainer">
                <div className="addInventoryForm__input-radioStock">
                  <input
                    className="addInventoryForm__input-radio"
                    type="radio"
                    name="radio"
                    // defaultChecked
                    // required
                    value="In Stock"
                    id="inStock"
                    checked={status}
                    onChange={(e) => statusHandler(e)}
                  />
                  <label className="addInventoryForm__label-radio">
                    In Stock
                  </label>
                </div>{" "}
                <div className="addInventoryForm__input-radioStock">
                  <input
                    className="addInventoryForm__input-radio"
                    type="radio"
                    name="radio"
                    required
                    value="Out Of Stock"
                    id="outOfStock"
                    // checked={!status}
                    onChange={(e) => statusHandler(e)}
                  />
                  <label className="addInventoryForm__label-radio">
                    Out Of Stock
                  </label>
                </div>
              </div>
            </div>

            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Quantity</label>
              <input
                className="addInventoryForm__input"
                placeholder="0"
                type="number"
                disabled={!status}
                required
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
              />
            </div>

            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Warehouse</label>
              <select
                className="addInventoryForm__select"
                value={itemWarehouse}
                onChange={(e) => setItemWarehouse(e.target.value)}>
                <option className="default" value={`Please Select`}>
                  Please Select
                </option>
                {warehouses.map((category, i) => (
                  <option value={category} key={i}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="addInventoryForm__btns">
        <button className="addInventoryForm__btn addInventoryForm__btncancel">
          Cancel
        </button>
        <button
          type="submit"
          className="addInventoryForm__btn addInventoryForm__btnsave">
          +Add Item
        </button>
      </div>
    </form>
  );
};

export default AddInventory;
