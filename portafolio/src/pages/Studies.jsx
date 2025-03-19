import React from 'react'
import { ImageCarousel } from '../layouts/Carousel/ImageCarousel.jsx'
export const Studies = () => {
  return (
    <div className='flex items-center flex-col justify-between h-110 bg-zinc-900'>
      <h2 className='font-bold text-3xl text-cyan-400'>Mis estudios</h2>
       <ImageCarousel/>
    </div>
  )
}
