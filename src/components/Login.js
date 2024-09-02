import React from "react";
import Header from "./Header";
import { useState } from "react";

const Login = () => {

  const [isSignInFrom,setIsSignInFrom] = useState(true);

  const toggleSignInfrom = () => {
    setIsSignInFrom(!isSignInFrom);
  }
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/31ef2c5c-3d08-47d5-b7a9-f29e4f4f893d/1ac1cee7-5580-4cfa-b701-99d1a8f2d148/IN-en-20240506-POP_SIGNUP_TWO_WEEKS-perspective_WEB_ebbef551-d229-4865-8cdc-fb00f8960227_large.jpg"
          alt="backgound"
        />
      </div>
      <form className="text-white w-3/12 absolute p-12 bg-black	 my-44 mx-auto to right-0 left-0 bg-opacity-85">
        <h1 className="text-3xl py-4"> { isSignInFrom ? "Sign In" : "Sign Up "}</h1>
       
        {
        !isSignInFrom &&(
          <input
          type="text"
          placeholder="Full Name"
          className="rounded w-full p-3 my-2 bg-gray-700"
        />
        )
       }

         <input
          type="text"
          placeholder="Email or phone number"
          className="rounded w-full p-3 my-2 bg-gray-700"
        />
       
        <input
          type="password"
          placeholder="Password"
          className="rounded w-full p-3 my-2 bg-gray-700"
        />
        <button className="w-full p-2 my-5  bg-red-700 rounded">
          {isSignInFrom ? "Sign In" : "Sign Up "}
        </button>
        <p className="py-4 cursor-pointer" 
        onClick={toggleSignInfrom}
        >
          {isSignInFrom ? "New to Netflix? Sign up now" : "Already registred? Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
