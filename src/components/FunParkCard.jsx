import React from "react";
import "./FunParkCard.css";

const FunParkCard = ({image}) => {
  return (
    <div className="card">
      <div className="image-container">
        <img
          src={image} // Replace with your actual image
          alt="Uptown Jungle Fun Park"
        />
        <span className="tag">Popular Gift</span>
        <span className="heart">♡</span>
      </div>
      <div className="card-content">
        <p className="subtitle">Uptown Jungle Fun Park - North Vegas</p>
        <p className="title">
          3-Hour Admission to Uptown Jungle Fun Park N. Las Vegas
        </p>
        <p className="address">
          1631 West Craig Road, North Las Vegas <span className="distance">4.8 mi</span>
        </p>
        <p className="rating">
          ⭐ 4.7 <span className="reviews">(3,041)</span>
        </p>
        <div className="price-row">
          <span className="original-price">$22</span>
          <span className="discount-price">$16</span>
          <span className="discount-percent">-27%</span>
        </div>
        <p className="coupon-price">
          $12.80 <span className="with-code">with code</span> <span className="code">SAVEINMAY</span>
        </p>
      </div>
    </div>
  );
};

export default FunParkCard;
