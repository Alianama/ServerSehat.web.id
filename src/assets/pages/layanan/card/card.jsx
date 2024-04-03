import "./cardStyle.css";
import PropTypes from "prop-types";

export default function Card({ name, description }) {
  return (
    <div className="e-card playing">
      <div className="image"></div>

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
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
