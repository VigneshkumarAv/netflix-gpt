import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const toggleSignIn = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div className="login-container">
      <Header />
      <form className="login-in-form w-1/3 absolute py-8 px-16 my-24 mx-auto right-0 left-0 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
          />
        )}
        <input
          type="text"
          placeholder="Email"
          className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
        />
        <input
          type="text"
          placeholder="Password"
          className="my-4 p-3 w-full rounded bg-transparent border border-gray-500"
        />
        <button className="my-4 p-3 bg-red-700 w-full rounded-lg">
          Submit
        </button>
        <p
          className="py-4 cursor-pointer hover:underline"
          onClick={toggleSignIn}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already a User? Sign In Now"}
        </p>
      </form>
      <div className="bg-image">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_small.jpg"
          alt="bg_image"
        />
      </div>
    </div>
  );
};

export default Login;
