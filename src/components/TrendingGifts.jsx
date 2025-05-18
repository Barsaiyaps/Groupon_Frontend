import React from "react";
import "./TrendingGifts.css";

const giftData = [
  {
    title: "Serenity Massage Therapy",
    subtitle: "Up to 30% Off on Deep Tissue Massage at Serenity Massage...",
    location: "4660 South Eastern Avenue, Las Vegas, NV",
    rating: 4.8,
    reviews: 11,
    originalPrice: 90,
    dealPrice: 63,
    extraPrice: 50.4,
    discount: "-30%",
    img: "https://img.grouponcdn.com/deal/nFmryV98S8K992EnVBmX4S11ARc/nF-1380x828/v1/t300x181.webp",
  },
  {
    title: "Las Vegas Mini Grand Prix",
    subtitle: "41% Off Thrilling Go-Kart Races at Las Vegas' Biggest Track!",
    location: "1401 North Rainbow Boulevard...",
    rating: 4.6,
    reviews: 1774,
    originalPrice: 39.99,
    dealPrice: 29.99,
    extraPrice: 24.29,
    discount: "-33%",
    img: "https://img.grouponcdn.com/deal/2xcsGpPDykJz65wKBfNe7i/4K-1920x1080/v1/t1024x619.webp",
  },
  {
    title: "Eddie Griffin Live and Unleashed at Saxe...",
    subtitle: "Eddie Griffin Live and Unleashed",
    location: "3663 South Las Vegas Boulevard...",
    rating: 4.6,
    reviews: 200,
    originalPrice: 130.78,
    dealPrice: 74.99,
    discount: "-43%",
    img: "https://img.grouponcdn.com/deal/8Bvez8HydqYugbEbsHkFpG/7t-1920x1080/v1/t300x181.webp",
  },
  {
    title: "Avalon Day Spa",
    subtitle: "60-Minute Swedish or Deep Tissue Couples Massage w/ Hot Stones ...",
    location: "4625 West Flamingo Road, Las Vegas...",
    rating: 4.7,
    reviews: 11109,
    originalPrice: 170,
    dealPrice: 119,
    extraPrice: 96.39,
    discount: "-37%",
    img: "https://img.grouponcdn.com/deal/2yL9y8LLJEFknwmhRB4iQxXFE3g6/2y-5398x3239/v1/t300x181.webp",
  }
];

const TrendingGifts = () => {
  return (
    <div className="trending-section">
      <div className="trending-header">
        <span>🎁 Trending gifts</span>
        <a href="/">See all</a>
      </div>
      <div className="gift-cards">
        {giftData.map((gift, index) => (
          <div key={index} className="gift-card">
            <img src={gift.img} alt={gift.title} />
            <div className="gift-details">
              <h4>{gift.title}</h4>
              <p>{gift.subtitle}</p>
              <small>{gift.location}</small>
              <div className="gift-rating">⭐ {gift.rating} ({gift.reviews})</div>
              <div className="gift-pricing">
                <del>${gift.originalPrice}</del>
                <span className="deal-price">${gift.dealPrice}</span>
                {gift.discount && <span className="discount">{gift.discount}</span>}
              </div>
              {gift.extraPrice && (
                <div className="gift-code">
                  <span className="extra-price">${gift.extraPrice.toFixed(2)}</span> with code <strong>SAVEINMAY</strong>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingGifts;
