import React, { useContext } from "react";
import { CartContext } from "../../App";
import Header from "../Header/Header";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <Header />
      <div className="md:container mx-auto p-5 mt-14 flex ">
        <div className="w-1/2 min-h-screen">
          <h1 className="text-xl font-bold mb-3">Edit Delivery Details</h1>
          <hr />
          <form className="space-y-3">
            <input
              className="w-full p-4 bg-gray-100 rounded-lg"
              type="text"
              placeholder="Delivery Type"
              name="deliveryType"
              required
            />
            <input
              className="w-full p-4 bg-gray-100 rounded-lg"
              type="text"
              placeholder="Address Line 1"
              name="address1"
              required
            />
            <input
              className="w-full p-4 bg-gray-100 rounded-lg"
              type="text"
              placeholder="Address Line 2"
              name="address2"
              required
            />
            <input
              className="w-full p-4 bg-gray-100 rounded-lg"
              type="text"
              placeholder="Business Name"
              name="address2"
              required
            />
            <textarea
              className="w-full p-4 bg-gray-100 rounded-lg"
              type="text"
              placeholder="Add Delivery instruction"
              name="instruction"
              required
            />
            <input
              className="cursor-pointer w-full p-4 bg-red rounded-md text-white"
              type="submit"
              value="Save and Continue"
            />
          </form>
        </div>
        <div className="w-1/2 mt-5">
          {cart.map((food) => (
            <CartItem food={food} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

const CartItem = ({ food }) => {
  const { img, name, price, quantity } = food;
  return (
    <div className="w-4/5 bg-gray-100 p-5 my-4 flex items-center ml-auto rounded-md">
      <div className=" mr-4">
        <img width={80} src={img} alt="" />
      </div>
      <div className="w-full flex justify-between items-center">
        <div className="w-2/3">
          <h1 className="font-bold">{name}</h1>
          <h1 className="text-red font-bold">${price}</h1>
          <p className="text-xs">Delivery fee $2.00</p>
        </div>
        <div className="w-2/6">
          <button className="px-3 text-xl"> - </button>
          <span className="bg-white p-3 rounded-md ">{quantity}</span>
          <button className="px-3 text-xl"> + </button>
        </div>
      </div>
    </div>
  );
};
