import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-screen absolute pt-[15%] px-14 text-white from-black to right-3 bg-opacity-30'>
      <h1 className='text-6xl font-bold'> {title} </h1>
      <p className='py-4 text-lg w-1/4'> {overview} </p>
      <div className='flex my-4'> 
        <button className='bg-white px-12 py-3 text-black hover:bg-opacity-80 text-lg rounded-sm cursor-pointer mr-3'> ▶️ Play </button>
        <button className='bg-gray-500 px-12 py-3 text-white text-lg rounded-sm cursor-pointer'> More Info </button>
      </div>
    </div>
  )
}

export default VideoTitle