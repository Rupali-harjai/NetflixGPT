import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { auth } from "../utilis/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { addUser, removeUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { NETFLIX_LOGO, SUPPPORTED_LANGUAGES } from "../utilis/constants";
import { toggleGptSearchView } from "../utilis/gptSlice";
import { changeLanguage } from "../utilis/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showgptSearch = useSelector((store) => store.gptSearch.showgptSearch);
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
    return () => unsubscribe();
  }, [dispatch,navigate]);

  const handleSearchgpt = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <>
      <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
        <img className="w-44 mx-auto md:mx-0" src={NETFLIX_LOGO} alt="NETFLIX LOGO" />

        {user && (
          <div className="flex px-2 justify-between">

            {showgptSearch && (
              <select
                className="text-white font-bold bg-slate-700 px-1 md:px-2 py-3 md:my-3 rounded-lg"
                onChange={handleLanguageChange}
              >
                {SUPPPORTED_LANGUAGES.map((lang) => (
                  <option value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}
            <button
              onClick={handleSearchgpt}
              className="text-xs md:text-lg text-white font-bold bg-slate-700 px-3 md:px-2 py-3 md:my-3 mx-3 rounded-lg"
            >
              {showgptSearch ? "Homepage" : "Search Gpt"}
            </button>
            <button
              onClick={handleSignOut}
              className="text-xs md:text-lg text-white font-bold bg-red-700 px-3 md:px-2 py-3 md:my-3 rounded-lg"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
