import ResCard from "./ResCard";
import { resList } from "../utils/list";
import { useState } from "react";

//state variable -  state variables are used to store and manage
//dynamic data within a component.
//default value is []
//If i want to pass some default value I will give inside useState()

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
              console.log("Inside click--", searchText);
              let filteredlist = allRestaurantList.filter((r) =>
                r?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
              );
              console.log(filteredlist);
              setAllRestaurantList(filteredlist);
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
              console.log("Button clicked");
              const filteredlist = allRestaurantList.filter(
                (r) => parseFloat(r.info.rating.aggregate_rating) >= 4.0
              );
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
