import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
    const {_id, name,img, description, minquantity,availablequantity, price} = product;


    const navigate = useNavigate();
    const navigateToProductDetail = id => {
      navigate(`/product/${id}`)
  }
    return (
<div class="card w-full  bg-base-100 shadow-2xl">
        <figure><img src={img} alt="img" className='h-80'/></figure>
        <div class="card-body lg:mx-0 sm:mx-auto">
            <h2 class="text-xl font-semibold">{name}</h2>
            <p className='text-md text-neutral'>{description}</p>
            <p className='flex justify-between'>
            <span className='text-secondary font-bold text-xl'> MinQnty: {minquantity}</span> 
            <span className='text-secondary font-bold text-xl'>stock: {availablequantity}</span>
            </p>
            <div class="flex justify-between items-center my-2">
            <h3 className='text-neutral font-semibold text-xl'>Price$: ${price}</h3>
            <button onClick={() => navigateToProductDetail(_id)} class="btn btn-md btn-secondary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;