import RestaurantCard from "./RestaurantCard";
// import { restaurantDataList } from "../../utils/MockData";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [searchText, setSearchText] = useState("");
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5154741&lng=73.8500717&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurants(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  useEffect(() => {
    fetchData();
  }, []);

  const filterDeliveryTime = () => {
    const filteredList = ListOfRestaurants.filter(
      (restaurant) => restaurant.info.sla.deliveryTime < 25
    );
    setFilteredList(filteredList);
  };

  const filterTopRated = () => {
    {
      const filteredList = ListOfRestaurants.filter(
        (restaurant) => restaurant.info.avgRating > 4
      );
      setFilteredList(filteredList);
    }
  };
  return ListOfRestaurants.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter-container">
        <input
          className="search-container"
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        ></input>
        <button
          className="filter-btn search"
          onClick={() => {
            const filteredList = ListOfRestaurants.filter((res) => {
              return res.info.name.toLowerCase().includes(searchText.toLowerCase());
            });
            setFilteredList(filteredList);
        
          }}
        >
          Search
        </button>
        <button className="filter-btn filter" onClick={filterTopRated}>
          Top Rated
        </button>
        <button className="filter-btn filter" onClick={filterDeliveryTime}>
          Fastest
        </button>
      </div>

      <div className="restaurant-container">
        {filteredList.map((restaurant) => (
          <RestaurantCard
            key={restaurant.info.id}
            restaurantData={restaurant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
