import React from "react";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";

export default function InventoryList() {
  return (
    <article className="invList">
      <section className="invList-top">
        <div className="invList-top-title">
          <h2 className="invList-top-title__text">Inventory</h2>
        </div>
        <div className="invList-top-search">
          <input
            type="text"
            placeholder="Search..."
            className="invList-top-search__bar"
          />
          <img
            src={searchIcon}
            alt="searchIcon"
            className="invList-top-search__img"
          />
        </div>
        <div className="invList-top-btn">
          <button className="invList-top-btn--blue">+ Add New Item</button>
        </div>
      </section>
      <section className="invList-bottom">
        <div className="invList-bottom-labels">
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">INVENTORY ITEM</span>
          </div>
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">CATEGORY</span>
          </div>
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">STATUS</span>
          </div>
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">QTY</span>
          </div>
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">WAREHOUSE</span>
          </div>
          <div classNAme="invList-bottom-title">
            <span classNAme="invList-bottom-title">ACTIONS</span>
          </div>
        </div>

        <div className="invList-bottom-text">
          <div className="invList-bottom-item">
            <span className="invList-bottom-item">Television</span>
          </div>
          <div className="invList-bottom-item">
            <span className="invList-bottom-item">Electronics</span>
          </div>
          <div className="invList-bottom-item">
            <span className="invList-bottom-item">IN STOCK</span>
          </div>
          <div className="invList-bottom-item">
            <span className="invList-bottom-item">500</span>
          </div>
          <div className="invList-bottom-item">
            <span className="invList-bottom-item">Manhattan</span>
          </div>
          <div className="invList-bottom-item">
            <div className="invList-bottom-item-btn"></div>
          </div>
        </div>
      </section>
      <div>
        <span>© InStock Inc. All Rights Reserved.</span>
      </div>
    </article>
  );
}
