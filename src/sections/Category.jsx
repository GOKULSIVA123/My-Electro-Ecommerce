import {React,useEffect} from 'react'
import speaker from "../assets/speakers.jpg"
import laptop from "../assets/laptop.jpg"
import mouse from "../assets/mouse.jpg"
import pendrive from "../assets/pendrive.jpg"
import watch from "../assets/watch.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css';
function Category() {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

 return (
  <div className="w-full min-h-[500px] bg-gray-100 flex flex-col md:flex-row items-center justify-center">
    <div className="sm:text-center md:text-left flex flex-col items-center gap-5 md:items-start p-6 md:ml-10">
      <h1 data-aos='zoom-in' data-aos-delay='50' className="transform-none text-[blue] text-3xl font-[600]">Favourite Items</h1>
      <h1 data-aos='zoom-in' data-aos-delay='50' className="transform-none text-5xl font-[600]">
        Popular <br />Category
      </h1>
      <button data-aos='zoom-in' data-aos-delay='50'className="transform-none mt-6 bg-[blue] rounded-lg text-white px-6 py-3 font-[600] ">
        VIEW ALL
      </button>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-5 gap-16 p-6">
      <div data-aos='zoom-in' data-aos-delay='50' className="text-center">
      <img  src={speaker} className="md:w-32 md:h-32 rounded-full object-cover" />
      <h1 className='font-[600] text-4xl md:text-2xl mt-5 hover:text-blue-600 cursor-pointer'>Portable Speaker</h1>
      </div>
      <div  data-aos='zoom-in' data-aos-delay='50' className='text-center'>
      <img src={mouse} className="md:w-32 md:h-32 rounded-full object-cover" />
      <h1  className='text-4xl font-[600] md:text-2xl mt-5 hover:text-blue-600 cursor-pointer'>Mouse</h1>
      </div>
      <div data-aos='zoom-in' data-aos-delay='50' className='text-center'>
      <img src={laptop} className="md:w-32 md:h-32 rounded-full object-cover" />
      <h1 className='text-4xl font-[600] md:text-2xl mt-5 hover:text-blue-600 cursor-pointer'>Laptop</h1>
      </div>
      <div data-aos='zoom-in' data-aos-delay='50' className='text-center'>
      <img  src={pendrive} className="md:w-32 md:h-32 rounded-full object-cover" />
      <h1 className='text-4xl font-[600] md:text-2xl mt-5 hover:text-blue-600 cursor-pointer'>Pen Driver</h1>
      </div>
      <div  data-aos='zoom-in' data-aos-delay='50' className='text-center'>
      <img src={watch} className="md:w-32 md:h-32 rounded-full object-cover" />
      <h1 className='text-4xl font-[600] md:text-2xl mt-5 hover:text-blue-600 cursor-pointer'>Watch</h1>
      </div>
    </div>
  </div>
);

}

export default Category