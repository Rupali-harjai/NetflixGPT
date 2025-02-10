import React from 'react'
import { IMG_CDN_URL } from '../utilis/constants'

const MovieCard = ({posterPath}) => {
  return (
    <div className='w-40'>
        <img alt = 'posterPath' src={IMG_CDN_URL+ posterPath}/>
    </div>
   
  )
}

export default MovieCard