import { Link } from "react-router-dom";
const RestaurantCard = ({ resData }) => {
  console.log(resData)
  return (

      <div className="m-4 p-4 w-50 rounded-lg" style={{ backgroundColor: "#f0f0f0" }}>
        <img
          src="http://upload.wikimedia.org/wikipedia/commons/7/7c/Hyderabadi_Chicken_Biryani.jpg"
          className="res-logo"
          alt="res=logo"
        />
        <h3 className="font-bold py-3 text-lg">{resData.name}</h3>
        <h4>{resData.cuisines.join(",")}</h4>
        <h4>{resData.avgRating} stars</h4>
        <p>{resData.sla?.deliveryTime} mins</p>{" "}
      </div>
  );
};

export const PromotedRestaurantCard = (RestaurantCard)=>{
  return(props)=>{
  return(
    <div className="relative">
      <label className="absolute top-0 left-0 bg-black text-white p-2 ml-4 rounded-lg">Promoted</label>
      <RestaurantCard {...props}/>
    </div>
  )
  }

}

export default RestaurantCard;
