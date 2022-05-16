import React from "react";
import Card from "../Card/Card";

const AboutUs = () => {
  const cardData = [
    {
      id: 1,
      title: "Fast Delivery",
      desc: "Keep your system in sync with automated web hook based notification each time link is padi and how we dream about our future.",
      img: "images/adult-blur-blurred-background-687824.png",
      icon: "images/icons/Group 204.png",
    },
    {
      id: 2,
      title: "A Good Auto Responder",
      desc: "Keep your system in sync with automated web hook based notification each time link is padi and how we dream about our future.",
      img: "images/chef-cook-food-33614.png",
      icon: "images/icons/Group 1133.png",
    },
    {
      id: 3,
      title: "Home Delivery",
      desc: "Keep your system in sync with automated web hook based notification each time link is padi and how we dream about our future.",
      img: "images/architecture-building-city-2047397.png",
      icon: "images/icons/Group 245.png",
    },
  ];
  return (
    <div className="md:container mx-auto p-5">
      <div className="mb-10">
        <h1 className="text-4xl my-7">Why you choose us</h1>
        <p className="lg:w-1/3 w-full">
          Barhon waited twenty always repair in within we do. An delighted
          offending curiosity my is dashwoods at. Boy prosperous increasing
          surrounded.
        </p>
      </div>
      <div className="md:flex md:space-x-10 md:space-y-0 space-y-10">
        {cardData.map((cardInfo) => (
          <Card key={cardInfo.id} cardInfo={cardInfo} />
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
