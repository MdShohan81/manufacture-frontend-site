import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Product from '../Product/Product';
import Review from '../Review/Review';
import Tiles from '../Tiles/Tiles';



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Tiles></Tiles>
            <Product></Product>
            <Review></Review>
        </div>
    );
};

export default Home;