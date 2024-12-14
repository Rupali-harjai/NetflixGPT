import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video pt-[15%] px-12 absolute text-white bg-gradient-to-r from black'>
        <h1 className='text-6xl font-bold '>{title}</h1>
        <p className='py-6 text-lg w-1/4 font-semibold'>{overview}</p>
        <div className=''>
            <button className='bg-white text-black p-4 px-10 text-xl font-semibold bg-opacity-80 rounded-lg hover:bg-opacity-50'>Play</button>
            <button className='bg-gray-950 text-white mx-3 p-4 px-10 text-xl font-semibold bg-opacity-90 rounded-lg hover:bg-opacity-50'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle