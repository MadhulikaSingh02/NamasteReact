import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SWIGGY_APP_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

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
  let [errorMessage, setErrorMessgae] = useState("");

  //useEffect hook to fetch API data after initial Rendering of the page
  //Page loads->Initial Render->Inside useEffect callback API called ->Re-render
  useEffect(() => {
    getRestaurants();
    // const timer = setInterval(() => {
    //   console.log("Useeffect set interval");
    // }, 1000);
    // return () => {
    //   clearInterval(timer);
    // };
  }, []);

  //function to fetch SWIGGY Data
  const getRestaurants = async () => {
    const response = await fetch(SWIGGY_APP_URL);
    const json = await response.json();

    //There is an array of cards. Need to fetch the card that has the restaurants
    let restaurantData = isRequiredDataPresent(json);
    console.log(restaurantData);
    setRestaurants(restaurantData);

    //this is done so that the initial rendering shows the cards
    setFilteredList(restaurantData);
  };

  //Getting the required restuarants from the api
  function isRequiredDataPresent(json) {
    let restaurants = [];
    for (let i = 0; i < json?.data?.cards.length; ++i) {
      let resArr =
        json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (resArr) restaurants = [...restaurants, ...resArr];
    }
    //Remove any duplicate restaurants,otherwise {key} will be duplicated, throwing an error
    if (restaurants?.length > 0) {
      // Declare a new array
      let uniqueRestaurants = [];

      // Declare an empty object
      let uniqueObject = {};

      // Loop for the array elements
      for (let i in restaurants) {
        //Extract the restaurant.info.id for each restaurant
        let objectId = restaurants[i].info.id;

        // Use the id as the index - object of objects
        uniqueObject[objectId] = restaurants[i];
      }
      // uniqueObject={
      //   1308:{...},
      //   2345:{ ..},
      //   6754:{..}
      // }

      // Loop to push unique object into array
      for (let ind in uniqueObject) {
        uniqueRestaurants.push(uniqueObject[ind]);
      }
      return uniqueRestaurants;
    }
  }

  //function to search for a restaurant
  function searchForRestaurant(restaurants, searchText) {
    //When the searchText is "", all the restaurants will be returned since every string includes empty string.
    const searchedList = restaurants.filter((r) =>
      r?.info?.name.toLowerCase()?.includes(searchText.toLowerCase())
    );
    if (searchedList?.length > 0) {
      setFilteredList(searchedList);
      setErrorMessgae("");
    } else {
      setFilteredList(restaurants);
      setErrorMessgae("No restaurants found! Please re-try.");
      setSearchText("");
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
    <div className="main">
      <div className="search-container">
        <input
          type="text"
          name="search"
          className="search-input"
          id="search-text"
          placeholder="Looking for a restaurant..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          //if (e.target.value === "") {
          //fetchRestaurantData(); //Making another fetch call is expensive
          //Another approach is keep 'restaurants' intact, create another SV for filtered out restaurants
          //}
        />
        <button
          className="search-btn"
          onClick={() => {
            //Filter the restaurant cards and update the UI
            searchForRestaurant(restaurants, searchText);
          }}
        >
          Search
        </button>

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
      {errorMessage && <div className="error-container">{errorMessage}</div>}
      <div className="res-container">
        {filteredList.map((res) => (
          <Link key={res.info?.id} to={"/restaurants/" + res.info?.id}>
            <RestaurantCard resData={res} />
          </Link>
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
