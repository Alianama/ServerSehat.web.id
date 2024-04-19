import PropTypes from "prop-types";
import checklist from "../../../icon/checklist.svg";

function Card({ name, description, lists }) {
  return (
    <div className="bg-color-2 rounded-3xl p-4 w-5/6   ">
      <h1>{name}</h1>
      <p>{description}</p>
      <div>
        {lists.map((list, index) => (
          <div className="flex " key={index}>
            <img
              className=" bg-color-2 rounded-full h-5 w-5 "
              src={checklist}
              alt="checklist"
            />
            <h3>{list}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  lists: PropTypes.arrayOf(PropTypes.string),
};

export default Card;
