import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

    const [showItem,setShowItem] = useState(null);

  const restInfo = useRestaurantMenu(resId);
  // const categories = restInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards;
  const Categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ==
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory",
    );
  console.log(Categories);

  if (restInfo == null) {
    return <Shimmer />;
  }

  return (
    <div className="text-center">
      <h1 className="my-4 text-xl">{restInfo.cards[2].card.card.info.name}</h1>
      <p>{restInfo.cards[2].card.card.info.costForTwo}</p>
      <p>{restInfo.cards[2].card.card.info.cuisines.join(",")}</p>
      {/* Categories */}
      {Categories.map((category, index) => {
        return <RestaurantCategory key={index} data={category?.card?.card} showItem={index==showItem?true:false} setShowItem = {()=>setShowItem(index==showItem?null:index)}/>;
      })}
    </div>
  );
};

export default RestaurantMenu;
