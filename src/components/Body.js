import React, { useEffect } from "react";
import Login from "./Login";
import Browse from "./Browse";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { addUser, removeUser } from "../utilis/userSlice";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { useDispatch } from "react-redux";

const Body = () => {
  const dispatch = useDispatch();

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
  ]);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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

        // for sign out
      } else {
        dispatch(removeUser());
      }
    });
  });

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
