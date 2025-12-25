import React, { useState } from "react"; //usestate is react hook 
import {Link} from 'react-router-dom';

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0); // 0 mean default mean at index 0 we are at dashboard , index 1 for order, holding at index 2
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);//by default drop down will not open 
  
  //to detect click we write a function
  const handleMenuClick = (index) => {//we start with default value from index i'e 0 then to 1 , then 2
  setSelectedMenu(index);
  };

  const handleProfileClick = (index) => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen); //!isProfileDropdownOpen it mean if it is true the n become false , if false then become true
    };

  const menuClass = "menu"; //we highlight the current option that we choose by hovering so for that menu option that we choosen give class for that

  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
             <Link style={{textDecoration:"none"}} to="/" onClick={() => handleMenuClick(0)}>  {/*as this path goes to summary so to="/"  */}
             <p className={selectedMenu === 0 ? activeMenuClass: menuClass}>Dashboard</p>  {/*if this class is selected then give as active class otherwise normal menuclass  */}
              </Link>
            </li>
          <li>
              <Link 
                 style={{textDecoration:"none"}} 
                 to="/orders" 
                 onClick={() => handleMenuClick(1)}
                > 
              <p className={selectedMenu === 1 ? activeMenuClass: menuClass}>
                Orders
              </p> 
              </Link>
          </li>
          <li>
             <Link 
                 style={{textDecoration:"none"}} 
                 to="/holdings" 
                 onClick={() => handleMenuClick(2)}
                > 
              <p className={selectedMenu === 2 ? activeMenuClass: menuClass}>
                Holdings
              </p> 
              </Link>
          </li>
          <li>
              <Link 
                 style={{textDecoration:"none"}} 
                 to="/positions" 
                 onClick={() => handleMenuClick(3)}
                > 
              <p className={selectedMenu === 3 ? activeMenuClass: menuClass}>
               Positions
              </p> 
              </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(5)}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
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
