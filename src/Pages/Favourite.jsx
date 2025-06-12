import React, { useContext } from 'react'
import { cartcontent } from '../App'
function Favourite() {
  const {fav,setFav}=useContext(cartcontent);
  const delete1=(id)=>{
    setFav((prev)=>
      prev.filter(item=>(item.id!==id))
    )
  }
  return (
    <>
      <h1 className='text-black font-[600] text-3xl ml-10 mt-3'>Favourite Products</h1>
      {
        fav.map((item,index)=>(
          <div key={item.id} className='bg-[#fefefe]'>
            <div className='border-2 border-black max-w-3xl mx-auto mt-10 ml-10 flex flex-row  justify-between '>
            <img src={item.img} className='w-44 h-44'></img>
            <div className='flex flex-col gap-3 mt-5 mr-5 items-start p-2'>
              <h1 className='font-[600] text-2xl'>{item.name}</h1>
              <h1 className='font-semi-bold text-xl text-purple-700'><span className='text-black text-xl font-[600]'>Price: $</span>{item.price*(item.quantity||1)}</h1>
              <div className='flex flex-row gap-2 justify-center items-center'>
              <h1 className='text-2xl font-medium'>Your Favourite item: <span className='text-pink-600 font-normal text-2xl'>{item.name}</span></h1>
              
              </div>
              <button className='px-2 py-1 bg-red-600 rounded-lg text-white' onClick={()=>delete1(item.id)}>remove</button>
            </div>
            </div>
          </div>
        ))
      }
    </>
  )
}

export default Favourite