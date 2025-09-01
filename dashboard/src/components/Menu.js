import React, { useState } from "react";

import { Link } from "react-router-dom";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const menu = "menu";
  const activeMenuClass = "menu selected";
  //These above two are classes

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "4%" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menu}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menu}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menu}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menu}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(4);
              }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menu}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              style={{ textDecoration: "none" }}
              onClick={() => {
                handleMenuClick(5);
              }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menu}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
