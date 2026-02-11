import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import data from '../assets/data/products.json'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/Cartslice'
const Productspage = () => {
    const aromaticData=data.filter(p=>p.type==="aromatic")
    const purifyingData=data.filter(p=>p.type==="purifying")
    const dispatch=useDispatch()
    const {cartData}=useSelector(state=>state.cart)
  return (
   <PublicLayout>
     <div className='flex flex-col mt-5 gap-20 '>
        <div className='flex flex-col items-center'>
  
         <h2 className='capitalize text-xl border-y text-center px-5 w-fit font-bold'>Air Purifying plants</h2>
         <div className='grid grid-cols-2 md:grid-cols-3 gap-24 mt-6'>
            {purifyingData.map((a)=>(
                <div key={a.id} className='bg-white rounded-sm px-5 py-4 pt-6 relative shadow-xl flex flex-col gap-1 items-center'>
                    <div className='absolute top-0 right-0 px-1 capitalize bg-red-500 rounded-tr-sm rounded-bl-sm'>sale</div>
                    <p className='capitalise font-semibold text-md text-center'>{a.name}</p>
                    <img src={a.image} className='h-48 w-48'></img>
                    <p className='text-red-500'>${a.price}</p>
                    <p className='text-gray-500'>{a.description}</p>
                    <button className='bg-green-400 rounded-sm p-2 capitalize text-white hover:opacity-80 disabled:bg-gray-800' onClick={()=>dispatch(addToCart(a))} disabled={cartData.some(p=>p.id===a.id)}>{cartData.some(p=>p.id===a.id)?'Added':'Add to cart'}</button>
                </div>
            ))}
         </div>
                   
        </div>

               <div className='flex flex-col items-center'>
  
          <h2 className='capitalize text-xl border-y text-center px-5 w-fit font-bold'>Aromatic Fragnant plants</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-24 mt-6'>
            {aromaticData.map((a)=>(
                <div key={a.id} className='bg-white rounded-sm px-5 py-4 pt-6 relative shadow-xl flex flex-col gap-1 items-center'>
                    <div className='absolute top-0 right-0 px-1 capitalize bg-red-500 rounded-tr-sm rounded-bl-sm'>sale</div>
                    <p className='capitalise font-semibold text-md text-center'>{a.name}</p>
                    <img src={a.image} className='h-48 w-48'></img>
                    <p className='text-red-500'>${a.price}</p>
                    <p className='text-gray-500'>{a.description}</p>
                    <button className='bg-green-400 rounded-sm p-2 capitalize text-white hover:opacity-80' onClick={()=>dispatch(addToCart(a))}>Add to cart</button>
                </div>
            ))}
         </div>
                   
        </div>
     </div>
   </PublicLayout>
  )
}

export default Productspage