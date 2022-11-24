import "./AddWarehouse.scss";

function AddWarehouse() {
  return (
    <form className="addform">
      <div className="addform__title">
        <p>Add New Warehouse</p>
      </div>

      <div className="addform__content">
        <div className="addform__warehousedetails">
          <p className="addform__subtitle">Warehouse Details</p>
          <div className="addform__container">
            <div className="addform__detail">
              <label className="addform__label">Warehouse Name</label>
              <input
                className="addform__input"
                placeholder="Warehouse Name"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Street Address</label>
              <input className="addform__input" placeholder="Street Address"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">City</label>
              <input className="addform__input" placeholder="City"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Country</label>
              <input className="addform__input" placeholder="Country"></input>
            </div>
          </div>
        </div>
        <hr className="addform__hr"></hr>
        <div className="addform__contactdetails">
          <p className="addform__subtitle">Contact Details</p>
          <div className="addform__container">
            <div className="addform__detail">
              <label className="addform__label">Contact Name</label>
              <input className="addform__input" placeholder="Contact Name"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Position</label>
              <input className="addform__input" placeholder="Position"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Phone Number</label>
              <input className="addform__input" placeholder="Phone Number"></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Email</label>
              <input className="addform__input" placeholder="Email"></input>
            </div>
          </div>
        </div>
      </div>

      <div className="addform__btns">
        <button className="addform__btncancel">Cancel</button>
        <button className="addform__btnsave">Save</button>
      </div>
    </form>
  );
}

export default AddWarehouse;
