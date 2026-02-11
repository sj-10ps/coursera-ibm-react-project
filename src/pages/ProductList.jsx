import React from 'react'
import PublicLayout from '../layouts/PublicLayout'
import plantsArray from '../assets/data/plantsArray'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
const Productspage = () => {
    
    const categories = ["Air Purifying", "Aromatic"];
    const dispatch=useDispatch()
    const {cartData}=useSelector(state=>state.cart)
  return (
   <PublicLayout>
     <div className='flex flex-col mt-5 gap-20 '>
       
          
   {categories.map(category => (  
         <div key={category} className='flex flex-col items-center'>
          <h2 className="text-xl font-bold text-center border-y">
            {category} Plants
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-6">
            {plantsArray
              .filter(plant => plant.category === category)
              .map(plant => (
                <div key={plant.id} className="bg-white p-5 shadow-lg rounded-lg flex flex-col items-center gap-2">
                  <p className="font-semibold">{plant.name}</p>
                  <img src={plant.image} alt={plant.name} className='h-48 w-40'/>
                  <p>${plant.price}</p>
                  <p>{plant.description}</p>

                  <button
                    onClick={() => dispatch(addToCart(plant))}
                    className='bg-green-500 p-2'
                    disabled={cartData.some(p => p.id === plant.id) }
                  >
                    {cartData.some(p => p.id === plant.id)
                      ? "Added"
                      : "Add to Cart"}
                  </button>
                </div>
              ))}
          </div>
        </div>
      ))}
                   
        </div>

   </PublicLayout>
  )
}

export default Productspage