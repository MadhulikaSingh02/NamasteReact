import { useState } from "react";
import MenuItem from "./MenuItem";

const DisplayArrowButton = ({ isVisible, setIsVisible }) => {
  // arrow-down - Menu displayed //Collapse - Hide menus
  //Display arrow-up - Expand -Show menus
  return (
    <div className="visible-arrows">
      {isVisible ? (
        <button
          className="visible-arrows-up"
          onClick={() => setIsVisible(false)}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      ) : (
        <button
          className="visible-arrows-down"
          onClick={() => setIsVisible(true)}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      )}
    </div>
  );
};

export default RestaurantCategory = (props) => {
  const { category } = props;
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="restaurant-category">
      <div className="category-title">
        <div>
          {category.title}
          <span>({category.itemCards.length})</span>
        </div>
        <DisplayArrowButton isVisible={isVisible} setIsVisible={setIsVisible} />
      </div>

      <div className="category-menu-items">
        <ul>
          {category.itemCards.map((item) => (
            <MenuItem key={item.card.info.id} itemInfo={item.card.info} />
          ))}
        </ul>
      </div>
    </div>
  );
};
