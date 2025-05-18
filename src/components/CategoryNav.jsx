import React from "react";
import "./CategoryNav.css";
import { Link } from "react-router";

const categories = [
  { icon: "🧘", label: "Beauty & Spas" },
  { icon: "🎯", label: "Things To Do" },
  { icon: "🏠", label: "Auto & Home" },
  { icon: "🍽️", label: "Food & Drink" },
  { icon: "🎁", label: "Gifts" },
  { icon: "📍", label: "Local" },
  { icon: "🛏️", label: "Travel" },
  { icon: "🛍️", label: "Goods" },
  { icon: "🎟️", label: "Coupons" }
];

const CategoryNav = () => {
  return (
    <div className="nav2">
    <nav className="category-nav">
      {categories.map((item, idx) => (
        <Link to={`/category/${item.label}`}>
        <div className="category-item" key={idx}>
          <span className="icon">{item.icon}</span>
          <span className="label">{item.label}</span>
        </div>
        </Link>
      ))}
    </nav>
    </div>
  );
};

export default CategoryNav;
