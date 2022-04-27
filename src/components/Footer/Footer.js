import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className="md:container mx-auto p-14">
        <div className="md:flex md:mb-14 mb-5">
          <div className="w-2/3">
            <img width={200} src="/images/logo.png" alt="" />
          </div>
          <div className="w-full md:w-1/3 text-white md:flex md: md:mt-0 mt-5">
            <ul className="w-full md:w-1/2 space-y-3">
              <li>About Online food</li>
              <li>Read our blog</li>
              <li>Sign up to deliver</li>
              <li>Add your restaurant</li>
            </ul>
            <ul className="w-full md:w-1/2 space-y-3">
              <li>Get help</li>
              <li>Read FAQs</li>
              <li>View all cities</li>
              <li>Restaurants near me</li>
            </ul>
          </div>
        </div>
        <div className="flex md:flex-row flex-col justify-between ">
          <p className="text-gray-400 md:order-1 order-2">
            Copyright &copy; -{new Date().getFullYear()} Onion Food
          </p>
          <ul className="md:mb-0 mb-3 md:order-2 order-1 md:flex md:space-x-9 text-white">
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
            <li>Pricing</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
