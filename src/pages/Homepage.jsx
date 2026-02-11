import React from 'react'
import { useNavigate } from 'react-router-dom'
import About from '../components/About'

const Homepage = () => {
    const navigate=useNavigate()
    
  return (
    <div className="min-h-screen flex items-center px-5 gap-3 justify-between md:px-20">
        <div className='absolute inset-0 bg-hero bg-cover bg-center blur-[0.2rem] -z-10'></div>
        <div className='flex flex-col gap-4 md:max-w-[20%]  items-center'>
           <h2 className='text-4xl text-white font-semibold capitalize text-center'>welcome to paradise nursery</h2>
           <div className='border-b w-6 border-green-300'></div>
           <p className='text-gray-300 capitalize'>where green meets serenity</p>
        <button onClick={()=>navigate('/products')} className='bg-green-400 p-2 rounded-sm capitalize text-white hover:opacity-80'>get started</button>
        </div>
        <About/>
    </div>
  )
}

export default Homepage