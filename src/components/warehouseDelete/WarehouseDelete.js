import "./WarehouseDelete.scss";
import React from "react";
import deleteIcon from "../../assets/icons/close-24px.svg";

export default function warehouseDelete() {
  return (
    <section className="warehouseDelete">
      <div className="warehouseDelete__icon-wrapper">
        <img
          className="warehouseDelete__icon"
          src="{deleteIcon}"
          alt="delete-icon"
        />
      </div>
      <div className="warehouseDelete__title">
        <h1 className="warehouseDelete__title">Delete Washington warehouse?</h1>
      </div>
      <div>
        <p>
          Please confirm that you’d like to delete the Washington from the list
          of warehouses. You won’t be able to undo this action.
        </p>
      </div>
      <div>
        <button>Cancel</button>
        <button>Delete</button>
      </div>
    </section>
  );
}
