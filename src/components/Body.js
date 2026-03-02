import { use, useEffect, useState } from "react";
import RestaurantCard,{PromotedRestaurantCard} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const onlineStatus = useOnlineStatus();
  useEffect(() => {
    fetchData();
  }, []);

  
  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const result = await data.json();
    const restaurants =
    result.data.data.cards[1].card.card.gridElements.infoWithStyle
    .restaurants;
    
    setListOfRestaurant(restaurants);
    setAllListOfRestaurant(restaurants);
  };
  
  const [listOfRestaurants, setListOfRestaurant] = useState([]);
  const [allListOfRestaurants, setAllListOfRestaurant] = useState([]);
  
  const [searchText, setSearchText] = useState("");
  
  const filterRestaurant = () => {
    let updateList = allListOfRestaurants.filter((restaurant) => {
      if (restaurant.info.avgRating > 4.3) {
        return restaurant;
      }
    });
    setListOfRestaurant(updateList);
  };
  
  const PromotedResCard = PromotedRestaurantCard(RestaurantCard);
  if (!onlineStatus) {
    return <h1>seems you are offline,please try again</h1>;
  }

  if (listOfRestaurants.length == 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter m-4 p-4">
        <input
          type="text"
          className="border rounded-lg"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="m-4 p-2 border-0  rounded-lg bg-green-300"
          type="button"
          onClick={() => {
            const filtered = allListOfRestaurants.filter((restaurant) =>
              restaurant.info.name
                .toLowerCase()
                .includes(searchText.toLowerCase()),
            );

            setListOfRestaurant(filtered);
          }}
        >
          Search
        </button>
        <button
          className="m-4 p-2 border-0 rounded-lg bg-gray-100"
          onClick={filterRestaurant}
        >
          Top restaurant
        </button>
      </div>
      {/* <div className="search">Search</div> */}
      <div className="flex items-start justify-content-between flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <PromotedResCard resData={restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
