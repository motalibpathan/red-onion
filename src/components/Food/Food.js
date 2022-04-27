import React from "react";
import { useNavigate } from "react-router-dom";

const Food = ({ food }) => {
  const navigate = useNavigate();
  const { _id, img, name, desc, price } = food;
  return (
    <div
      onClick={() => navigate(`/food/${_id}`)}
      className="w-full text-center hover:shadow-2xl p-5 rounded-lg"
    >
      <img width={"200"} className="mx-auto" src={img} alt="" />
      <h1 className="font-bold my-2">{name}</h1>
      <p>{desc}</p>
      <p className="font-bold text-2xl">${price}</p>
    </div>
  );
};

export default Food;
