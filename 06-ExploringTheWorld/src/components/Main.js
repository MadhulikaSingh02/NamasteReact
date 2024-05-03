import ResCard from "./ResCard";
// import { resList } from "../utils/list";
import { useState, useEffect } from "react";
import { SWIGGY_APP_URL } from "../utils/constants";

//function to search for a restaurant
function searchForRestaurant(allRestaurantList, searchText) {
  return allRestaurantList.filter((r) =>
    r?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

//filter out all restaurants with a rating 4.0 and above
function filterRestaurant(allRestaurantList) {
  return allRestaurantList.filter((r) => parseFloat(r.info.avgRating) >= 4.2);
}

//Main Component in the App
export default Main = () => {
  //state variable -  state variables are used to store and manage dynamic data within a component.
  //default value can be anything
  //Default value - inside useState()
  let [allRestaurantList, setAllRestaurantList] = useState([]);
  let [searchText, setSearchText] = useState("");

  //useEffect hook to fetch API data after initial Rendering of the page
  //Page loads->Initial Render->Inside useEffect callback API called ->Re-render
  useEffect(() => {
    fetchData();
  }, []);

  //function to fetch SWIGGY Data
  const fetchData = async () => {
    const response = await fetch(SWIGGY_APP_URL);
    const json = await response.json();
    const restaurantData =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    console.log(restaurantData);
    setAllRestaurantList(restaurantData);
  };
  //First a skeleton is rendered, then useEffect api is invoked
  return (
    <div>
      <div className="search-container">
        <div className="search-input">
          <input
            type="text"
            name="search"
            id="search-text"
            placeholder="Looking for a restaurant..."
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if (e.target.value === "") {
                console.log("Empty..reload");
                setAllRestaurantList(resList);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchedList = searchForRestaurant(
                allRestaurantList,
                searchText
              );
              setAllRestaurantList(searchedList);
            }}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            type="button"
            onClick={() => {
              const filteredlist = filterRestaurant(allRestaurantList);
              setAllRestaurantList(filteredlist); //here we are invoking a function, diffing algo and then rerendering
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {allRestaurantList.map((res) => (
          <ResCard key={res.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};
// resName="Desi Gali"
// cuisine="North Indian, Biriyani"
// rating="4.0"
// delivery="30 min"
