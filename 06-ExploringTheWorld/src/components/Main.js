import ResCard from "./ResCard";
// import { resList } from "../utils/list";
import { useState, useEffect } from "react";
import { SWIGGY_APP_URL } from "../utils/constants";
import Shimmer from "./Shimmer";

//function to search for a restaurant
function searchForRestaurant(restaurants, searchText) {
  //When the searchText is "", all the restaurants will be returned since every string includes empty string.
  return restaurants.filter((r) =>
    r?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
  );
}

//filter out all restaurants with a rating 4.0 and above
function filterRestaurant(restaurants) {
  return restaurants.filter((r) => parseFloat(r.info.avgRating) >= 4.0);
}

//Main Component in the App
export default Main = () => {
  //state variable -  state variables are used to store and manage dynamic data within a component.
  //Default value can be anything.Default value - inside useState()
  //Whenever there is a change in the State Variable, React triggers a reconciliation cycle and re-renders the whole Main component
  let [restaurants, setRestaurants] = useState([]);
  let [searchText, setSearchText] = useState("");
  let [filteredList, setFilteredList] = useState([]);

  //useEffect hook to fetch API data after initial Rendering of the page
  //Page loads->Initial Render->Inside useEffect callback API called ->Re-render
  useEffect(() => {
    fetchRestaurantData();
  }, []);

  //function to fetch SWIGGY Data
  const fetchRestaurantData = async () => {
    const response = await fetch(SWIGGY_APP_URL);
    const json = await response.json();

    //There is an array of cards. Need to fetch the card that has the restaurants
    let restaurantData = isRequiredDataPresent(json);
    setRestaurants(restaurantData);

    //this is done so that the initial rendering shows the cards
    setFilteredList(restaurantData);
  };

  //Getting the required
  function isRequiredDataPresent(json) {
    for (let i = 0; i < json?.data?.cards.length; ++i) {
      const restaurants =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      if (restaurants !== undefined) {
        return restaurants;
      }
    }
  }

  //First a skeleton is rendered, then useEffect api is invoked
  //This gives a blank screen for a few ms, so instead we can display a loading screen.
  //Instead we use the concept of Shimmer UI

  //Rendering a component based on a Condition - Conditional Rendering
  // if (restaurants?.length === 0) {
  //   // return <h1>Loading....</h1>;
  //   //As soon as the page loads, call Shimmer UI
  //   return <Shimmer />;
  // }

  return restaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
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
              //if (e.target.value === "") {
              //fetchRestaurantData(); //Making another fetch call is expensive
              //Another approach is keep 'restaurants' intact, create another SV for filtered out restaurants
              //}
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              //Filter the restaurant cards and update the UI
              const searchedList = searchForRestaurant(restaurants, searchText);
              setFilteredList(searchedList);
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
              const filteredList = filterRestaurant(restaurants);
              setFilteredList(filteredList); //here we are invoking a function, diffing algo and then rerendering
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>

      <div className="res-container">
        {filteredList.map((res) => (
          <ResCard key={res.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

//Notes:In the input box, 'value' has to be bound with a local State variable
{
  /* <input type="text" name="search" id="search-text" placeholder="Looking for a restaurant..."
            value={searchText}>Search</input> */
}
//If you give like above and type in the UI, nothing prints in the Box
//why??? - When you give value={searchtext}, it is tied as a stateVariable.
//We are trying to change the value, but we are not capturing it.
//so it behaves as read-only with the default value given in the useState
//Hence onChange handler should be used to capture the value.
