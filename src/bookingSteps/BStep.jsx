import React from "react";
import "./BStep.css";
import img2 from "../asset/bookingstep-img.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faCreditCard,
  faPlaneDeparture,
  faHeart,
  faMap,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { faEnvira } from "@fortawesome/free-brands-svg-icons"; // Import faEnvira

const BStep = () => {
  return (
    <div className="main">
      <div className="booking__step">
        <div className="booking__step__title__section">
          <h4>Easy and Fast</h4>
          <h1>Book Your Next Trip In 3 Easy Steps</h1>
        </div>

        <div className="step">
          <div className="step-icon bg-primary">
            <FontAwesomeIcon icon={faMapMarkerAlt} size="2x" />
          </div>
          <div className="step-content">
            <h5 className="text-secondary fw-bold">Choose Destination</h5>
            <p>
              Choose your favourite place. No matter{" "}
              <br className="d-none d-sm-block" />
              where you travel inside the World.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon bg-secondary">
            <FontAwesomeIcon icon={faCreditCard} size="2x" />
          </div>
          <div className="step-content">
            <h5 className="text-secondary fw-bold">Make Payment</h5>
            <p>
              After finding your perfect spot, make your{" "}
              <br className="d-none d-sm-block" />
              payment and get ready to travel.
            </p>
          </div>
        </div>
        <div className="step">
          <div className="step-icon bg-tertiary">
            <FontAwesomeIcon icon={faPlaneDeparture} size="2x" />
          </div>
          <div className="step-content">
            <h5 className="text-secondary fw-bold">
              Reach Airport on Selected Date
            </h5>
            <p>
              Lastly, you have to arrive at the airport{" "}
              <br className="d-none d-sm-block" />
              on time and enjoy the vacation.
            </p>
          </div>
        </div>
      </div>
      <div className="booking__step_right_sections">
        <div className="right__image">
          <img src={img2} alt="Trip to Greece" className="card-img" />
        </div>
        <div className="main__sections__content">
          <h4>Trip To Greece</h4>
          <p>14-29 June | by Robbin joseph</p>
          <div className="section__content">
            <div className="content-span">
              <i>
                <FontAwesomeIcon icon={faEnvira} rotation={90} />
              </i>
            </div>
            <div className="content-span">
              <i>
                <FontAwesomeIcon icon={faMap} />
              </i>
            </div>
            <div className="content-span">
              <i>
                <FontAwesomeIcon icon={faPaperPlane} />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BStep;
