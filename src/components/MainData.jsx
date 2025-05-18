import React from "react";
import { useState,useEffect } from "react";
import "./MainData.css";
import {giftData} from "../../data/db.json";

const MainData = () => {
    let arr=giftData
    const [data,setData] = useState(arr)

    useEffect(()=>{
        setData(arr)
    },[arr])

    console.log(data[1])
return (
<>
<div className="main-container">
   {data.map(e=>(
    <div className="card">
      <div className="image-container">
        <img src={e.img} />
        <span className="tag">% Save Big This May</span>
        <span className="heart">♡</span>
      </div>
      <div className="card-content">
        <p className="subtitle">{e.subtitle}</p>
        <p className="title">{e.title}</p>
        <p className="address">{e.address} <span className="distance"></span></p>
        <p className="rating">⭐ {e.rating} <span className="reviews">({e.reviews})</span></p>
        <div className="price-row">
          <span className="original-price">${e.originalPrice}</span>
          <span className="discount-price">${e.dealPrice}</span>
          <span className="discount-percent">{e.discount}</span>
        </div>
      </div>
    </div>
    
    ))}
</div>
    <button className="btn-main">LOAD</button>
</>
  );
};

export default MainData;
