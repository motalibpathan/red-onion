import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFoods from "../hooks/useFoods";

const FoodDetails = () => {
  const { id } = useParams();
  const [allFoods] = useFoods([]);

  const food = allFoods.find((food) => food.id === parseInt(id)) || {};

  const { img, name, desc, price } = food;

  useEffect(() => {
    console.log("Use effect called");
  }, [allFoods, id]);

  return (
    <div className="md:w-4/6 mx-auto p-5 ">
      <div className="flex items-center">
        <div>
          <h1 className="text-6xl my-2">{name}</h1>
          <p>{desc}</p>
          <p className="font-bold text-2xl">${price}</p>
          <button className="mt-2 px-6 py-2 bg-red rounded-full font-bold text-white hover:border-2 border-2 border-red hover:bg-white hover:text-red duration-500">
            {carSvg} Add
          </button>
        </div>
        <img width={"400"} className="mx-auto" src={img} alt="" />
      </div>
    </div>
  );
};

export default FoodDetails;

const carSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);
