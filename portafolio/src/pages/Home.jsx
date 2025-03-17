import React from 'react'
import yo from '../img/yo.png'
export const Home = () => {
  return (
    <div className='flex justify-center w-full bg-zinc-900 h-160 items-center'>
        <div className='flex flex-col justify-between h-60 w-80 text-white m-0'>
        <h1 className='font-bold text-5xl'><span className='text-cyan-400'>Hola!</span> mi nombre es Samuel Torres</h1>
        <p className='w-110'>Soy desarrollador fullstack desde hace 2 años. y actualmente estoy estudiando en el SENA Haciendo el tecnologo de analisis y desarrollo de software.</p>
        </div>
        <img className='w-220' src={yo}alt="yo" />
    </div>
  )
}
