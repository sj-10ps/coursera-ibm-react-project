import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, updateQuantity } from "../redux/Cartslice";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const { cartData, totalAmount } = useSelector((state) => state.cart);
  const dispatch=useDispatch()
  const navigate=useNavigate()

  return (
    <PublicLayout>
      <div className="flex flex-col items-center gap-5 my-5">
        <h2 className="text-lg font-semibold">
          total cart amount is {totalAmount}
        </h2>
        <div className="w-full mx-auto md:w-2/4 max-h-[60vh] overflow-y-auto flex flex-col items-center py-5 gap-5">
        {cartData.length===0&&<>no data yet...</>}
        {cartData &&
          cartData.map((c) => (
            <div
              className="bg-white p-2 flex gap-8 shadow-lg rounded-lg"
              key={c.id}
            >
              <img src={c.image} className="h-48 w-40"></img>
              <div className="flex flex-col gap-2 mr-30">
                <p className="text-md font-semibold capitalize">{c.name}</p>
                <p className="text-slate-500">${c.price}</p>
                <div className="flex gap-2 items-center">
                  <button className="bg-gray-500 h-5 w-5 flex justify-center items-center py-2" onClick={()=>dispatch(updateQuantity({type:'dec',id:c.id}))}>
                    -
                  </button>
                  <p>{c.quantity}</p>
                  <button className="bg-gray-500  h-5 w-5 flex justify-center items-center py-2" onClick={()=>dispatch(updateQuantity({type:'inc',id:c.id}))}>
                    +
                  </button>
                </div>
                      <p>Total:${c.totalPrice}</p>
                      <button className="bg-red-400 p-2 rounded-lg text-white" onClick={()=>dispatch(removeItem({id:c.id}))}>Delete</button>
              </div>
            </div>
          ))}
          </div>
          <div className="flex flex-col mt-8 gap-8 ">
              <button className="bg-green-600 p-2 rounded-md text-white capitalize" onClick={()=>navigate('/products')}>Continue Shopping</button>
          <button className="bg-green-600 p-2 rounded-md text-white capitalize">Checkout</button>
          </div>

         
      </div>
    </PublicLayout>
  );
};

export default CartPage;
