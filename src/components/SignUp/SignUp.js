import React from "react";
import { Link } from "react-router-dom";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const SignUp = () => {
  return (
    <div className="md:container mx-auto h-screen w-full p-5">
      <Link to="/">
        <img className="mx-auto" width={300} src="/images/logo2.png" alt="" />
      </Link>
      <form action="" className="w-1/3 mt-16 mx-auto space-y-6">
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="text"
          placeholder="Name"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="email"
          placeholder="Email"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Password"
        />
        <input
          className="w-full p-4 bg-gray-100 rounded-lg"
          type="password"
          placeholder="Confirm Password"
        />
        <input
          className="w-full p-4 bg-red rounded-md text-white"
          type="submit"
          value={"Sign up"}
        />
      </form>
      <p className="text-center mt-5">
        Already have an account?{" "}
        <Link to={"/login"} className="text-red underline">
          Login
        </Link>
      </p>
      <SocialMediaLogin />
    </div>
  );
};

export default SignUp;
