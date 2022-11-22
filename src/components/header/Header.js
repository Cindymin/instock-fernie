import React from "react";
import "../header/Header.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/logos/Instock_Logo_1x.png"



function Header(){


return (
  <header className="header">
    <Link to="/">
      <img className="header__logo" alt="instock-logo" src={Logo}></img>
    </Link>

    <ul className="header__nav">
        
      <li className="header__link">
        <Link to="warehouse">Warehouse</Link>
      </li>

      <li className="header__link">
        <Link to="inventory">Inventory</Link>
      </li>
    </ul>
  </header>
)
}
export default Header;