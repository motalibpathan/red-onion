import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import FoodMenu from "../FoodMenu/FoodMenu";
import Header from "../Header/Header";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{ backgroundImage: "url(images/bannerbackground.png)" }}
        className="header-bg flex justify-center items-center"
      >
        <div>
          <h1 className="text-6xl mb-7 ">Best food waiting for your belly</h1>
          <div className="flex justify-center items-center relative">
            <input
              className="bg-white py-4 pl-7 rounded-full w-3/4 outline-none"
              type="text"
              placeholder="Search food items"
            />
            <input
              className="px-9 bg-red py-4 text-white rounded-full absolute right-0 mx-24 cursor-pointer"
              type="submit"
              value="Search"
            />
          </div>
        </div>
      </div>
      <FoodMenu />
      <AboutUs />
    </>
  );
};

export default Home;
