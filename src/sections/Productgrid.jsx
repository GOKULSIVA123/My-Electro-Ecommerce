import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Product from '../sections/Product';

function Productgrid() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    return () => AOS.refresh(); // Cleanup on unmount
  }, []);

  return (
    <div className='bg-[#f3f4f6] mt-20'>
      <div className='max-w-7xl mx-auto p-6 flex flex-col gap-10'>
        <div className='flex flex-col justify-center items-center gap-5'>
          <h1 data-aos='zoom-in' className='text-blue-600 font-[600] text-xl'>Browse Collection</h1>
          <h1 data-aos='zoom-in' className='font-[700] text-3xl'>Trending Products</h1>
        </div>
        <Product/>
      </div>
    </div>
  );
}

export default Productgrid;
