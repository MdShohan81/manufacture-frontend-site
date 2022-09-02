import React from 'react';
import './About.css';
import design1 from '../../../assets/about-1.jpeg';
import design2 from '../../../assets/about-2.jpeg';
import design3 from '../../../assets/about-3.jpeg';

const About = () => {
    return (
        <section className='my-12'>
            {/* About title */}
              <div className='text-center mt-32'>
              <h1 className='text-secondary text-5xl font-semibold'>Our Showrooms</h1> 
              <p className='text-xl mt-8'>Our knowledgeable experts can help you find the ideal tile or accessory for your design project.</p>
              <p className='text-xl'>Visit us at one of our Manufacturer showrooms, or a dealer nearest you. </p>
              </div>
            {/* About card content */}
              <div className='design-card grid lg:grid-cols-3 gap-8 lg:mx-32 mx-8 my-8'>
              <div class="card lg:max-w-lg bg-black-100 shadow-xl image-full card-design">
                <figure><img src={design1} alt="tile-img"/></figure>
                <div class="card-body flex justify-center items-center">
                <div>
                <h2 class="card-title text-accent text-2xl mb-4">Made for any life style</h2>
                    <p className='text-lg'>From modern to traditional, commercial to residential</p>
                </div>   
                </div>
                </div>
              <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full card-design">
                <figure><img src={design2} alt="tile-img" className='img-design'/></figure>
                <div class="card-body flex items-center">
                    <div>
                    <h2 class="card-title text-accent text-2xl mb-4">Inside Design </h2>
                    <p className='text-lg'>Introducing inside Design, a series of interviews with designers.</p>
                    </div>
                </div>
                </div>
              <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full card-design">
                <figure><img src={design3} alt="tile-img" className='img-design'/></figure>
                <div class="card-body flex justify-center items-center">
                    <div>
                    <h2 class="card-title text-accent text-2xl mb-4">Rooms Gallery</h2>
                    <p className='text-lg'>Browse tiles designs from kitchens to bathrooms</p>
                    </div>
                </div>
                </div>
              </div>
        </section>
    );
};

export default About;