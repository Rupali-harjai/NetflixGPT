import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_IMG_URL } from '../utilis/constants'

const GptSearch = () => {
  return (
    <>
      {/* Background Image */}
      
      <div className="relative" >
        <img
          src={BG_IMG_URL}
          alt="bg-image"
          className="w-full h-full object-cover -z-20"
        />
       
      </div>

      {/* Content */}
      <div className="absolute top-[50%] translate-x-[-50%] translate-y-[-50%] left-[50%] ">
        <GptSearchBar />
        <GptMovieSuggestions />
      </div>
    </>
  )
}

export default GptSearch
