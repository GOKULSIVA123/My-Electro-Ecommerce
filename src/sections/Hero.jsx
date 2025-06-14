import { React, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import dslr from "../assets/dslr.jpg";
import headset from "../assets/headset.jpg";
import earbud from "../assets/earbuds.jpg";

function Hero() {
  const settings = {
    dots: true,
    arrows:true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: 'ease-in-out',
    });
    AOS.refresh();
  }, []);

  return (
    <div className="bg-gray-100 w-full slider-container flex justify-center items-center lg:h-[700px] h-[600px]">
      <Slider className="w-full" {...settings}>
        {/* DSLR Slide */}
        <div className="w-full">
          <div
            className="w-full md:h-[500px] lg:h-[700px] flex flex-col justify-center items-start gap-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${dslr})` }}
          >
            <h1 data-aos='zoom-in' data-aos-delay='50' className="px-2 py-2 text-[yellow] border border-[yellow] rounded-lg ml-10 md:px-6 md:py-3 text-xl">
              Get Upto 80% Discount Offer
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="text-3xl md:text-8xl text-white font-[600] ml-10">
              DSLR 360 <br/>CAMERA
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="ml-10 text-2xl text-white font-[600]">
              <span className="text-[yellow]">100% Trusted</span> Electronics Gadget
            </h1>
            <button data-aos='zoom-in' data-aos-delay='50' className="text-black font-[600] ml-10 bg-yellow-300 rounded-lg px-2 py-1 md:px-6 md:py-3">
              ONLINE COLLECTIONS
            </button>
          </div>
        </div>

        {/* Headset Slide */}
        <div className="w-full">
          <div
            className="w-full md:h-[500px] lg:h-[700px] flex flex-col justify-center items-start gap-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${headset})` }}
          >
            <h1 data-aos='zoom-in' data-aos-delay='50' className="px-2 py-2 text-[yellow] border border-[yellow] rounded-lg ml-10 md:px-6 md:py-3 text-xl">
              Get Upto 80% Discount Offer
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="text-3xl md:text-8xl text-white font-[600] ml-10">
              PREMIUM <br/>HEADSET
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="ml-10 text-2xl text-white font-[600]">
              <span className="text-[yellow]">100% Trusted</span> Audio Gear
            </h1>
            <button data-aos='zoom-in' data-aos-delay='50' className="text-black font-[600] ml-10 bg-yellow-300 rounded-lg px-2 py-1 md:px-6 md:py-3">
              SHOP NOW
            </button>
          </div>
        </div>

        {/* Earbuds Slide */}
        <div className="w-full">
          <div
            className="w-full md:h-[500px] lg:h-[700px] flex flex-col justify-center items-start gap-5 bg-cover bg-center"
            style={{ backgroundImage: `url(${earbud})` }}
          >
            <h1 data-aos='zoom-in' data-aos-delay='50' className="px-2 py-2 text-[yellow] border border-[yellow] rounded-lg ml-10 md:px-6 md:py-3 text-xl">
              Get Upto 80% Discount Offer
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="text-3xl md:text-8xl text-white font-[600] ml-10">
              WIRELESS <br/>EARBUDS
            </h1>
            <h1 data-aos='zoom-in' data-aos-delay='50' className="ml-10 text-2xl text-white font-[600]">
              <span className="text-[yellow]">100% Trusted</span> Audio Tech
            </h1>
            <button data-aos='zoom-in' data-aos-delay='50' className="px-2 py-1 md:px-6 md:py-3 text-black font-[600] ml-10 bg-yellow-300 rounded-lg">
              EXPLORE PRODUCTS
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Hero;
