import ResCard from "./ResCard";
import { resList } from "../utils/list";
import { useState } from "react";

//state variable -  state variables are used to store and manage
//dynamic data within a component.
//default value can be anuthing
//If i want to pass some default value I will give inside useState()

function searchForRestaurant(allRestaurantList, searchText) {
  // console.log("Inside click--", searchText);
  return allRestaurantList.filter((r) =>
    r?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}
function filterRestaurant(allRestaurantList) {
  return allRestaurantList.filter(
    (r) => parseFloat(r.info.rating.aggregate_rating) >= 4.0
  );
}

export default Main = () => {
  let [allRestaurantList, setAllRestaurantList] = useState(resList);
  let [searchText, setSearchText] = useState("");
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
          <ResCard key={res.info.resId} resData={res} />
        ))}
      </div>
    </div>
  );
};
// resName="Desi Gali"
// cuisine="North Indian, Biriyani"
// rating="4.0"
// delivery="30 min"
