import "./EditInventory.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";

export default function EditInventory() {
    const { id } = useParams();
    const [inventoryItem, setInventoryItem] = useState([]);
    const [whId, setWhID] = useState([]);
    const [warehouseName, setWarehouseName] = useState("");

  const getInventoryItem = () => {
    axios
      .get(`http://localhost:8080/inventories/${id}`)
      .then((res) => {
        const invtItemArray=(res.data["inventoriesData"]);
    invtItemArray?.map((invtItem)=>{
    setWhID(invtItem.warehouse_id);
    setInventoryItem(res.data);
    });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getInventoryItem();
  }, []);
  const invItemArray=(inventoryItem["inventoriesData"]);
  

const getwarehouseName = () => {
    axios
    .get(`http://localhost:8080/warehouses/${whId}`)
    .then((res) => {
        
        const warehouseItemArray=res.data["warehouseData"]
        warehouseItemArray?.map((warehouseItem)=>{
            setWarehouseName(warehouseItem.warehouse_name);
        });
      
    })
    .catch((error) => {
      console.log(error);
    });
    return warehouseName;
}

getwarehouseName();

   
  
return (
    <>
    <div className="sample"> {warehouseName}</div>
    <form className="editInventoryForm">
       {invItemArray?.map((invItem)=>(
            <div key={invItem.id}>
      <div className="editInventoryForm__title">
        <p className="editInventoryForm__title-text">Edit Inventory Item</p>
      </div>

      <div className="editInventoryForm__content">
        <div className="editInventoryForm__itemdetails">
          <p className="editInventoryForm__subtitle">Item Details</p>
          <div className="editInventoryForm__container">
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Item Name</label>
              <input className="editInventoryForm__input" type="text" name="text" defaultValue={invItem?.item_name}/>
            </div>
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Description</label>
              <textarea className="editInventoryForm__input editInventoryForm__input-description" type="textarea" defaultValue={invItem?.description}/>
            </div>
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Category</label>
              <select className="editInventoryForm__select" defaultValue={invItem?.category}>
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
            {invItem.status==="In Stock"?
            <>
            <div className="editInventoryForm__input-radioContainer">
            <div className="editInventoryForm__input-radioStock">
            <input className="editInventoryForm__input-radio" type="radio" name="radio"  defaultChecked/>
              <label className="editInventoryForm__label-radio">In stock</label>
              </div>
              <div className="editInventoryForm__input-radioStock">
              <input className="editInventoryForm__input-radio" type="radio" name="radio" />
              <label className="editInventoryForm__label-radio">Out of stock</label>
              </div>
              </div>
              </>
            :
            <>
            <div className="editInventoryForm__input-radioContainer">
            <div className="editInventoryForm__input-radioStock">
            <input className="editInventoryForm__input-radio" type="radio" name="radio" />
            <label className="editInventoryForm__label-radio">In stock</label>
            </div>
            <div className="editInventoryForm__input-radioStock">
            <input className="editInventoryForm__input-radio" type="radio" name="radio" defaultChecked/>
            <label className="editInventoryForm__label-radio">Out of stock</label>
            </div>
            </div>
            </>}
              
            </div>

            {invItem.status==="In Stock"?
            <>
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Quantity</label>
              <input className="editInventoryForm__input" defaultValue={invItem?.quantity}/>
            </div>
           
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Warehouse</label>
              <select className="editInventoryForm__select" defaultValue={warehouseName}>
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
            :<>
           
            <div className="editInventoryForm__detail">
              <label className="editInventoryForm__label">Warehouse</label>
              <select className="editInventoryForm__select" defaultValue={warehouseName}>
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
           </>}
          </div>
        </div>
      </div>

      <div className="editInventoryForm__btns">
        <button className="editInventoryForm__btn editInventoryForm__btncancel">Cancel</button>
        <button className="editInventoryForm__btn editInventoryForm__btnsave">Save</button>
      </div>
      </div>
      ) )}
    </form>
    </>
  );
}


