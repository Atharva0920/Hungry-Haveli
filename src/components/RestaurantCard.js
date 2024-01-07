import { FOOD_IMG_URL } from "../../utils/Constants";



const RestaurantCard = (restaurantData) => {
    const { name, avgRating, cuisines, cloudinaryImageId } = restaurantData.restaurantData.info;
    const {deliveryTime} = restaurantData.restaurantData.info.sla;
    
    return (
      <div className="restaurant-card">
        <img
          className="card-img "
          src= { FOOD_IMG_URL + cloudinaryImageId}
        />
        <h3>{name}</h3>
        <div className="details">
          <h4>{avgRating}⭐</h4>
          <h4 id="time">
            <li>{deliveryTime} mins</li>
          </h4>
        </div>
        <h4>{cuisines.join(", ")}</h4>
      </div>
    );
  };


export default RestaurantCard;