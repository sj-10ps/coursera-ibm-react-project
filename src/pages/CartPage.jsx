import React from "react";
import PublicLayout from "../layouts/PublicLayout";
import {  useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

const CartPage = () => {
  const { cartData, totalAmount } = useSelector((state) => state.cart);
  
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
             <CartItem data={c}/>
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
