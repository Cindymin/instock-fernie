import "./EditWarehouse.scss";

function EditWarehouse() {



  return (
    <form className="form">
      <div className="form__title">
        <p>Edit Warehouse</p>
      </div>

      <div className="form__content">
        <div className="form__warehousedetails">
          <p className="form__subtitle">Warehouse Details</p>
          <div className="form__container">
            <div className="form__detail">
              <label className="form__label">Warehouse Name</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Street Address</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">City</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Country</label>
              <input className="form__input" placeholder=""></input>
            </div>
          </div>
        </div>
        <hr className="form__hr"></hr>
        <div className="form__contactdetails">
          <p className="form__subtitle">Contact Details</p>
          <div className="form__container">
            <div className="form__detail">
              <label className="form__label">Contact Name</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Position</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Phone Number</label>
              <input className="form__input" placeholder=""></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Email</label>
              <input className="form__input" placeholder=""></input>
            </div>
          </div>
        </div>
      </div>

      <div className="form__btns">
        <button className="form__btncancel">Cancel</button>
        <button className="form__btnsave">Save</button>
      </div>
    </form>
  );
}

export default EditWarehouse;
