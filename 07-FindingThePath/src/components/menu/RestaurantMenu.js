import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //hook to fetch the req params
import {
  TYPE_KEY_RESTAURANT,
  TYPE_KEY_MENU_ITEM,
  RESTAURANT_MENU_API_URL,
} from "../../utils/constants";
import { MenuShimmer } from "../Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import RestaurantBanner from "./RestaurantBanner";

const RestaurantMenu = () => {
  const [info, setInfo] = useState(null);
  const [completeMenu, setCompleteMenu] = useState([]); //This contains all the menu. To keep the initial data intact.
  const [menu, setMenu] = useState([]); //this will keep changing based on the toggle switch
  const [isVegOnly, setIsVegOnly] = useState(false); //initially we are displaying all dishes
  const { resId } = useParams(); // call useParams and get value of resId using object destructuring

  //when this page loads, make an api call to get the data for this restaurant
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //function to get the restaurant data
  const getRestaurantInfo = async () => {
    const response = await fetch(RESTAURANT_MENU_API_URL + resId);
    const json = await response.json();

    //This response fetches both the restaurant info and the restaurant menu
    //Fetching restaurant info for rendering the Restaurant Banner.
    // console.log(json?.data);
    const resInfo = json?.data?.cards
      ?.map((c) => c.card)
      .find((c) => c && c.card["@type"] === TYPE_KEY_RESTAURANT).card?.info;
    setInfo(resInfo);

    //Fetching restaurant menu
    const menuItemCards = json?.data?.cards.find((c) => c.groupedCard)
      .groupedCard?.cardGroupMap?.REGULAR.cards; //Array of menu items

    const allMenus = menuItemCards
      .map((c) => c?.card?.card)
      .filter((c) => c["@type"] === TYPE_KEY_MENU_ITEM);
    setCompleteMenu(allMenus);
    setMenu(allMenus);
  };

  //Function to handle the display of Veg and All Dishes
  //Invoked on the Veg Dishes Slider
  const toggleHandler = () => {
    if (isVegOnly) {
      //already veg, toggle switch to show all the dishes
      setIsVegOnly(false);
      setMenu(completeMenu);
    } else {
      setIsVegOnly(true);
      let vegMenu = [];
      menu.forEach((m) => {
        let obj = {};
        obj.title = m.title;
        let vegOnly = m.itemCards.filter(
          (ic) => ic.card.info.itemAttribute?.vegClassifier === "VEG"
        );
        obj.itemCards = vegOnly;
        vegMenu.push(obj);
      });
      setMenu(vegMenu);
    }
  };

  return !info ? (
    <MenuShimmer />
  ) : (
    <div className="restaurant-menu-container">
      <RestaurantBanner info={info} />
      <div className="menu-container">
        <div className="switch-container">
          <h5>Veg Dishes</h5>
          <label className="switch">
            <input
              type="checkbox"
              className="checked"
              onChange={toggleHandler}
            />
            <span className="slider round"></span>
          </label>
        </div>
        {menu.map((m) => (
          <RestaurantCategory key={m.title} category={m} />
        ))}
      </div>
    </div>
  );
};
export { RestaurantMenu };
