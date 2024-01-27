import React from "react";
import "./navbar.css";
const NavBar = () => {
  
  return (
    <div className="container">
      <i class="fa-solid fa-bars"></i>
      <img
        src="https://www.gstatic.com/images/branding/product/1x/forms_2020q4_48dp.png"
        alt="myiform-logo"
      />
      <div className="iforms">iForms</div>

      <div className="search-input-container">
        <i class="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Search" className="navbar-search-input" /> 
      </div>
      

      <i class="fa-solid fa-user"></i>
    </div>
  );
};

export default NavBar;
