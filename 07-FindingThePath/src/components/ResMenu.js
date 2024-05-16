import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
const ResMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  //when this page loads make an api call to get the data
  //for this restaurant
  useEffect(() => {
    getRestaurantInfo();
  }, []);

  //function to get the restaurant data
  const getRestaurantInfo = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=562233&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();
    setResInfo(json);
  };

  //   const name = resInfo?.cards[2]?.card?.card?.info.name;
  //   const cuisines = resInfo?.cards[2]?.card?.card?.info.cuisines;
  if (resInfo === null) return <Shimmer />;
  const {
    name,
    cuisines,
    costForTwoMessage,
    locality,
    cloudinaryImageId,
    avgRating,
  } = resInfo?.data.cards[2]?.card?.card?.info;

  console.log(
    name,
    cuisines,
    costForTwoMessage,
    locality,
    cloudinaryImageId,
    avgRating
  );
  return (
    <div className="res-menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")}</p>
      {locality}
      {avgRating}
    </div>
  );
};
export { ResMenu };
