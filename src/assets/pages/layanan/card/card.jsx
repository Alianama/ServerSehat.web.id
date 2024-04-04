import "./cardStyle.css";
import PropTypes from "prop-types";

export default function Card({ image, name, description }) {
  return (
    <div className="e-card playing">
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
