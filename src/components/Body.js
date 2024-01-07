import RestaurantCard from "./RestaurantCard";
import { restaurantDataList } from "../../utils/MockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <h3>Search</h3>
        </div>
        <div className="restaurant-container">
          {
              restaurantDataList.map((restaurant) => (
                  <RestaurantCard key = {restaurant.info.id} restaurantData = {restaurant}/>
              ))
          }       
        </div>
      </div>
    );
  };


export default Body;