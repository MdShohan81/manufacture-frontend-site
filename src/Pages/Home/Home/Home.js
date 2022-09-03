import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Tiles from '../Tiles/Tiles';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tiles></Tiles>
           <Product></Product>
            
        </div>
    );
};

export default Home;