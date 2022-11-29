import axios from "axios";
import "./AddWarehouse.scss";
import { useState } from "react";
import error from "../../assets/icons/error-24px.svg";
function AddWarehouse() {
  const handleSubmit = (event) => {
    const form = event.currentTarget;

    // form validation

    const isWarehouseNameValid = form.warehousename.value;
    const isAdressValid = form.address.value;
    const isCityValid = form.city.value;
    const isCountryValid = form.country.value;
    const isContactNameValid = form.contactname.value;
    const isPositionValid = form.position.value;
    const isPhonenumberValid = form.phonenumber.value;
    const isEmailValid = form.email.value;

    if (!isWarehouseNameValid) {
      form.warehousename.style.border = "1px solid red";
      document.getElementById("warehousename-Valid").style.display = "block";
    }

    event.preventDefault();
    const newWarehouse = {
      warehouse_name: event.target.warehousename.value,
      address: event.target.address.value,
      city: event.target.city.value,
      country: event.target.country.value,
      contact_name: event.target.contactname.value,
      contact_position: event.target.position.value,
      contact_phone: event.target.phonenumber.value,
      contact_email: event.target.email.value,
    };

    axios
      .post(`http://localhost:8080/warehouses`, newWarehouse)
      .then((response) => console.log(response.data));
    // window.location = "/";
    event.target.reset();
  };

  return (
    <form className="addform" noValidate onSubmit={handleSubmit}>
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
                placeholder="Warehouse Name"
                name="warehousename"
                type="text"
                feedbackValid="saysomething"
                required
              ></input>
            </div>

            <div className="warehousename-Valid" id="warehousename-Valid">
              <img
                className="warehousename-Valid__img"
                src={error}
                alt="error"
              />
              <span className="warehousename-Valid__text">
                This field is required
              </span>
            </div>

            <div className="addform__detail">
              <label className="addform__label">Street Address</label>
              <input
                className="addform__input"
                placeholder="Street Address"
                name="address"
              ></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">City</label>
              <input
                className="addform__input"
                placeholder="City"
                name="city"
              ></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Country</label>
              <input
                className="addform__input"
                placeholder="Country"
                name="country"
              ></input>
            </div>
          </div>
        </div>
        <hr className="addform__hr"></hr>
        <div className="addform__contactdetails">
          <p className="addform__subtitle">Contact Details</p>
          <div className="addform__container">
            <div className="addform__detail">
              <label className="addform__label">Contact Name</label>
              <input
                className="addform__input"
                placeholder="Contact Name"
                name="contactname"
              ></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Position</label>
              <input
                className="addform__input"
                placeholder="Position"
                name="position"
              ></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Phone Number</label>
              <input
                className="addform__input"
                placeholder="Phone Number"
                name="phonenumber"
              ></input>
            </div>
            <div className="addform__detail">
              <label className="addform__label">Email</label>
              <input
                className="addform__input"
                placeholder="Email"
                name="email"
              ></input>
            </div>
          </div>
        </div>
      </div>

      <div className="addform__btns">
        <button className="addform__btncancel">Cancel</button>
        <button className="addform__btnsave" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default AddWarehouse;
