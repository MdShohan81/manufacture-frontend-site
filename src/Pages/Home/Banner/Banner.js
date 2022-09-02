import React from 'react';
import './Banner.css';
import bannerImg from '../../../assets/banner.mp4'

const Banner = () => {
    return (
        <div className='banner'>
        <div className="banner-overlay"></div>
        <video src={bannerImg} autoPlay loop muted/>
      <div className='banner-content px-2'>
      <h1 className='mb-5 text-secondary  text-4xl lg:text-5xl font-bold'>Find Whatever Your Want?</h1>
      <p className='text-center text-xl lg:text-2xl md:text-2xl text-white'>A shadowy flight into the dangerous world of a man who does not exist.</p>
      <p className='text-center mb-10 text-xl lg:text-2xl md:text-2xl text-white'>Flying away on a wing and a prayer. Who could it be.</p>
      <button class="btn btn-secondary text-white">Get Started</button>
      </div>
      </div>
    );
};

export default Banner;