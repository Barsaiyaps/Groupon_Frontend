import React from "react";
import "./Header.css";
import {Link} from "react-router";

const Header = () => {
  return (
    <div className="nav1">
    <header className="header">
      <Link to="/"><div className="logo">GROUPON</div></Link>

      <div className="search-bar">
        <input type="text" placeholder="Search for deals" />
        <select className="location-select">
          <option>Las Vegas, NV</option>
          <option>New York, NY</option>
          <option>Los Angeles, CA</option>
        </select>
        <button className="search-btn">🔍</button>
      </div>

      <div className="header-icons">
        <span title="Wishlist">♡</span>
        <span title="Cart">🛒</span>
        <span className="notification" title="Notifications">
          🔔
          <span className="badge">10</span>
        </span>
        <div className="sign-in">
          <span>👤</span> <span className="signin-text">Sign In</span> ▼
        </div>
      </div>
    </header>
    </div>
  );
};

export default Header;
