import arrow from "../../assets/icons/arrow_back-24px.svg";
import sort from "../../assets/icons/sort-24px.svg";
import arrowRight from "../../assets/icons/chevron_right-24px.svg";
import trash from "../../assets/icons/delete_outline-24px.svg";
import edit from "../../assets/icons/edit-24px.svg";
import "./Warehousedetail.scss";
import { Link } from "react-router-dom";

const WarehouseDetails = ({ warehouses, warehouseInventory }) => {
  const {
    warehouse_name,
    address,
    contact_name,
    contact_position,
    contact_phone,
    contact_email,
  } = warehouses;

  console.log(warehouseInventory);

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
              {warehouse_name}
            </span>
          </div>
          <Link to="/warehouse/edit">
            <div className="warehouseDetail__nameContainer-edit">
              <svg
                className="warehouseDetail__nameContainer-editImage"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="red"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="warehouseDetail__nameContainer-editImage"
                  d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04V7.04Z"
                  fill="#2E66E6"
                />
              </svg>
              <span className="warehouseDetail__nameContainer-edit-text">
                Edit
              </span>
            </div>
          </Link>
        </div>

        <div className="warehouseDetail__info">
          <div className="warehouseDetail__info-address">
            <span className="warehouseDetail__info-tag">
              WAREHOUSE ADDRESS:
            </span>
            <span className="warehouseDetail__info-text">{address}</span>
          </div>

          <div className="warehouseDetail__info-contanct">
            <div className="warehouseDetail__info-contanct-nameWrap">
              <span className="warehouseDetail__info-tag">CONTACT NAME:</span>
              <span className="warehouseDetail__info-text">{contact_name}</span>
              <span className="warehouseDetail__info-text">
                {contact_position}
              </span>
            </div>
            <div className="warehouseDetail__info-contanct-detailWrap">
              <span className="warehouseDetail__info-tag">
                CONTACT INFORMATION:
              </span>
              <span className="warehouseDetail__info-text">
                {contact_phone}
              </span>
              <span className="warehouseDetail__info-text">
                {contact_email}
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

          {warehouseInventory.map((inventory) => {
            return (
              <div
                key={inventory.id}
                className="warehouseDetail__item-info-Tablet
            "
              >
                <div className="warehouseDetail__item-info-nameWrap">
                  <span className="warehouseDetail__item-info-name">
                    {inventory.item_name}
                  </span>
                  <img
                    className="warehouseDetail__item-info-image"
                    src={arrowRight}
                    alt="arrowRight"
                  />
                </div>
                <span className="warehouseDetail__item-info-category">
                  {inventory.category}
                </span>
                <span className="warehouseDetail__item-info-status">
                  {inventory.status}
                </span>
                <span className="warehouseDetail__item-info-num">
                  {inventory.quantity}
                </span>
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
            );
          })}

          {warehouseInventory.map((inventory) => {
            return (
              <div key={inventory.id} className="warehouseDetail__item-info">
                <div className="warehouseDetail__item-info-wrap">
                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">
                      INVENTORY ITEM
                    </span>
                    <div className="warehouseDetail__item-info-nameWrap">
                      <span className="warehouseDetail__item-info-name">
                        {inventory.item_name}
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
                      {inventory.status}
                    </span>
                  </div>
                </div>

                <div className="warehouseDetail__item-info-wrap">
                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">CATEGORY</span>

                    <span className="warehouseDetail__item-info-category">
                      {inventory.category}
                    </span>
                  </div>

                  <div className="warehouseDetail__item-info-contanier">
                    <span class="warehouseDetail__item-info-tag">QTY</span>
                    <span className="warehouseDetail__item-info-num">
                      {inventory.quantity}
                    </span>
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
            );
          })}
        </div>
      </form>
    </>
  );
};

export default WarehouseDetails;
