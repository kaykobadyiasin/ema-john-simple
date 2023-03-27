import React from "react";
import "./Header.css";
import logo from "../../images/Logo.svg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="" />
      <div>
            <a href="/shop">shop</a>
            <a href="/review">Order Review</a>
            <a href="/Inventory">Inventory</a>
            <a href="/login">login</a>
      </div>
    </div>
  );
};

export default Header;
