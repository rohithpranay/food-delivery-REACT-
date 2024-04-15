import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../utils/constants";
import Shimmer from "./shimmer";

function filterData(searchText, restaurants) {
  let filteredData = restaurants.filter((res) =>
    res?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return filteredData;
}
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(swiggy_api_URL);
      const jsonData = await response.json();
      async function checkJsonData(data) {
        for (let i = 0; i < data?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            jsonData?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }
      const resData = await checkJsonData(jsonData);

      setRestaurants(resData);
    } catch (error) {
      console.error(error);
    }
  };
  // ////////////
  // conditional rendering
  // ///////////
  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          console.log(restaurant);
          return (
            <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
