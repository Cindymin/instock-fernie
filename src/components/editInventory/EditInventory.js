import "./EditInventory.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function EditInventory() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [inventoryItem, setInventoryItem] = useState([]);
  const [whId, setWhID] = useState([]);
  const [warehouseName, setWarehouseName] = useState("");
  const [item, setItem] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [status, setStatus] = useState("");
  const [qty, setQty] = useState("");
  const [convertedWhId, setConvertedWhId] = useState("");

  const getInventoryItem = () => {
    axios
      .get(`http://localhost:8080/inventories/${id}`)
      .then((res) => {
        const invtItemArray = res.data["inventoriesData"];
        invtItemArray?.map((invtItem) => {
          setWhID(invtItem.warehouse_id);
          setInventoryItem(res.data);
          setItem(res.data.inventoriesData[0].item_name);
          setCategory(res.data.inventoriesData[0].category);
          setDescription(res.data.inventoriesData[0].description);
          setStatus(res.data.inventoriesData[0].status);
          setQty(res.data.inventoriesData[0].quantity);
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getInventoryItem();
  }, []);
  const invItemArray = inventoryItem["inventoriesData"];

  const getwarehouseName = () => {
    axios
      .get(`http://localhost:8080/warehouses/${whId}`)
      .then((res) => {
        const warehouseItemArray = res.data["warehouseData"];
        warehouseItemArray?.map((warehouseItem) => {
          setWarehouseName(warehouseItem.warehouse_name);
        });
      })
      .catch((error) => {
        console.log(error);
      });
    return warehouseName;
  };

  getwarehouseName();

  const submitHandler = (e) => {
    e.preventDefault();

    const editData = {
      id: id,
      warehouse_id: convertedWhId,
      item_name: item,
      description: description,
      category: category,
      status: status,
      quantity: qty,
    };

    const updateData = () => {
      axios
        .put(`http://localhost:8080/inventories/${id}`, editData)
        .catch((error) => {
          console.log(error);
        });
    };
    updateData();
    navigate("/inventory");
  };

  const convertNameToId = (e) => {
    const name = e;
    const getWarehouseData = () => {
      axios
        .get(`http://localhost:8080/warehouses/`)
        .then((res) => {
          const result = res.data
            .filter((info) => info.warehouse_name === name)
            .map((x) => x.id);
          return result;
        })
        .then((result) => {
          setConvertedWhId(result);
        })
        .catch((error) => {
          console.log(error);
        });
      return convertedWhId;
    };
    getWarehouseData();
  };
  console.log(convertedWhId);
  return (
    <>
      <form
        className="editInventoryForm"
        onSubmit={(e) => {
          submitHandler(e);
        }}
      >
        {invItemArray?.map((invItem) => (
          <div key={invItem.id}>
            <div className="editInventoryForm__title">
              <p className="editInventoryForm__title-text">
                Edit Inventory Item
              </p>
            </div>

            <div className="editInventoryForm__content">
              <div className="editInventoryForm__itemdetails">
                <p className="editInventoryForm__subtitle">Item Details</p>
                <div className="editInventoryForm__container">
                  <div className="editInventoryForm__detail">
                    <label className="editInventoryForm__label">
                      Item Name
                    </label>
                    <input
                      className="editInventoryForm__input"
                      type="text"
                      name="text"
                      defaultValue={invItem?.item_name}
                      onChange={(e) => {
                        setItem(e.target.value);
                      }}
                    />
                  </div>
                  <div className="editInventoryForm__detail">
                    <label className="editInventoryForm__label">
                      Description
                    </label>
                    <textarea
                      className="editInventoryForm__input editInventoryForm__input-description"
                      type="textarea"
                      defaultValue={invItem?.description}
                      onChange={(e) => {
                        setDescription(e.target.value);
                      }}
                    />
                  </div>
                  <div className="editInventoryForm__detail">
                    <label className="editInventoryForm__label">Category</label>
                    <select
                      className="editInventoryForm__select"
                      defaultValue={invItem?.category}
                      onChange={(e) => {
                        setCategory(e.target.value);
                      }}
                    >
                      <option value="Electronics">Electronics</option>
                      <option value="Gear">Gear</option>
                      <option value="Apparel">Apparel</option>
                      <option value="Accessories">Accessories</option>
                      <option value="Health">Health</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="editInventoryForm__itemavailability">
                <p className="editInventoryForm__subtitle">Item Availability</p>
                <div className="editInventoryForm__container">
                  <div className="editInventoryForm__detail">
                    <label className="editInventoryForm__label">Status</label>
                    {invItem.status === "In Stock" ? (
                      <>
                        <div className="editInventoryForm__input-radioContainer">
                          <div className="editInventoryForm__input-radioStock">
                            <input
                              className="editInventoryForm__input-radio"
                              type="radio"
                              name="radio"
                              value="In Stock"
                              defaultChecked
                              onChange={(e) => {
                                setStatus(e.target.value);
                              }}
                            />
                            <label className="editInventoryForm__label-radio">
                              In stock
                            </label>
                          </div>
                          <div className="editInventoryForm__input-radioStock">
                            <input
                              className="editInventoryForm__input-radio"
                              type="radio"
                              name="radio"
                              value="Out of Stock"
                              onChange={(e) => {
                                setStatus(e.target.value);
                              }}
                            />
                            <label className="editInventoryForm__label-radio">
                              Out of stock
                            </label>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="editInventoryForm__input-radioContainer">
                          <div className="editInventoryForm__input-radioStock">
                            <input
                              className="editInventoryForm__input-radio"
                              type="radio"
                              name="radio"
                              value="Out of Stock"
                              onChange={(e) => {
                                setStatus(e.target.value);
                              }}
                            />
                            <label className="editInventoryForm__label-radio">
                              In stock
                            </label>
                          </div>
                          <div className="editInventoryForm__input-radioStock">
                            <input
                              className="editInventoryForm__input-radio"
                              type="radio"
                              name="radio"
                              defaultChecked
                              value="In Stock"
                              onChange={(e) => {
                                setStatus(e.target.value);
                              }}
                            />
                            <label className="editInventoryForm__label-radio">
                              Out of stock
                            </label>
                          </div>
                        </div>
                      </>
                    )}
                  </div>

                  {invItem.status === "In Stock" ? (
                    <>
                      <div className="editInventoryForm__detail">
                        <label className="editInventoryForm__label">
                          Quantity
                        </label>
                        <input
                          className="editInventoryForm__input"
                          defaultValue={invItem?.quantity}
                          onChange={(e) => {
                            setStatus(e.target.value);
                          }}
                        />
                      </div>

                      <div className="editInventoryForm__detail">
                        <label className="editInventoryForm__label">
                          Warehouse
                        </label>
                        <select
                          className="editInventoryForm__select"
                          defaultValue={warehouseName}
                          onChange={(e) => {
                            convertNameToId(e.target.value);
                          }}
                        >
                          <option value="Manhattan">Manhattan</option>
                          <option value="Washington">Washington</option>
                          <option value="Jersey">Jersey</option>
                          <option value="SF">SF</option>
                          <option value="Santa Monica">Santa Monica</option>
                          <option value="Seattle">Seattle</option>
                          <option value="Miami">Miami</option>
                          <option value="Boston">Boston</option>
                        </select>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="editInventoryForm__detail">
                        <label className="editInventoryForm__label">
                          Warehouse
                        </label>
                        <select
                          className="editInventoryForm__select"
                          defaultValue={warehouseName}
                          onChange={(e) => {
                            convertNameToId(e.target.value);
                          }}
                        >
                          <option value="Manhattan">Manhattan</option>
                          <option value="Washington">Washington</option>
                          <option value="Jersey">Jersey</option>
                          <option value="SF">SF</option>
                          <option value="Santa Monica">Santa Monica</option>
                          <option value="Seattle">Seattle</option>
                          <option value="Miami">Miami</option>
                          <option value="Boston">Boston</option>
                        </select>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>

            <div className="editInventoryForm__btns">
              <Link to="/inventory">
                <button className="editInventoryForm__btn editInventoryForm__btncancel">
                  Cancel
                </button>
              </Link>
              <button className="editInventoryForm__btn editInventoryForm__btnsave">
                Save
              </button>
            </div>
          </div>
        ))}
      </form>
    </>
  );
}
