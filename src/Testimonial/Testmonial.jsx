import "./testmonial.css";
import img1 from "../asset/testmonial1.png";
import img2 from "../asset/testmonial2.png";
import img3 from "../asset/testmonial3.png";
import React, { useState, useEffect } from "react";

const testimonials = [
    {
      text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
      name: "John Doe",
      job: "CEO, Company Name",
      img: img1,
    },
    {
      text: "Another testimonial text goes here. It can be anything you want.",
      name: "Jane Smith",
      job: "CTO, Another Company",
      img: img2,
    },
    {
      text: "Yet another testimonial text. This is a different testimonial.",
      name: "Alice Johnson",
      job: "CFO, Some Company",
      img: img3,
    },
    // Add more testimonials as needed
  ];

const Testimonial = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000); // Change testimonial every 5 seconds
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
  return (
    <div className="testimonial">
      <div className="testimonial__content__left">
        <h5>Testimonials</h5>
        <h1>What People Say About Us.</h1>
      </div>
      <div className="testimonial__content__right">
        <div className="testimonial__card__content">
          <div className="testimonial__img">
            <img src={testimonials[currentTestimonial].img} alt="" />
          </div>
          <div className="testimonial__background__card"></div>
          <div className="testimonial__front_card">
            <p className="testimonial__card__text">
              {testimonials[currentTestimonial].text}
            </p>
            <h3 className="testimonial__card__text__name">
              {testimonials[currentTestimonial].name}
            </h3>
            <h4 className="testimonial__card__text__job">
              {testimonials[currentTestimonial].job}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
