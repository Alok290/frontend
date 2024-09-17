import React, { useEffect, useRef } from "react";
import "./service.css";
import treeElement from "../asset/treeElement.png";

const carouselData = [
  {
    imgSrc: "", // Add your image source here
    altText: "planeImage",
    title: "Airline Tickets",
    description:
      "Book your flight to your dream destination with our airline ticket booking service. We offer competitive prices and a seamless booking experience.",
  },
  {
    imgSrc: "", // Add your image source here
    altText: "hotelImage",
    title: "Hotel Booking",
    description:
      "Find the best deals on hotels and book your stay with ease. Enjoy a comfortable and luxurious experience at top-rated hotels.",
  },
  {
    imgSrc: "", // Add your image source here
    altText: "carImage",
    title: "Car Rentals",
    description:
      "Rent a car for your travels with our convenient car rental service. Choose from a wide range of vehicles to suit your needs.",
  },
  {
    imgSrc: "", // Add your image source here
    altText: "tourImage",
    title: "Tour Packages",
    description:
      "Explore our curated tour packages and embark on an unforgettable journey. Discover new places and create lasting memories.",
  },
  {
    imgSrc: "", // Add your image source here
    altText: "cruiseImage",
    title: "Cruise Trips",
    description:
      "Set sail on a luxurious cruise and experience the beauty of the open sea. Enjoy top-notch amenities and breathtaking views.",
  },
  {
    imgSrc: "", // Add your image source here
    altText: "trainImage",
    title: "Train Tickets",
    description:
      "Book your train tickets with ease and travel comfortably to your destination. Enjoy scenic routes and convenient schedules.",
  },
];

const Service = () => {
  const carouselRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: "smooth",
        });
      }
    }, 10000); // 40 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="service-container">
      <div className="service__headline">
        <h4>Services</h4>
        <h1>Our Top Value Categories For You</h1>
        <img src={treeElement} alt="lineImage" />
      </div>
      <div className="service__carousel" ref={carouselRef}>
        {carouselData.map((item, index) => (
          <div className="carousel_item" key={index}>
            <img src={item.imgSrc} alt={item.altText} />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
