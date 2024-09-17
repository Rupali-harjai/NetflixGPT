import { signOut } from "firebase/auth";
import React from "react";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };
  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-10">
        <img
          className="w-44"
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="NETFLIX LOGO"
        />

        {user && (
          <div className="flex flex-row gap-2">
            <img
              alt="userIcon"
              src={user?.photoURL}
              className="w-10 h-10 mt-4 rounded-sm cursor-pointer"
            />
            <button onClick={handleSignOut} className="text-white font-bold">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
