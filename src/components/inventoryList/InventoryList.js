import React from "react";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";

export default function InventoryList() {
  return (
    <article className="invList">
      <section className="invList-top">
        <div className="invList-top-title">
          <h2 className="invList-top-title invList-top-title__text">
            Inventory
          </h2>
        </div>
        <div className="invList-top-form invList-top-search">
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
        <div className="invList-top-form invList-top-btn">
          <button className="invList-top-btn--blue">+ Add New Item</button>
        </div>
      </section>
      <section className="invList-bottom">
        <div className="invList-bottom-labels">
          <div classNAme="invList-bottom-labels-a">
            <div classname="invList-bottom-labels-a__horizental">
              <div className="invList-bottom-title-wrapper">
                <span classNAme="invList-bottom-title">INVENTORY ITEM</span>
              </div>
              <div className="invList-bottom-item">
                <span className="invList-bottom-item invList-bottom-item--blue">
                  Television 〉
                </span>
              </div>
            </div>
            <div classname="invList-bottom-labels-a__horizental">
              <div className="invList-bottom-title-wrapper">
                <span classNAme="invList-bottom-title">CATEGORY</span>
              </div>
              <div className="invList-bottom-item">
                <span className="invList-bottom-item">Electronics</span>
              </div>
            </div>
          </div>
          <div classNAme="invList-bottom-labels-b">
            <div classname="invList-bottom-labels-b__horizental">
              <div className="invList-bottom-title-wrapper">
                <span classNAme="invList-bottom-title">STATUS</span>
              </div>
              <div className="invList-bottom-item">
                <span className="invList-bottom-item--inStock">IN STOCK</span>
              </div>
            </div>

            <div classname="invList-bottom-labels-b__horizental">
              <div className="invList-bottom-title-wrapper">
                <span classNAme="invList-bottom-title">QTY</span>
              </div>
              <div className="invList-bottom-item">
                <span className="invList-bottom-item">500</span>
              </div>
            </div>

            <div classname="invList-bottom-labels-b__horizental">
              <div className="invList-bottom-title-wrapper">
                <span classNAme="invList-bottom-title">WAREHOUSE</span>
              </div>
              <div className="invList-bottom-item">
                <span className="invList-bottom-item">Manhattan</span>
              </div>
            </div>
          </div>
          <div className="invList-bottom-labels-c">
            <div classname="invList-bottom-labels-c__horizental">
              <div classNAme="invList-bottom-labels-c__text">
                <span classNAme="invList-bottom-labels-c__text">ACTIONS</span>
              </div>
              <div className="invList-bottom-labels-icons">
                <div className="invList-bottom-labels__action">
                  <img
                    src={deleteIcon}
                    alt="trash-bin-icon"
                    className="invList-bottom-labels__action-img"
                  />
                </div>
                <div className="nvList-bottom-labels__action">
                  <img
                    src={editIcon}
                    alt="pencil-icon"
                    className="invList-bottom-labels__action-img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
