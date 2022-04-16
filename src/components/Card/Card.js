import React from "react";

const Card = ({ cardInfo }) => {
  const { img, icon, title, desc } = cardInfo;
  return (
    <div className="w-full">
      <img src={img} alt="" />
      <div className="p-7 flex">
        <div>
          <img width={130} src={icon} alt="" />
        </div>
        <div className="ml-3">
          <h1 className="text-xl font-bold mb-3">{title}</h1>
          <p>{desc}</p>
          <div className="flex items-center cursor-pointer mt-5">
            <p className="mr-3 text-blue-500 ">See more</p>
            <img width={40} src="/images/icons/arrow.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
