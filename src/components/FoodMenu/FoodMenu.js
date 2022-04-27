import React, { useEffect, useState } from "react";
import Food from "../Food/Food";
import useFoods from "../hooks/useFoods";

const FoodMenu = () => {
  const [allFoods] = useFoods([]);
  const [foods, setFoods] = useState([]);
  const menuItems = ["Breakfast", "Lunch", "Dinner"];

  useEffect(() => {
    const filteredFood = allFoods?.filter(
      (food) => food.category === "Breakfast"
    );
    setFoods(filteredFood);

    return () => {};
  }, [allFoods]);

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
      <div className="grid grid-cols-3 gap-14">
        {foods.map((food) => (
          <Food key={food.id} food={food} />
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
