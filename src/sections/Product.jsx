import React, { useContext, useState } from 'react'
import insta from "../assets/laptop.jpg"
import pendrive from "../assets/pendrive.jpg"
import earbuds from "../assets/earbud.jpg"
import suitcase from "../assets/cat2.jpg"
import bottle from "../assets/cat1.jpg"
import wiredearphones from "../assets/cat3.jpg"
import cd from "../assets/cat4.jpg"
import camera from "../assets/cat5.jpg"
import { IoEyeOutline } from "react-icons/io5";
import { FaHeart} from 'react-icons/fa';
import { IoCartSharp } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import { cartcontent } from '../App'
function Product() {
 const {cartvalue,setCartValue,fav,setFav}=useContext(cartcontent);
 const items=[
    {id:1,name:"Laptop",price:20000,img:insta},
    {id:2,name:"Pendrive",price:500,img:pendrive},
    {id:3,name:"Earpods",price:3500,img:earbuds},
    {id:4,name:"Bottle",price:200,img:bottle},
    {id:5,name:"Earpods",price:1500,img:cd},
    {id:6,name:"Suitcase",price:2500,img:suitcase},
    {id:7,name:"Wired Earphones",price:1500,img:wiredearphones},
    {id:8,name:"Camera",price:3500,img:camera},
  ]
   const [add,setAdd]=useState();
  return (
    <>
    <div className='grid grid-cols-1 md:grid-cols-4 gap-10'>
              {
                items.map((item,index)=>(
                  <div key={item.id} className=''>
                    <div data-aos='zoom-in' data-aos-delay='50' className='group min-w-[200px] min-h-[405px] bg-white rounded-lg shadow-lg flex flex-col items-center cursor-pointer'>
                      <div className='mt-3 invisible group-hover:visible transition-all duration-50 flex flex-row gap-2'>
                        <div className='bg-purple-700 rounded-full w-10 h-10 flex justify-center items-center hover:bg-yellow-400'>
                        <IoEyeOutline className='w-5 h-5 rounded-ful text-white hover:text-black'></IoEyeOutline>
                        </div>
                        <div className='bg-purple-700 rounded-full w-10 h-10 flex justify-center items-center hover:bg-yellow-400 '>
                        <FaHeart className='w-5 h-5 rounded-ful text-white hover:text-black' onClick={()=>setFav([...fav,item])}></FaHeart>
                        </div>
                        <div className='bg-purple-700 rounded-full w-10 h-10 flex justify-center items-center hover:bg-yellow-400 '>
                        <IoCartSharp onClick={()=>setCartValue([...cartvalue,item])} className='w-5 h-5 rounded-full text-white hover:text-black'></IoCartSharp>
                        </div>
                      </div>
                      <img data-aos='zoom-in' data-aos-delay='50' src={item.img} className='w-44 h-44'></img>
                      <div data-aos='zoom-in' data-aos-delay='50' className='text-center flex flex-col gap-2'>
                        <h1 className='font-semibold text-slate-600'>{item.name}</h1>
                        <h1 className='font-[600] text-2xl'>{item.name}</h1>
                        <h1 className='text-purple-600 text-xl font-[600]'>${item.price}</h1>
                      </div>
                      <div className='flex flex-col gap-3'>
                      <hr className="h-px w-[250px] bg-gray-300 border-0 mt-3" />
                      <div className='flex flex-row justify-between items-center'>
                      <div className='flex flex-row gap-1 items-center text-purple-700'>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      <FaStar></FaStar>
                      </div>
                      <button className='bg-green-400 rounded-lg px-4 py-2 text-white'>Sales 14%</button>
                      </div>
                      </div>
                       
                    </div>
                    
                  </div>
                ))
              }
          
            </div>
            
    </>
  )
}

export default Product