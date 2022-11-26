import "./InventoryList.scss";
import searchIcon from "../../assets/icons/search-24px.svg";
import deleteIcon from "../../assets/icons/delete_outline-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import sortIcon from "../../assets/icons/sort-24px.svg";
import less from "../../assets/icons/chevron_right-24px.svg";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

const InventoryList = (props) => {
  const [warehouse, setWarehouse] = useState([]);
  const items = props.inventory;

  useEffect(() => {
    const getWarehouseDetail = () => {
      axios
        .get(`http://localhost:8080/warehouses/`)
        .then((res) => {
          setWarehouse(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      return warehouse;
    };
    getWarehouseDetail();
  }, []);

  const found = (id) => {
    const result = warehouse
      .filter((item) => item.id === id)
      .map((x) => x.warehouse_name);
    return result;
  };

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
          <Link to="/inventory/add">
            <button className="invList-top-btn--blue">+ Add New Item</button>
          </Link>
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
              className="invList__item-bar-icon invList__item-bar-icon__status"
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
          items.slice(0, 8).map((item) => (
            <div
              className="invList__item-info-Tablet
            "
              key={item.id}
            >
              <div className="invList__item-info-nameWrap">
                <Link to={`/inventory/${item.id}`}>
                  <span className="invList__item-info-name">
                    {item.item_name}
                  </span>
                  <img
                    className="invList__item-info-image"
                    src={less}
                    alt="arrowRight"
                  />{" "}
                </Link>
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

              <span className="invList__item-info-warehouse">
                {found(item.warehouse_id)}
              </span>
              <div className="invList__item-info-actions">
                <img
                  className="invList__item-info-actions-imge"
                  src={deleteIcon}
                  alt="delete"
                />
                <Link to={`/inventory/${item.id}/edit`}>
                  <img
                    className="invList__item-info-actions-imge"
                    src={editIcon}
                    alt="edit"
                  />
                </Link>
              </div>
            </div>
          ))}

        {items &&
          items.slice(0, 8).map((item) => (
            <>
              <div className="invList__item-info">
                <div className="invList__item-info-wrap" key={item.id}>
                  <div className="invList__item-info-contanier">
                    <span class="invList__item-info-tag">INVENTORY ITEM</span>
                    <div className="invList__item-info-nameWrap">
                      <Link to={`/inventory/${item.id}`}>
                        <span className="invList__item-info-name">
                          {item.item_name}
                        </span>
                        <img
                          className="invList__item-info-image"
                          src={less}
                          alt="arrowRight"
                        />{" "}
                      </Link>
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
                    <span class="invList__item-info-tag">WAREHOUSE</span>
                    <span className="invList__item-info-num">
                      {found(item.warehouse_id)}
                    </span>
                  </div>
                </div>
                <div className="invList__item-info-actions">
                  <img
                    className="invList__item-info-actions-imge"
                    src={deleteIcon}
                    alt="delete"
                  />
                  <Link to={`/inventory/${item.id}/edit`}>
                    <img
                      className="invList__item-info-actions-imge"
                      src={editIcon}
                      alt="edit"
                    />
                  </Link>
                </div>
              </div>
            </>
          ))}
      </div>
    </form>
  );
};

export default InventoryList;
