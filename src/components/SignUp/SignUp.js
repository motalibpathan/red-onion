import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import FoodBackground from "../FoodBackground/FoodBackground";
import Loading from "../Loading/Loading";
import SocialMediaLogin from "../SocialMediaLogin/SocialMediaLogin";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;
    if (password === confirmPassword) {
      await createUserWithEmailAndPassword(email, password);
      await updateProfile({ displayName: name });
      navigate("/");
      console.log(user);
    } else {
      toast.error("Password and confirmPassword does not matched");
    }
  };

  return (
    <>
      {(loading || updating) && <Loading />}
      <div className="md:container mx-auto min-h-screen w-full p-5">
        <Link to="/">
          <img className="mx-auto" width={300} src="/images/logo2.png" alt="" />
        </Link>
        <form
          onSubmit={handleRegister}
          className="w-full md:w-1/3 lg:w-1/3 mt-16 mx-auto space-y-6"
        >
          <input
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="text"
            placeholder="Name"
            name="name"
            required
          />
          <input
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="email"
            placeholder="Email"
            name="email"
            required
          />
          <input
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="password"
            placeholder="Password"
            name="password"
            required
          />
          <input
            className="w-full p-4 bg-gray-100 rounded-lg"
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            required
          />
          <input
            className="cursor-pointer w-full p-4 bg-red rounded-md text-white"
            type="submit"
            value={"Sign up"}
          />
        </form>
        {error && <p className="text-red text-center mt-2">{error?.message}</p>}

        {updateError && (
          <p className=" text-center mt-2">
            Reset Error:
            <span className="text-red">{updateError?.message}</span>
          </p>
        )}

        <p className="text-center mt-5">
          Already have an account?{" "}
          <Link to={"/login"} className="text-red underline">
            Login
          </Link>
        </p>
        <SocialMediaLogin />
        <FoodBackground />
      </div>
    </>
  );
};

export default SignUp;
