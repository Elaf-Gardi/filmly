import React from 'react'

const Genres = () => {
  return (
    <div className='flex flex-row justify-between items-center gap-4'>
        <button className='w-full h-11 py-2 px-4 rounded-lg bg-primary_green text-darkGray font-medium text-sm'>Animation</button>
        <button className='w-full h-11 py-2 px-4 rounded-lg bg-primary_gray text-white font-medium text-sm'>Crime</button>
        <button className='w-full h-11 py-2 px-4 rounded-lg bg-primary_gray text-white font-medium text-sm'>Kids</button>
        <button className='w-full h-11 py-2 px-4 rounded-lg bg-primary_gray text-white font-medium text-sm'>More</button>
    </div>
  )
}

export default Genres