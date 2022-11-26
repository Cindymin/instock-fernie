import "./AddInventory.scss";

export default function AddInventory() {
    
  
return (
    
    
    <form className="addInventoryForm">
      
      <div className="addInventoryForm__title">
        <p className="addInventoryForm__title-text">Add New Inventory Item</p>
      </div>

      <div className="addInventoryForm__content">
        <div className="addInventoryForm__itemdetails">
          <p className="addInventoryForm__subtitle">Item Details</p>
          <div className="addInventoryForm__container">
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Item Name</label>
              <input className="addInventoryForm__input" type="text" name="text" placeholder="Item Name"/>
            </div>
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Description</label>
              <textarea className="addInventoryForm__input editInventoryForm__input-description" type="textarea" placeholder="Please enter a brief item description..."/>
            </div>
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Category</label>
              <select className="addInventoryForm__select">
              <option value=" " disabled selected hidden>Please select</option>
                <option value="Electronics">Electronics</option>
                <option value="Gear">Gear</option>
                <option value="Apparel">Apparel</option>
                <option value="Accessories">Accessories</option>
                <option value="Health">Health</option>
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
            <input className="addInventoryForm__input-radio" type="radio" name="radio"  defaultChecked/>
              <label className="addInventoryForm__label-radio">In stock</label>
              </div>
              <div className="addInventoryForm__input-radioStock">
              <input className="addInventoryForm__input-radio" type="radio" name="radio" />
              <label className="addInventoryForm__label-radio">Out of stock</label>
              </div>
              </div>
            </div>

            
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Quantity</label>
              <input className="addInventoryForm__input" placeholder="0"/>
            </div>
           
            <div className="addInventoryForm__detail">
              <label className="addInventoryForm__label">Warehouse</label>
              <select className="addInventoryForm__select">
              <option value=" " disabled selected hidden>Please select</option>
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
          </div>
        </div>
      </div>

      <div className="addInventoryForm__btns">
        <button className="addInventoryForm__btn addInventoryForm__btncancel">Cancel</button>
        <button className="addInventoryForm__btn addInventoryForm__btnsave">+Add Item</button>
      </div>
      
    </form>
    
  );
}


