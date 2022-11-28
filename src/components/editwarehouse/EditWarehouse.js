import "./EditWarehouse.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import backArrowIcon from "../../assets/icons/arrow_back-24px.svg";

function EditWarehouse() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [warehouseItem, setWarehouseItem] = useState([]);
  const [warehouseName, setWarehouseName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [contactName, setContactName] = useState("");
  const [contactPosition, setContactPosition] = useState("");
  const [contactPhone, setContactPhone] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  

  const getWarehouseItem = () => {
    axios
      .get(`http://localhost:8080/warehouses/${id}`)
      .then((res) => {
        const whItemArray = res.data["warehouseData"];
        whItemArray?.map((whItem) => {
          setWarehouseItem(res.data);
          setWarehouseName(whItem.warehouse_name);
          setAddress(whItem.address);
          setCity(whItem.city);
          setCountry(whItem.country);
          setContactName(whItem.contact_name);
          setContactPosition(whItem.contact_position);
          setContactPhone(whItem.contact_phone);
          setContactEmail(whItem.contact_email);
        });
      })

      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getWarehouseItem();
  }, []);
  const whItemArray = warehouseItem["warehouseData"];
  
      const submitHandler = (e) => {
        e.preventDefault();
    
        const editData = {
          id: id,
          warehouse_name: warehouseName,
          address: address,
          city: city,
          country: country,
          contact_name: contactName,
          contact_position: contactPosition,
          contact_phone: contactPhone,
          contact_email: contactEmail,
        };
    
        const updateData = () => {
          axios
            .put(`http://localhost:8080/warehouses/${id}`, editData)
            .catch((error) => {
              console.log(error);
            });
        };
        updateData();
        navigate("/warehouse");
      };
  return (
    <>
      <form className="form"
        onSubmit={(e) => {
          submitHandler(e);
        }}>
      
        {whItemArray?.map((whItem) => (
          <div key={whItem.id}>
            <div className="form-top">
            <Link to={`/warehouse`}>
              <div className="form-top__backIcon">
                <img
                  src={backArrowIcon}
                  alt="arrow-back-icon"
                  className="form-top__backIconimg"
                />
              </div>
            </Link>
            
      <div className="form__title">
        <p className="form__title-text">Edit Warehouse</p>
      </div>
          </div>
      <div className="form__content">
      <hr className="form__hr"></hr>
        <div className="form__warehousedetails">
          <p className="form__subtitle">Warehouse Details</p>
          <div className="form__container">
            <div className="form__detail">
              <label className="form__label">Warehouse Name</label>
              <input  className="form__input" defaultValue={whItem.warehouse_name} 
                        onChange={(e) => {
                        setWarehouseName(e.target.value);
                      }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Street Address</label>
              <input className="form__input" defaultValue={whItem.address}
                        onChange={(e) => {
                          setAddress(e.target.value);
                        }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">City</label>
              <input className="form__input" defaultValue={whItem.city}
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Country</label>
              <input className="form__input" defaultValue={whItem.country}
                            onChange={(e) => {
                              setCountry(e.target.value);
                            }}></input>
            </div>
          </div>
        </div>
        <hr className="form__hr"></hr>
        <div className="form__contactdetails">
          <p className="form__subtitle">Contact Details</p>
          <div className="form__container">
            <div className="form__detail">
              <label className="form__label">Contact Name</label>
              <input className="form__input" defaultValue={whItem.contact_name}
                              onChange={(e) => {
                                setContactName(e.target.value);
                              }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Position</label>
              <input className="form__input" defaultValue={whItem.contact_position}
                              onChange={(e) => {
                                setContactPosition(e.target.value);
                              }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Phone Number</label>
              <input className="form__input" defaultValue={whItem.contact_phone}
                                onChange={(e) => {
                                  setContactPhone(e.target.value);
                                }}></input>
            </div>
            <div className="form__detail">
              <label className="form__label">Email</label>
              <input className="form__input" defaultValue={whItem.contact_email}
                                onChange={(e) => {
                                  setContactEmail(e.target.value);
                                }}></input>
            </div>
          </div>
        </div>
      </div>

      <div className="form__btns">
      <Link to="/warehouse">
        <button className="form__btncancel">Cancel</button>
        </Link>
        <button className="form__btnsave">Save</button>
      </div>
      </div>
        ))}
    </form>
    </>
  );
}

export default EditWarehouse;
