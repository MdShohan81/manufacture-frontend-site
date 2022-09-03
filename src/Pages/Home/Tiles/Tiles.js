import React from 'react';
import './Tiles.css';
import { FaArrowRight } from "react-icons/fa";

const Tiles = () => {
    return (
        <div className='tiles-img my-16'>
            <div className="tiles-overlay">
                <h1 className='text-5xl text-secondary font-bold mx-12 mb-5'>Find your Perfect Tiles.</h1>
                <p className='text-xl mx-12 mb-5'>Manufacturer Tile has a stunning selection of products for practically every application and design style. Finding your perfect tile is now made easy. Search by collection, color, look, size, shape, applications, or even interior design trend. Whatever the application and style need Manufacturer Tile has you covered.</p>
                <button className='btn ml-12 btn-secondary text-xl text-white'>
                    Read More <FaArrowRight className='ml-3 text-xl'/>
                </button>
            </div>
        </div>
    );
};

export default Tiles;