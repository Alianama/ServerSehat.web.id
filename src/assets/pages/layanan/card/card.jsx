import "./cardStyle.css";
import PropTypes from "prop-types";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Card({ image, name, description }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-down"
      data-aos-duration="1000"
      className="e-card playing"
    >
      <div className="image">
        <img src={image} width={100} alt="icon" />
      </div>

      <div className="wave"></div>
      <div className="wave"></div>
      <div className="wave"></div>

      <div className="infotop">
        {name}
        <br />
        <div className="name">{description}</div>
      </div>
    </div>
  );
}
Card.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;
