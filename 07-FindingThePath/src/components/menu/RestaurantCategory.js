import { useState } from "react";
import MenuItem from "./MenuItem";

const DisplayArrowButton = ({ isUpArrowVisible, setIsUpArrowVisible }) => {
  return (
    <div className="visible-arrows">
      {isUpArrowVisible ? (
        <button
          className="visible-arrows-up"
          onClick={() => {
            console.log(isUpArrowVisible, "setting upArrow  - false");
            setIsUpArrowVisible(false);
          }}
        >
          <i className="fa-solid fa-angle-up"></i>
        </button>
      ) : (
        <button
          className="visible-arrows-down"
          onClick={() => {
            console.log(isUpArrowVisible, "setting upArrow  - true");
            setIsUpArrowVisible(true);
          }}
        >
          <i className="fa-solid fa-angle-down"></i>
        </button>
      )}
    </div>
  );
};

export default RestaurantCategory = (props) => {
  const { category } = props;

  //Initially when the page loads, uparrow and menu displayed - Done
  //Click on up arrow, toggle to down and no content for that category
  const [isUpArrowVisible, setIsUpArrowVisible] = useState(true);

  return (
    <div className="restaurant-category">
      <div className="category-title">
        <div>
          {category.title}
          <span>({category.itemCards.length})</span>
        </div>
        <DisplayArrowButton
          isUpArrowVisible={isUpArrowVisible}
          setIsUpArrowVisible={setIsUpArrowVisible}
        />
      </div>
      {isUpArrowVisible ? (
        <div className="category-menu-items">
          <ul>
            {category.itemCards.map((item) => (
              <MenuItem key={item.card.info.id} itemInfo={item.card.info} />
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};
