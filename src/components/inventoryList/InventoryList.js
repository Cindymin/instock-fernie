import React from "react";
import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import less from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";

const InventoryList = (props) => {
  const items = props.inventory;
  return (
    <form className="invList">
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

      <div className="invList__item">
        <div className="invList__item-bar">
          <div className="invList__item-bar-wrap">
            <span class="invList__item-bar-text title-inv">INVENTORY ITEM</span>
            <img
              class="invList__item-bar-icon invList__item-bar-icon__inventory"
              src={sortIcon}
              alt="sort-icon"
            />
          </div>

          <div className="invList__item-bar-wrap">
            <span className="invList__item-bar-text title-cat">CATEGORY</span>
            <img
              class="invList__item-bar-icon invList__item-bar-icon__category"
              src={sortIcon}
              alt="sort-icon"
            />
          </div>

          <div className="invList__item-bar-wrap status">
            <span className="invList__item-bar-text title-sta">STATUS</span>
            <img
              class="invList__item-bar-icon invList__item-bar-icon__status"
              src={sortIcon}
              alt="sort"
            />
          </div>

          <div className="invList__item-bar-wrap  quantity">
            <span className="invList__item-bar-text title-qty">QTY</span>
            <img
              class="invList__item-bar-icon invList__item-bar-icon__qty"
              src={sortIcon}
              alt="sort"
            />
          </div>

          <div className="invList__item-bar-wrap  warehouse">
            <span className="invList__item-bar-text title-ware">WAREHOUSE</span>
            <img
              class="invList__item-bar-icon invList__item-bar-icon__warehouse"
              src={sortIcon}
              alt="sort"
            />
          </div>

          <span className="invList__item-bar-text">ACTIONS</span>
        </div>
        {items &&
          items.map((item) => (
            <div
              className="invList__item-info-Tablet
            "
            >
              <div className="invList__item-info-nameWrap">
                <span className="invList__item-info-name">
                  {item.item_name}
                </span>
                <img
                  className="invList__item-info-image"
                  src={less}
                  alt="arrowRight"
                />
              </div>
              <span className="invList__item-info-category">
                {item.category}
              </span>

              {item.status === "In Stock" && (
                <div className="invList__item-info-status">
                  <span className="invList__item-info-status--inStock">
                    In Stock
                  </span>
                </div>
              )}
              {item.status === "Out of Stock" && (
                <div className="invList__item-info-status">
                  <span className="invList__item-info-status--outOfStock">
                    Out of Stock
                  </span>
                </div>
              )}

              <span className="invList__item-info-num">{item.quantity}</span>
              <span className="invList__item-info-warehouse">tabeletsize</span>
              <div className="invList__item-info-actions">
                <Link to="/delete-inventory">
                  <img
                    className="invList__item-info-actions-imge"
                    src={deleteIcon}
                    alt="delete"
                  />
                </Link>
                <img
                  className="invList__item-info-actions-imge"
                  src={editIcon}
                  alt="edit"
                />
              </div>
            </div>
          ))}

        {items &&
          items.map((item) => (
            <>
              <div className="invList__item-info">
                <div className="invList__item-info-wrap" key={item.id}>
                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">INVENTORY ITEM</span>
                    <div className="invList__item-info-nameWrap">
                      <span className="invList__item-info-name">
                        {item.item_name}
                      </span>
                      <img
                        className="invList__item-info-image"
                        src={less}
                        alt="arrowRight"
                      />
                    </div>
                  </div>

                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">STATUS</span>
                    {item.status === "In Stock" && (
                      <div className="invList__item-info-status">
                        <span className="invList__item-info-status--inStock">
                          In Stock
                        </span>
                      </div>
                    )}
                    {item.status === "Out of Stock" && (
                      <div className="invList__item-info-status">
                        <span className="invList__item-info-status--outOfStock">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="invList__item-info-wrap">
                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">CATEGORY</span>

                    <span className="invList__item-info-category">
                      {item.category}
                    </span>
                  </div>

                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">QTY</span>
                    <span className="invList__item-info-num">
                      {item.quantity}
                    </span>
                  </div>
                </div>

                <div className="invList__item-info-wrap">
                  <div className="invList__item-info-contanier"></div>
                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">mobile</span>
                    <span className="invList__item-info-num">Manhatten</span>
                  </div>
                </div>
                <div className="invList__item-info-actions">
                  <img
                    className="invList__item-info-actions-imge"
                    src={deleteIcon}
                    alt="delete"
                  />
                  <img
                    className="invList__item-info-actions-imge"
                    src={editIcon}
                    alt="edit"
                  />
                </div>
              </div>{" "}
            </>
          ))}
      </div>
    </form>
  );
};

export default InventoryList;
