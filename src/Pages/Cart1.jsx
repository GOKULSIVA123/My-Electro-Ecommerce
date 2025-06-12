import React, { useState } from 'react'
import { useContext } from 'react'
import { cartcontent } from '../App'
function Cart1() {
  const {cartvalue,setCartValue,updateCartQuantity}=useContext(cartcontent);
  const delete1= (id)=>{
    setCartValue((prev)=>{ 
      return(prev.filter(item=>item.id!==id))
  })
  }
const total1 = cartvalue.reduce(
  (sum, item) => sum + (item.price * (item.quantity || 1)),0);



  return (
    <>
      <h1 className='text-black font-[600] text-3xl ml-10 mt-3'>Cart Products</h1>
      {
        cartvalue.map((item,index)=>(
          <div key={item.id} className='bg-[#fefefe]'>
            <div className='border-2 border-black max-w-3xl mx-auto mt-10 ml-10 flex flex-row  justify-between '>
            <img src={item.img} className='w-44 h-44'></img>
            <div className='flex flex-col gap-3 mt-5 mr-5 items-start p-2'>
              <h1 className='font-[600] text-2xl'>{item.name}</h1>
              <h1 className='font-semi-bold text-xl text-purple-700'><span className='text-black text-xl font-[600]'>Price: $</span>{item.price*(item.quantity||1)}</h1>
              <div className='flex flex-row gap-2 justify-center items-center'>
              <h1 className='text-black text-xl font-[600]'>Quantity: <span className='text-black'>{item.quantity||1}</span></h1>
              <button className='px-2 py-1 bg-black text-white rounded-full ' onClick={()=>updateCartQuantity(item.id, (item.quantity||1)+1)}>+</button>
              <button className='px-2 py-1 bg-black text-white rounded-full' onClick={()=>updateCartQuantity(item.id, (item.quantity)-1)}>-</button>
              </div>
              <button className='px-2 py-1 text-center bg-red-500 text-white rounded-lg font-[600]' onClick={()=>delete1(item.id)}>remove</button>
            </div>
            </div>
          </div>
        ))
      }
      <div>
        <h1 className='font-[600] text-2xl ml-10 mt-5'>Total Amount: $<span className='text-purple-700'>{total1}</span></h1>
      </div>
    </>
  )
}

export default Cart1