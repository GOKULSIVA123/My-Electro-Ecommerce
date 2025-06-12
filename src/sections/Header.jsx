import React, { useContext, useState } from 'react';
import { FaSearch, FaHeart} from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import { MdMenu } from 'react-icons/md';
import { IoClose } from 'react-icons/io5';
import { IoCartSharp } from "react-icons/io5";
import {Link} from "react-router-dom"
import { cartcontent } from '../App';
function Header() {
  const {cartvalue,fav}=useContext(cartcontent);
  const [active, setActive] = useState(false);
  const [search,setSearch]= useState(false);
  return (
    <nav className='bg-gray-200 sticky top-0 z-50'>
      <div className='p-10 max-w-7xl mx-auto md:p-4 flex md:flex-row md:items-center justify-between'>
        <div>
          <h1 className='font-[600] text-3xl text-violet-800 underline'>COSMO</h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex flex-row gap-52'>
          <ul className='flex flex-row items-center gap-7'>
            <li>
              <Link to="/" className='font-[600] text-[15px] hover:underline cursor-pointer'>HOME</Link>
            </li>
            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>ABOUT</li>
            <li
  className="font-[600] text-[15px] hover:underline cursor-pointer"
  onClick={() => {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
  }}
>
  PRODUCTS
</li>

            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>CONTACTS</li>
          </ul>
          <div className='flex flex-row gap-5 items-center'>
            {search&&<input type="text" className='px-4 py-2 rounded-lg bg-white' placeholder='search...'></input>}
            {search?<IoClose onClick={()=>setSearch(!search)} className='cursor-pointer w-6 h-6'></IoClose>:<FaSearch onClick={()=>setSearch(!search)} className='w-6 h-6 cursor-pointer' />}
            
            <Link to='/Login' className='flex flex-row justify-center items-center gap-1'>
              <CgProfile className='w-6 h-6 cursor-pointer' />
            </Link>
            <Link to='/fav' className='flex flex-row justify-center items-center gap-1'>
              <h1 className='w-6 h-6 bg-purple-700 text-white flex flex-row justify-center items-center rounded-full' >{fav.length||0}</h1>
              <FaHeart className='w-6 h-6 cursor-pointer' />
            </Link>
            <Link to='/Cart1' className='flex flex-row justify-center items-center gap-1'>
              <h1 className='w-6 h-6 bg-purple-700 text-white flex flex-row justify-center items-center rounded-full' >{cartvalue.length||0}</h1>
              <IoCartSharp className='w-6 h-6 cursor-pointer'/>
            </Link>
            

          </div>
        </div>
        <div className='md:hidden'>
        <button onClick={()=>setActive(!active)}>
          {
            active?(<IoClose className='w-10 h-10'></IoClose>):(<MdMenu className='w-10 h-10'></MdMenu>)
          }
        </button>
        </div>
        
      </div>
      <div className={`
    md:hidden bg-blue-800 text-white rounded menu-slide
    ${active ? "max-h-96" : "max-h-0"}
  `}>
        {
          active &&(
          <div className='text-white p-4 '>
          <ul className='flex flex-col items-center gap-10  '>
            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>HOME</li>
            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>ABOUT</li>
            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>PRODUCTS</li>
            <li className='font-[600] text-[15px] hover:underline cursor-pointer'>CONTACTS</li>
          </ul>
          </div>
          
          )
        }
        </div>

      
    </nav>
  );
}

export default Header;
