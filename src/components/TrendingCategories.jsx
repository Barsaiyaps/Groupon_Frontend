import React from "react";
import "./TrendingCategories.css";

const categories = [
  {
    title: "Beauty & Spas",
    items: [
      "Deep Tissue Massage Near You",
      "Full Body Massage Near You",
      "Teeth Cleaning Near You",
      "Lash Extensions Near You",
      "Keratin Treatment Near You",
      "Reflexology Near You",
      "Eyebrow Threading Near You",
      "Brazilian Wax Near You",
      "Pedicure Near You",
      "Day Spa Near You",
      "Lip Fillers Near You",
      "Tanning Near You",
      "Massage Near You",
      "Laser Hair Removal Near You",
      "Nail Salon Near You",
      "Couples Massage Near You",
      "Salon Near You",
      "Barber Shops Near You",
      "Hair Salons Near You",
      "Spa Near You"
    ]
  },
  {
    title: "Food & Drink",
    items: [
      "Food Near You",
      "American Restaurants Near You",
      "Bars Near You",
      "Chinese Food Near You",
      "Indian Food Near You",
      "Italian Restaurants Near You",
      "Mexican Food Near You",
      "Pizza Near You",
      "Steakhouses Near You",
      "Sushi Near You"
    ]
  },
  {
    title: "Things To Do",
    items: [
      "Fun Activities Near You",
      "Cheap Movie Tickets",
      "Events Near You",
      "Photography Classes Near You",
      "Kids Shows Near You",
      "Cheap Concert Tickets",
      "Things to Do Near You",
      "Amusement Parks Near You",
      "Arcade Near You",
      "Bowling Near You",
      "Escape Rooms Near You",
      "Kids Activities Near You",
      "Mini Golf Near You",
      "Museums Near You",
      "Trampoline Park Near You",
      "Zoos Near You"
    ]
  },
  {
    title: "Health & Fitness",
    items: [
      "Eye Exam Near You",
      "Dentist Near You",
      "Teeth Whitening Near You",
      "B12 Shots Near You",
      "Pilates Near You",
      "Chiropractor Near You",
      "Dance Classes Near You",
      "Dermatologist Near You",
      "Fitness Classes Near You",
      "Colon Cleanse Near You",
      "Invisalign Near You",
      "Golf Near You",
      "Gyms Near You",
      "Weight Loss Clinic Near You",
      "Yoga Near You"
    ]
  },
  {
    title: "Automotive",
    items: [
      "Oil Change Near You",
      "Car Detailing Near You",
      "Car Wash Near You",
      "Mechanic Near You",
      "Wheel Alignment Near You"
    ]
  },
  {
    title: "Personal Services",
    items: [
      "Classes Near You",
      "Hobbies Near You",
      "Cooking Classes Near You",
      "Photographers Near You"
    ]
  },
  {
    title: "Home Services",
    items: [
      "Air Duct Cleaning Near You",
      "Carpet Cleaning Near You"
    ]
  }
];

const TrendingCategories = () => {
  return (
    <div className="foot1">
    <div className="trending-container">
      <h2>Trending in Groupon</h2>
      <p>
        Groupon is your place for savings and discovery while exploring fun
        activities in your city and around the country.
      </p>
      <div className="columns">
        {categories.map((category, index) => (
          <div className="column" key={index}>
            <h3>{category.title}</h3>
            <ul>
              {category.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default TrendingCategories;
