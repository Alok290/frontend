import React from "react";
import "./Home.css";
import BStep from "../bookingSteps/BStep";
import Testimonial from "../Testimonial/Testmonial";
import workIcon from "../asset/workIcon.png";
import topImage from "../asset/Toplayer.png";
import layerImage1 from "../asset/layerImage1.png";
import layerImage2 from "../asset/layerImage2.png";
import layerImage3 from "../asset/layerImage3.png";
import Choose from "../whyChooseUs/ChooseUs";
import Service from "../Services/Service";
const Home = () => {
  return (
    <div className="home">
      <div className="main__container">
      <div className="home__container">
        <div className="left__container">
          <div className="top__content">
            <h5>Expolre The World</h5>
            <img src={workIcon} alt="" />
          </div>
          <div className="mid__content">
            <h1>Travel Top Destination Of The World</h1>
          </div>
          <div className="bottom__content">
            <p>
              we always make our customer happy by providing as many choices as possible
            </p>
          </div>
          <div className="button__content">
            <button>Get Started</button>
          </div>
        </div>
        <div className="right__container">
          <div className="top__layer">
            <img src={topImage} alt="" />
          </div>
          <div className="layer__image">
            <div className="left__iamges">
              <img src={layerImage1} alt=""  />
              <img src={layerImage2} alt="" />
            </div>
            <div className="right__iamges">
              <img src={layerImage3} alt="" />
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className="home__content">
        <BStep />
        <Testimonial />
        <Choose />
        <Service />
      </div>
    </div>
  );
};

export default Home;
