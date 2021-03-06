import React, { useEffect, useState } from "react";
import useFoods from "../../hooks/useFoods";
import Food from "../Food/Food";
import { loadingSvg } from "../Loading/Loading";

const FoodMenu = () => {
  const [allFoods, , isFoodLoading] = useFoods([]);
  const [foods, setFoods] = useState([]);
  const menuItems = ["Breakfast", "Lunch", "Dinner"];

  useEffect(() => {
    const filteredFood = allFoods?.filter(
      (food) => food.category === "Breakfast"
    );
    setFoods(filteredFood);
  }, [allFoods]);

  if (isFoodLoading) {
    return (
      <div className="w-full h-[300px] flex justify-center items-center">
        {loadingSvg}
      </div>
    );
  }

  const handleFilterFood = (category) => {
    const filteredFood = allFoods.filter((food) => food.category === category);
    setFoods(filteredFood);
  };

  return (
    <div className="md:container mx-auto">
      <ul className="font-bold flex justify-center my-14 gap-x-10">
        {menuItems.map((item, i) => (
          <li
            key={i}
            className={`cursor-pointer  ${
              foods[0]?.category === item && "text-red border-b-4 border-b-red"
            }`}
            onClick={() => handleFilterFood(item)}
          >
            {item}
          </li>
        ))}
      </ul>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 p-5">
        {foods.map((food) => (
          <Food key={food._id} food={food} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <button className=" px-7 py-3 bg-red rounded-md font-bold text-white hover:border-2 border-2 border-red hover:bg-white hover:text-red duration-500">
          See More
        </button>
      </div>
    </div>
  );
};

export default FoodMenu;
