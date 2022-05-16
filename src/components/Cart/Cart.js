import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { CartContext } from "../../App";
import auth from "../../firebase.init";
import {
  addToLocalStorage,
  getShoredCart,
  removeAllFromLocalStorage,
} from "../../utilities/utilities";
import Header from "../Header/Header";
import Loading from "../Loading/Loading";

const Cart = () => {
  const { cart, setCart } = useContext(CartContext);
  const [isOrderPlaced, setIsOrderPlaced] = useState({});
  const [deliveryInfo, setDeliveryInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const deliveryFee = 2;
  let totalQuantity = 0;
  const subTotal = cart.reduce((prev, curr) => {
    totalQuantity = totalQuantity + curr.quantity;
    return prev + curr.quantity * curr.price;
  }, 0);
  const tax = subTotal * 0.05;

  const handleQuantity = (_id, isIncrease) => {
    const selectedFood = cart.find((f) => f._id === _id);
    if (isIncrease) {
      if (selectedFood.quantity > 0) {
        selectedFood.quantity = selectedFood.quantity + 1;
        setCart([...cart]);
        addToLocalStorage(_id, 1);
      }
    }
    if (!isIncrease) {
      if (selectedFood.quantity > 1) {
        selectedFood.quantity = selectedFood.quantity - 1;
        setCart([...cart]);
        addToLocalStorage(_id, -1);
      }
    }
  };

  const handleDeliveryInfo = (e) => {
    e.preventDefault();

    console.log(e.target);
    const email = user?.email;
    const deliveryType = e.target["deliveryType"].value;
    const addressOne = e.target["address1"].value;
    const addressTwo = e.target["address2"].value;
    const businessName = e.target["businessName"].value;
    const instruction = e.target["instruction"].value;
    const storedCart = getShoredCart();
    const keys = Object.keys(storedCart);

    const info = {
      purchasedDate: new Date(),
      email,
      deliveryType,
      addressOne,
      addressTwo,
      businessName,
      instruction,
      orderedFood: keys,
    };
    if (cart.length > 0) {
      setDeliveryInfo(info);
    } else {
      toast.error("No items available in cart");
    }
  };
  const handlePlaceOrder = () => {
    setIsLoading(true);
    fetch(`${process.env.REACT_APP_API_DOMAIN}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(deliveryInfo),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Success:", result);
        setIsLoading(false);
        setIsOrderPlaced(result);
        setCart([]);
        removeAllFromLocalStorage();
      });
  };
  return (
    <div>
      <Header />
      <div className="md:container mx-auto p-5 lg:mt-14 mt-3 flex lg:flex-row flex-col">
        <div className="w-full lg:w-1/2 lg:min-h-screen">
          <h1 className="text-xl font-bold mb-3">Edit Delivery Details</h1>
          <hr />
          {!user && (
            <div>
              <h1 className="my-5 text-red text-2xl ">
                Please Login Before Proceed
              </h1>
              <button
                onClick={() =>
                  navigate("/login", { state: { from: location } })
                }
                className="px-7 py-2 bg-red text-white rounded-md font-bold"
              >
                Login
              </button>
            </div>
          )}
          <form
            onSubmit={handleDeliveryInfo}
            className={`${!user ? "hidden" : ""} space-y-3`}
          >
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
              name="businessName"
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
        <div className="w-full lg:w-1/2 mt-5">
          <div className="w-full lg:w-4/5 ml-auto">
            <h1>
              From:{" "}
              <span className="font-bold">Gulshan Plaza Restaurant GPR</span>
            </h1>
            <p>Arriving in 20-3 min</p>
            <p>107 Rd No 8</p>
          </div>
          {cart.map((food) => (
            <CartItem
              key={food._id}
              food={food}
              handleQuantity={handleQuantity}
            />
          ))}
          <div className="w-full lg:w-4/5 ml-auto">
            <h1 className="flex justify-between my-2">
              <span>
                Subtotal --{" "}
                <span className="font-bold ">{totalQuantity} items</span>
              </span>
              <span>${subTotal.toFixed(2)}</span>
            </h1>
            <p className="flex justify-between my-2">
              <span>Tax</span> <span>${tax.toFixed(2)}</span>
            </p>
            <p className="flex justify-between my-2">
              <span> Delivery fee</span> <span>${deliveryFee}</span>
            </p>
            <p className="flex justify-between my-2">
              <span> Total</span>{" "}
              <span className="ml-auto">${(subTotal + tax).toFixed(2)}</span>
            </p>
            <button
              onClick={handlePlaceOrder}
              disabled={!deliveryInfo.email}
              className={`${
                deliveryInfo.email ? "bg-red" : "bg-gray-200 cursor-not-allowed"
              } cursor-pointer w-full p-4  rounded-md text-white`}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
      {isLoading && <Loading />}
      {isOrderPlaced?.insertedId && (
        <div className="left-0 top-0 z-10 absolute w-full h-screen flex justify-center items-center bg-gray-900 bg-opacity-90">
          <div className="text-white flex items-center space-x-5">
            <div>{checkSvg}</div>
            <div>
              <h1 className="text-2xl text-green-400">
                Thank you for Place order
              </h1>
              <p>Your Order id: {isOrderPlaced?.insertedId}</p>
              <Link className="text-rose-500 font-bold underline" to={"/"}>
                Go to home
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

const CartItem = ({ food, handleQuantity }) => {
  const { _id, img, name, price, quantity } = food;
  return (
    <div className="w-full lg:w-4/5 bg-gray-100 p-5 my-4 flex items-center ml-auto rounded-md">
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
          <button
            onClick={() => handleQuantity(_id, false)}
            className="px-3 text-xl"
          >
            {" "}
            -{" "}
          </button>
          <span className="bg-white p-3 rounded-md ">{quantity}</span>
          <button
            onClick={() => handleQuantity(_id, true)}
            className="px-3 text-xl"
          >
            {" "}
            +{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

const checkSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-14 w-14 text-green-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);
