import RestaurantCard from "./RestaurantCard";
import { restaurantDataList } from "../../utils/MockData";
import {useState} from 'react';

const Body = () => {
  const [ListOfRestaurants, setListOfRestaurants] = useState(restaurantDataList);
  const handleDeliveryTime = () =>{
      const filteredList = ListOfRestaurants.filter(
        (restaurant) => restaurant.info.sla.deliveryTime < 25
        );
        setListOfRestaurants(filteredList);
  };
  const lowCost =() =>{
    const filteredList = ListOfRestaurants.filter(
      (res) => res.info.sla.cost <= 200
      );
      setListOfRestaurants(filteredList);

  }

  const handleTopRated = ()=>{
    {
       const filteredList = ListOfRestaurants.filter(
         (rest) => rest.info.avgRating > 4.2
       );
       setListOfRestaurants(filteredList);
     }
   }
  const handleReset = () =>{
    setListOfRestaurants(restaurantDataList)
  }
    return (
      <div className="body">
        <div className="filter-container">
          <button className='filter-btn' 
            onClick={handleTopRated}>
            Top Rated 
          </button>
          <button 
            onClick = {handleDeliveryTime}>
            Fastest 
          </button>
          <button 
            onClick={lowCost}>
            Low Cost 
          </button>
          <button 
            onClick={handleReset}>
            Reset
          </button>
        </div>
        <div className="restaurant-container">
          {
              ListOfRestaurants.map((restaurant) => (
                  <RestaurantCard key = {restaurant.info.id} restaurantData = {restaurant}/>
              ))
          }       
        </div>
      </div>
    );
  };


export default Body;