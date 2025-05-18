import React, { useState, useEffect } from "react";
import "./MainData.css";

const MainData = () => {
  const [data, setData] = useState([]);
  const [limit,setLimit]=useState(15)
  // Function to fetch data
  function handleData() {
    setLimit(prev=>prev+15)
    fetch(`https://groupon-backend-znhk.onrender.com/groupon/get-product?limit=${limit}`)
      .then((res) => res.json())
      .then((json) => {
        setData(json);
        console.log("Fetched Data:", json);
      })
      .catch((err) => console.error("Fetch error:", err));
  }

  // Automatically load data on mount
  useEffect(() => {
    handleData();
  }, []);

  return (
    <>
      <div className="main-container">
        {data.map((e) => (
          <div className="card" key={e.id}>
            <div className="image-container">
              <img src={e.img} alt={e.title} />
              <span className="tag">% Save Big This May</span>
              <span className="heart">♡</span>
            </div>
            <div className="card-content">
              <p className="subtitle">{e.subtitle}</p>
              <p className="title">{e.title}</p>
              <p className="address">{e.address}</p>
              <p className="rating">
                ⭐ {e.rating}{" "}
                <span className="reviews">({e.reviews})</span>
              </p>
              <div className="price-row">
                <span className="original-price">${e.originalPrice}</span>
                <span className="discount-price">${e.dealPrice}</span>
                <span className="discount-percent">{e.discount}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Reload Button */}
      <button className="btn-main" onClick={handleData}>
        LOAD
      </button>
    </>
  );
};

export default MainData;
