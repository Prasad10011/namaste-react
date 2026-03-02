import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItem, setShowItem }) => {

  const handleClick = () => {
    setShowItem();
  };
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-200 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
          <span>
            {data.title} ({data?.itemCards.length})
          </span>
          <div>🡓</div>
        </div>
        {showItem && <ItemList items={data.itemCards} />}
      </div>

      {/* Accordian body */}
    </div>
  );
};

export default RestaurantCategory;
