import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO } from "../utilis/constants";


const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
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

  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        //    for sign up and sign in
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // for sign out
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  },[]);

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black flex justify-between z-10">
        <img
          className="w-44"
          src={NETFLIX_LOGO}
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
