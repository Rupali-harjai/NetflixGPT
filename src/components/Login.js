import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/826348c2-cdcb-42a0-bc11-a788478ba5a2/6d20b198-e7ab-4e9f-a1aa-666faa0298f9/IN-en-20240729-POP_SIGNUP_TWO_WEEKS-perspective_WEB_a67d8c9e-8121-4a74-98e4-8005eb2df227_large.jpg"
          alt="bg-image"
        />
      </div>

      <form className="w-full md:w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="font-bold text-3xl mb-6 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              type="text"
              placeholder="Full Name"
              className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
            />
            <input
              type="number"
              placeholder="Phone Number"
              className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
            />
          </>
        )}
        <input
          type="text"
          placeholder="Email Address"
          className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
        />

        <input
          type="password"
          placeholder="Password"
          className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
        />
        <button
          className=" cursor-pointer p-2 my-4 bg-red-700 w-full rounded-lg font-bold"
          onClick={toggleSignIn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="my-2 cursor-pointer" onClick={toggleSignIn}>
          {isSignIn
            ? "New to Netflix, Click to Sign Up"
            : "Already Sign In, Click to Sign In"}
        </p>
      </form>
    </>
  );
};

export default Login;
