import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../App";
import { addToLocalStorage } from "../../utilities/utilities";
import Header from "../Header/Header";

const FoodDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [food, setFood] = useState({});
  const { cart, setCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_DOMAIN}/food/${id}`)
      .then((res) => res.json())
      .then((data) => setFood(data));
  }, [id]);

  const { img, name, description, price } = food;

  const handleQuantity = (isIncrease) => {
    if (isIncrease && quantity > 0) {
      setQuantity(quantity + 1);
    }
    if (!isIncrease && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = (food) => {
    const selectedFood = cart.find((f) => f._id === food._id);

    if (selectedFood) {
      selectedFood.quantity = selectedFood.quantity + quantity;
      const filterCart = cart.filter((f) => f._id !== food._id);
      setCart([...filterCart, selectedFood]);
      addToLocalStorage(selectedFood._id, quantity);
    } else {
      food.quantity = quantity;
      setCart([...cart, food]);
      addToLocalStorage(food._id, quantity);
    }
  };

  return (
    <>
      <Header />
      <div className="md:w-4/6 mx-auto p-5 ">
        <div className="flex items-center min-h-[600px]">
          <div>
            <h1 className="text-6xl my-2">{name}</h1>
            <p className="w-4/6 my-5">{description}</p>
            <div className="flex items-center">
              <p className="font-bold text-4xl mr-3">${price}</p>
              <div className="rounded-full border-2 inline-block font-bold text-xl">
                <button
                  onClick={() => handleQuantity(false)}
                  className="px-5 mr-3 text-2xl"
                >
                  --{" "}
                </button>
                <span>{quantity}</span>
                <button
                  onClick={() => handleQuantity(true)}
                  className="text-red px-5 py-3 ml-3 text-2xl"
                >
                  +{" "}
                </button>
              </div>
            </div>
            <button
              onClick={() => handleAddToCart(food)}
              className="mt-4 px-7 py-3 bg-red rounded-full font-bold text-white hover:border-2 border-2 border-red hover:bg-white hover:text-red duration-500"
            >
              {carSvg} Add
            </button>
          </div>
          <img width={"500"} className="mx-auto" src={img} alt="" />
        </div>
      </div>
    </>
  );
};

export default FoodDetails;

const carSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-6 w-6 mr-3"
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
