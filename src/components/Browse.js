import React  from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies.js";
import MainContainer from "./MainContainer.js";
import SecondaryContainer from "./SecondaryContainer.js";


const Browse = () => {

   useNowPlayingMovies();
  return (
    <>
      <div className="flex flex-col relative">
        <Header />
        <MainContainer/>
        <SecondaryContainer/>
      </div>
    </>
  );
};

export default Browse;
