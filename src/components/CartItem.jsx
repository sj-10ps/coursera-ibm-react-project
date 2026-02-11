import React from 'react'
import { useDispatch } from 'react-redux'
import { removeItem, updateQuantity } from '../redux/Cartslice'

const CartItem = ({data}) => {
    const dispatch=useDispatch()

  return (
       <div
              className="bg-white p-2 flex gap-8 shadow-lg rounded-lg"
              key={data.id}
            >
              <img src={data.image} className="h-48 w-40"></img>
              <div className="flex flex-col gap-2 mr-30">
                <p className="text-md font-semibold capitalize">{data.name}</p>
                <p className="text-slate-500">${data.price}</p>
                <div className="flex gap-2 items-center">
                  <button className="bg-gray-500 h-5 w-5 flex justify-center items-center py-2" onClick={()=>dispatch(updateQuantity({type:'dec',id:data.id}))}>
                    -
                  </button>
                  <p>{data.quantity}</p>
                  <button className="bg-gray-500  h-5 w-5 flex justify-center items-center py-2" onClick={()=>dispatch(updateQuantity({type:'inc',id:data.id}))}>
                    +
                  </button>
                </div>
                      <p>Total:${data.totalPrice}</p>
                      <button className="bg-red-400 p-2 rounded-lg text-white" onClick={()=>dispatch(removeItem({id:data.id}))}>Delete</button>
              </div>
            </div>
  )
}

export default CartItem