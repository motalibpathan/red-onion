import { signOut } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import auth from "../../firebase.init";

const Header = () => {
  const [user] = useAuthState(auth);
  const { cart } = useContext(CartContext);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const cartTotal = cart.reduce((prev, curr) => prev + curr.quantity, 0);

  const navItem = (
    <>
      {!user ? (
        <>
          <Link to={"/login"}>Login</Link>
          <Link
            className="block px-7 bg-red py-2 text-white rounded-lg"
            to={"/register"}
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link to={"/orders"}>Orders</Link>
          <p>
            {userSvg} {user.displayName}
          </p>
          <button className="py-2 rounded-lg " onClick={() => signOut(auth)}>
            {logoutSvg}
          </button>
        </>
      )}
    </>
  );

  return (
    <div className="md:container p-7 flex justify-between mx-auto relative">
      <div>
        <Link to={"/"}>
          <img width={200} src={"/images/logo2.png"} alt="" />
        </Link>
      </div>
      <nav className="hidden md:flex space-x-10 items-center font-bold">
        <Link to={"/cart"}>
          <span className="ml-3 -mt-5 rounded-full text-white absolute bg-red px-2 inline-block">
            {cartTotal}
          </span>
          {cartSvg}
        </Link>
        {navItem}
      </nav>
      <Link className="md:hidden mt-4" to={"/cart"}>
        <span className="ml-3 -mt-5 rounded-full text-white absolute bg-red px-2 inline-block">
          {cartTotal}
        </span>
        {cartSvg}
      </Link>
      <button onClick={() => setIsNavOpen(!isNavOpen)} className="md:hidden">
        {menuSvg}
      </button>
      <div
        className={`md:hidden ${
          !isNavOpen ? "w-24 opacity-0" : "w-1/2 opacity-100"
        } absolute bg-red text-white right-0 p-8 top-[70px] rounded space-y-4 duration-500`}
      >
        {navItem}
      </div>
    </div>
  );
};

export default Header;

const cartSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

const userSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="inline h-6 w-6 -mt-1 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const logoutSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
    />
  </svg>
);

const menuSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 6h16M4 12h8m-8 6h16"
    />
  </svg>
);
