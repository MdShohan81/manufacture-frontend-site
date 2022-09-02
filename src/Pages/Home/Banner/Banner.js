import React from 'react';
import './Banner.css';
import bannerImg from '../../../assets/banner.mp4';
import { FaArrowRight } from "react-icons/fa";


const Banner = () => {
    return (
        <div className='banner'>
        <div className="banner-overlay"></div>
        <video src={bannerImg} autoPlay loop muted/>
      <div className='banner-content px-2'>
      <h1 className='mb-5 text-secondary  text-4xl lg:text-5xl font-bold'>In-Stock Collections:</h1>
      <h1 className='mb-5 text-secondary  text-4xl lg:text-5xl font-bold'>Ready to Ship</h1>
      <p className='text-center text-xl lg:text-2xl md:text-2xl text-white'>Versatility paired with quick-ship make these collections the perfect addition to any project</p>
      <div className='flex justify-center items-center mt-6'>
      <button class="btn btn-secondary hover:bg-transparent  btn-md text-white">In Details <FaArrowRight className='ml-2'/> </button>
      <button class="btn btn-secondary btn-md hover:bg-transparent text-white ml-8">View The Collection <FaArrowRight className='ml-2'/></button>
      </div>
      </div>
      <div className='quote bg-accent py-4'>
        <div className='flex justify-between items-center px-6'>
          <h1 className='lg:text-xl text-md font-bold text-white'>Find your Perfect Tiles.</h1>
          <button className='btn btn-md btn-secondary lg:text-lg text-md hover:bg-neutral text-white'>Get Quote <FaArrowRight className='ml-2'/></button>
        </div>
      </div>
      </div>
    );
};

export default Banner;