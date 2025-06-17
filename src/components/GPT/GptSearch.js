import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../../utilis/constants'

const GptSearch = () => {
  return (
       <>
      <div className="fixed -z-10">
        <img className="h-screen w-screen object-cover" src={BG_IMG_URL} alt="logo" />
      </div>
      <div className="">
        <GptSearchBar /> 
        <GptMovieSuggestions />
      </div>
    </>
  );
};

export default GptSearch
