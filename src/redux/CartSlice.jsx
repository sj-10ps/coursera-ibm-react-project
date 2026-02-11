/* eslint-disable */

import { createSlice } from "@reduxjs/toolkit";

export const cartSlice=createSlice({
    name:"cart",
    initialState:{
        cartData:[],
        cartCount:0,
        totalAmount:0
    },
    reducers:{
        addToCart:(state,action)=>{
           const newItem= action.payload
           const Existing=state.cartData.find(p=>p.id===newItem.id)
           if(!Existing){
             state.cartData.push({...newItem,quantity:1,totalPrice:Number(newItem.price)})
           }else{
             Existing.quantity+=1   
             Existing.totalPrice+=Number(Existing.price)
           }
            state.cartCount++
            state.totalAmount+=Number(newItem.price)
        },
        updateQuantity:(state,action)=>{
          const {id,type}=action.payload
          const currentData=state.cartData.find(p=>p.id===id)
          if(type==="inc"){
                 currentData.quantity++
                 currentData.totalPrice+=Number(currentData.price)
                 state.totalAmount+=Number(currentData.price)
                 state.cartCount++
          }else{
            if(currentData.quantity===1){
               state.cartData=state.cartData.filter(c=>c.id!==id)
              
            }
            currentData.totalPrice-=currentData.price
            state.cartCount--
            currentData.quantity--
             state.totalAmount-=Number(currentData.price)

          }
         
        },
        removeItem:(state,action)=>{
               const {id}=action.payload
               const currentData=state.cartData.find(p=>p.id===id)
               const {quantity,totalPrice}=currentData
               state.totalAmount-=totalPrice
               state.cartCount-=quantity
               state.cartData=state.cartData.filter(c=>c.id!==id)
        }
    }
})

export const {addToCart,updateQuantity,removeItem}=cartSlice.actions

const CartReducer=cartSlice.reducer
export default CartReducer