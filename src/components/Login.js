import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utilis/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utilis/userSlice";
import { AVTAR_PROFILE, BG_IMG_URL } from "../utilis/constants";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  // const phoneNumber = useRef(null);

  const handleValidation = () => {
    const nameValue = !isSignIn && name.current ? name.current.value : null;
    const message = checkValidData(
      email.current.value,
      password.current.value,
      nameValue
    );
    setErrorMessage(message);

    if (message) return;

    // Sign Up

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: {AVTAR_PROFILE},
          });
        })
        .then(() => {
          const { uid, email, displayName, photoURL } = auth.currentUser;
          dispatch(
            addUser({
              uid: uid,
              email: email,
              displayName: displayName,
              photoURL: photoURL,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
    
        });
    }

    // Sign In
    if (isSignIn) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(`${errorCode} - ${errorMessage}`);
        });
    }
  };

  const toggleSignIn = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <>
      <Header />
      <div className="absolute">
        <img
          src={BG_IMG_URL}
          alt="bg-image"
        />
      </div>

      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-full md:w-4/12 absolute p-12 bg-black my-32 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl mb-6 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <>
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
            />
          </>
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className=" w-full p-2 my-2 grayscale-0 bg-transparent rounded-md border border-gray-200 focus:border-slate-900"
        />
        <p className="font-bold my-2 text-red-600">{errorMessage}</p>
        <button
          className=" cursor-pointer p-2 my-4 bg-red-700 w-full rounded-lg font-bold"
          onClick={handleValidation}
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
