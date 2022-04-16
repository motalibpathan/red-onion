import React from "react";

const Food = ({ food }) => {
  console.log(process.env.PUBLIC_URL);
  const { img, name, desc, price } = food;
  return (
    <div className="w-full text-center hover:shadow-2xl p-5 rounded-lg">
      <img width={"200"} className="mx-auto" src={img} alt="" />
      <h1 className="font-bold my-2">{name}</h1>
      <p>{desc}</p>
      <p className="font-bold text-2xl">${price}</p>
    </div>
  );
};

export default Food;
