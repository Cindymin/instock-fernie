import axios from "axios";
import React, { useState } from "react";
import "./AddInventory.scss";
import { Link,useNavigate } from "react-router-dom";

const AddInventory = () => {
  const [item_name, setItemName] = useState("");
  const [isItem_name, setIsItem_name] = useState(false);
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState(true);
  const [quantity, setQuantity] = useState(0);
  const [itemWarehouse, setItemWarehouse] = useState("");
  const [isItemWarehouse, setisItemWarehouse] = useState(false);
  const [warehouse_id, setWarehouseID] = useState("");
  const categories = [
    "Electronics",
    "Gear",
    "Apparel",
    "Accessories",
    "Health",
  ];
  const navigate=useNavigate()

  const warehouses = [
    {
      value: "150a36cf-f38e-4f59-8e31-39974207372d",
      label: "Boston",
    },
    {
      value: "2922c286-16cd-4d43-ab98-c79f698aeab0",
      label: "Manhattan",
    },
    {
      value: "5bf7bd6c-2b16-4129-bddc-9d37ff8539e9",
      label: "Washington",
    },
    {
      value: "89898957-04ba-4bd0-9f5c-a7aea7447963",
      label: "Santa Monica",
    },
    {
      value: "90ac3319-70d1-4a51-b91d-ba6c2464408c",
      label: "Jersey",
    },
    {
      value: "ade0a47b-cee6-4693-b4cd-a7e6cb25f4b7",
      label: "Seattle",
    },
    {
      value: "bb1491eb-30e6-4728-a5fa-72f89feaf622",
      label: "Miami",
    },
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
    const selectedWarehouse = warehouses.find((w) => w.label === name);
    setWarehouseID(selectedWarehouse.value || "");
  }

  function postNewInventoryItem(e) {
    e.preventDefault(); 
    if (!item_name) {
      setIsItem_name(true);
    }
    window.console.log(itemWarehouse, "value");
    if (!itemWarehouse) {
      setisItemWarehouse(true);
    }
    if (item_name && itemWarehouse) {

      const newInventoryItemData = {
        warehouse_id: warehouse_id,
        item_name: item_name,
        description: description,
        category: category,
        status: status ? "In Stock" : "Out of Stock",
        quantity: quantity,
      };
      window.console.log(newInventoryItemData, "value");


      axios
        .post(`http://localhost:8080/inventories`, newInventoryItemData)
        .then(navigate("/inventory"))
          // setItemName("");
          // setDescription("");
          // setCategory("");
          // setStatus(true);
          // setQuantity(0);
          // setItemWarehouse("");
     
          .catch((error)=>{
            console.log("error",error)
          });    
        }
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
                onChange={(e) => {
                  const value = e.target.value;
                  if (value) {
                    setIsItem_name(false);
                  } else {
                    setIsItem_name(true);
                  }

                  setItemName(value);
                }}
                //  失去焦点
                onBlur={(e) => {
                  const value = e.target.value;
                  if (value) {
                    setIsItem_name(false);
                  } else {
                    setIsItem_name(true);
                  }
                }}
                // required
              />
              {isItem_name && <div>This fieId is required</div>}
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
                placeholder="Please Select"
                onChange={(e) => setCategory(e.target.value)}>
                <option className="default" value={`Please Select`}>
                  Please Select
                </option>
                {categories.map((category) => (
                  <option value={category} key={category}>
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
                onChange={(e) => {
                  console.log(e.target.value, "itemWarehouse");

                  const value = e.target.value;
                  // 判断是否选择
                  if (value) {
                    setisItemWarehouse(false);
                  } else {
                    setisItemWarehouse(true);
                  }
                  // 每次当下拉框的值发送改变 就是去拿 WarehouseId
                  getWarehouseId(value);

                  setItemWarehouse(value);
                }}>
                <option className="default" value={`Please Select`}>
                  Please Select
                </option>
                {warehouses.map((category, i) => (
                  <option value={category.label} key={i}>
                    {category.label}
                  </option>
                ))}
              </select>
              {isItemWarehouse && <div>This fieId is required</div>}
            </div>
          </div>
        </div>
      </div>
      <div className="addInventoryForm__btns">
        <Link to="/inventory">
          {" "}
          <button className="addInventoryForm__btn addInventoryForm__btncancel">
            Cancel
          </button>
        </Link>
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
