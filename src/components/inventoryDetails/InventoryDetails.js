import React from "react";
import backIcon from "../../assets/icons/arrow_back-24px.svg";
import editIcon from "../../assets/icons/edit-24px.svg";
import "./InventoryDetails.scss";

export default function InventoryItemDetails(props) {
  return (
    <>
      <section className="item">
        <form className="itemForm">
          <div className="item-top">
            <div className="item-top__backIcon">
              <img
                src={backIcon}
                alt="arrow-back-icon"
                className="item-top__backIcon"
              />
            </div>
            <h1 className="item-top__title">TV</h1>
            <div className="item-top__edit">
              <img
                src={editIcon}
                alt="edit-icon"
                className="item-top__editIcon"
              />
            </div>
          </div>
          <div className="item-bottom">
            <div className="item-bottom__left">
              <div className="item-bottom__left__description">
                <h3 className="item-bottom__title item-bottom__left__descriptionTitle">
                  ITEM DESCRIPTION
                </h3>
                <span className="item-bottom__left__descriptionText"></span>
              </div>
              <div className="item-bottom__right__category">
                <h3 className="item-bottom__title  item-bottom__right__categoryTitle">
                  CATEGORY
                </h3>
                <span className="item-bottom__right__categoryText"></span>
              </div>
            </div>

            <div className="item-bottom__right-wrapper">
              <div className="item-bottom__right item-bottom__right__uppper">
                <div className="item-bottom__right__status">
                  <h3 className="item-bottom__title  item-bottom__right__statusTitle">
                    STATUS
                  </h3>
                  <span className="item-bottom__right__statusText"></span>
                </div>

                <div className="item-bottom__right__qty">
                  <h3 className="item-bottom__title item-bottom__right__qtyTitle">
                    QUANTITY
                  </h3>
                  <span className="item-bottom__right__qtyText"></span>
                </div>
              </div>
              <div className="item-bottom__right item-bottom__right__bottom">
                <div className="item-bottom__right__warehouse">
                  <h3 className="item-bottom__title item-bottom__right__warehouseTitle">
                    WAREHOUSE
                  </h3>
                  <span className="item-bottom__right__warehouseText"></span>
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
}
