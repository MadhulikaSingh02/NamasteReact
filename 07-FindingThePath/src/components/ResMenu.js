import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; //hook to fetch the req params
import {
  TYPE_KEY_RESTAURANT,
  IMAGE_CDN_URL,
  RESTAURANT_MENU_API_URL,
} from "../utils/constants";
import Shimmer from "./Shimmer";

const ResMenu = () => {
  const [restaurantInfo, setRestaurantInfo] = useState(null);
  const { resId } = useParams(); // call useParams and get value of resId using object destructuring

  //when this page loads, make an api call to get the data for this restaurant
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //function to get the restaurant data
  const getRestaurantInfo = async () => {
    const response = await fetch(RESTAURANT_MENU_API_URL + resId);
    const json = await response.json();
    console.log(json);

    //This response fetches both the restaurant info and the restaurant menu
    //Fetching restaurant info
    const resInfo = json?.data?.cards
      ?.map((c) => c.card)
      .find((c) => c && c.card["@type"] === TYPE_KEY_RESTAURANT).card?.info;
    setRestaurantInfo(resInfo);
  };

  return !restaurantInfo ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu-container">
      <div className="r-info">
        <img
          className="r-img"
          src={IMAGE_CDN_URL + restaurantInfo?.cloudinaryImageId}
          alt={restaurantInfo?.name}
        />
        <div className="r-info-details">
          <h2>{restaurantInfo?.name}</h2>
          <p>{restaurantInfo?.cuisines?.join(", ")}</p>
          <div className="r-rating-details">
            <div
              className="r-rating"
              style={
                restaurantInfo?.avgRating < 4
                  ? { backgroundColor: "var(--light-red)" }
                  : restaurantInfo?.avgRating === "--"
                  ? { backgroundColor: "white", color: "black" }
                  : { color: "white" }
              }
            >
              <i className="fa-solid fa-star"></i>
              <span>{restaurantInfo?.avgRating}</span>
            </div>
            <span className="r-total-rating">
              ({restaurantInfo?.totalRatingsString})
            </span>
            <div>•</div>
            <div>{restaurantInfo?.sla?.slaString}</div>
            <div>•</div>
            <div>{restaurantInfo?.costForTwoMessage}</div>
          </div>
        </div>
      </div>
      {/*top portion end */}
      <div className="menu-container">Menus</div>
    </div>
  );
};
export { ResMenu };
