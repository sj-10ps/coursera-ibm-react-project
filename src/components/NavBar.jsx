import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { LuShoppingCart } from "react-icons/lu";
import { useSelector } from 'react-redux';

const NavBar = () => {
    const navigate=useNavigate()
    const {cartCount}=useSelector(state=>state.cart)  
  return (
    <div className='flex justify-between px-5  py-4 items-center bg-green-400'>
        <div className='ml-2 flex gap-6 cursor-pointer'>
          <img src="/vite.svg" alt="" />
          <div onClick={()=>navigate('/')}>
            <h2 className='text-lg capitalize text-white font-bold text-center'>paradise nursery</h2>
            <p className='text-sm text-slate-100 font-serif text-center '><i>where green meets serenity</i></p>
          </div>
        </div>
        <Link to={'/products'} className='md:mr-20 text-white text-lg'>Plants</Link>
        <Link to={'/cart'} className='relative'>
        <LuShoppingCart size={40}/>
        <span className='absolute right-3 top-2 text-red-600 text-sm'>{cartCount}</span>
        </Link>
          
    </div>
  )
}

export default NavBar