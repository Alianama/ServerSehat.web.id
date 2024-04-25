import PropTypes from "prop-types";
import checklist from "../../../icon/checklist.svg";

function Card({ name, description, lists, harga }) {
  return (
    <div
      onMouseEnter={() => console.log("mouse enter")}
      className="flex flex-col items-center rounded-3xl  border-2 border-color-2 ml-5 mr-5 pb-10 p-3 w-3/6 hover:bg-color-1 hover:text-color-white hover:scale-110 transition-all"
    >
      <h1>{name}</h1>
      <p className="text-sm mb-5">{description}</p>
      <h1 className="mb-5">Rp.{harga}</h1>
      <button className=" bg-color-2 text-color-white rounded-2xl pb-2 pt-2 pl-4 pr-4 hover:bg-color-white hover:text-color-2 transition-all">
        Purchase Plan
      </button>
      <div className="flex flex-col mt-5 gap-3">
        {lists.map((list, index) => (
          <div className="flex gap-3" key={index}>
            <img
              className="bg-color-2 rounded-full h-5 w-5"
              src={checklist}
              alt="checklist"
            />
            <p className="text-sm">{list}</p>
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
  harga: PropTypes.string,
};

export default Card;
