import arrow from "../../assets/icons/arrow_back-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import trash from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "./Warehousedetail.scss";

const WarehouseDetails = () => {
  return (
    <>
      <form className="warehouseDetail">
        <div className="warehouseDetail__nameContainer">
          <div className="warehouseDetail__nameContainer-wrapper">
            <img
              className="warehouseDetail__nameContainer-arrow"
              src={arrow}
              alt="arrow"
            />
            <span className="warehouseDetail__nameContainer-name">
              Washington
            </span>
          </div>

          <div className="warehouseDetail__nameContainer-edit">
            <img src={edit} alt="" />
            <span> edit</span>
          </div>
        </div>

        <div className="warehouseDetail__info">
          <div className="warehouseDetail__info-address">
            <span className="warehouseDetail__info-tag">
              WAREHOUSE ADDRESS:
            </span>
            <span className="warehouseDetail__info-text">
              33 Pearl Street SW, Washington, USA
            </span>
          </div>

          <div className="warehouseDetail__info-contanct">
            <div className="warehouseDetail__info-contanct-nameWrap">
              <span className="warehouseDetail__info-tag">CONTACT NAME:</span>
              <span className="warehouseDetail__info-text">Greame Lyon</span>
              <span className="warehouseDetail__info-text">
                Warehouse Manager
              </span>
            </div>
            <div className="warehouseDetail__info-contanct-detailWrap">
              <span className="warehouseDetail__info-tag">
                CONTACT INFORMATION:
              </span>
              <span className="warehouseDetail__info-text">
                +1(647)504-0911
              </span>
              <span className="warehouseDetail__info-text">
                glyon@instock.com
              </span>
            </div>
          </div>
        </div>

        <div className="warehouseDetail__item">
          <div className="warehouseDetail__item-bar">
            <div className="warehouseDetail__item-bar-wrap">
              <span class="warehouseDetail__item-bar-text">INVENTORY ITEM</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap">
              <span className="warehouseDetail__item-bar-text">CATEGORY</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap status">
              <span className="warehouseDetail__item-bar-text">STATUS</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <div className="warehouseDetail__item-bar-wrap  quantity">
              <span className="warehouseDetail__item-bar-text">QUANTITY</span>
              <img class="warehouseDetail__item-bar-icon" src={sort} alt="" />
            </div>

            <span className="warehouseDetail__item-bar-text">ACTIONS</span>
          </div>

          <div
            className="warehouseDetail__item-info-Tablet
            "
          >
            <div className="warehouseDetail__item-info-nameWrap">
              <span className="warehouseDetail__item-info-name">
                Television
              </span>
              <img
                className="warehouseDetail__item-info-image"
                src={arrowRight}
                alt="arrowRight"
              />
            </div>
            <span className="warehouseDetail__item-info-category">
              Electronics
            </span>
            <span className="warehouseDetail__item-info-status">IN STOCK</span>
            <span className="warehouseDetail__item-info-num">500</span>
            <div className="warehouseDetail__item-info-actions">
              <img
                className="warehouseDetail__item-info-actions-imge"
                src={trash}
                alt="delete"
              />
              <img
                className="warehouseDetail__item-info-actions-imge"
                src={edit}
                alt="edit"
              />
            </div>
          </div>

          <div className="warehouseDetail__item-info">
            <div className="warehouseDetail__item-info-wrap">
              <div className="warehouseDetail__item-info-contanier">
                <span class="warehouseDetail__item-info-tag">
                  INVENTORY ITEM
                </span>
                <div className="warehouseDetail__item-info-nameWrap">
                  <span className="warehouseDetail__item-info-name">
                    Television
                  </span>
                  <img
                    className="warehouseDetail__item-info-image"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                </div>
              </div>

              <div className="warehouseDetail__item-info-contanier">
                <span class="warehouseDetail__item-info-tag">STATUS</span>
                <span className="warehouseDetail__item-info-status">
                  IN STOCK
                </span>
              </div>
            </div>

            <div className="warehouseDetail__item-info-wrap">
              <div className="warehouseDetail__item-info-contanier">
                <span class="warehouseDetail__item-info-tag">CATEGORY</span>

                <span className="warehouseDetail__item-info-category">
                  Electronics
                </span>
              </div>

              <div className="warehouseDetail__item-info-contanier">
                <span class="warehouseDetail__item-info-tag">QTY</span>
                <span className="warehouseDetail__item-info-num">500</span>
              </div>
            </div>

            <div className="warehouseDetail__item-info-actions">
              <img
                className="warehouseDetail__item-info-actions-imge"
                src={trash}
                alt="delete"
              />
              <img
                className="warehouseDetail__item-info-actions-imge"
                src={edit}
                alt="edit"
              />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default WarehouseDetails;
