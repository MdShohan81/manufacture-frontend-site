import React, { useEffect, useState } from 'react';

import ProductCard from '../ProductCard/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([])
    useEffect(()=> {
        fetch('http://localhost:5000/product')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])
    return (
        <div className='lg:mx-10 mx-4 my-10'>
                <h1 className='text-center lg:text-5xl font-bold mb-8'>Our <span className='text-secondary'>Tiles</span></h1>
                {/* get all products card */}
                
                <div className='grid lg:grid-cols-3 grid-cols-1 gap-8 '>
                    {
                        products.map(product => <ProductCard key={product._id}
                        product={product}
                        ></ProductCard>)
                    }
                </div>
        </div>
    );
};

export default Product;