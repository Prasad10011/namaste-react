import { useState, useEffect } from "react";
const useRestaurantMenu = (resId) => {

  const [restInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );
    const result = await data.json();
    const menuCategories = result.data;
    setRestInfo(menuCategories);
  };

  return restInfo;
};

export default useRestaurantMenu;
