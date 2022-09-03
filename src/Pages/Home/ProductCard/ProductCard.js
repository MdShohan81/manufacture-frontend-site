import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const ProductCard = ({product}) => {
    const {_id, name,img, description, minquantity,availablequantity, price} = product;
    return (
        <div class="card w-96 bg-base-200 shadow-xl">
  <figure class="px-10 pt-10">
    <img src={img} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">{name}</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="flex justify-between items-center my-2">
    <h1 className='text-secondary text-lg'>minQuantity: ${minquantity}</h1>
    <h1 className='text-secondary text-lg'>Available: ${availablequantity}</h1>
    </div>
    <div class="flex justify-between items-center">
    <h1 className='text-secondary text-lg'>Price: ${price}</h1>
      <button class="btn btn-secondary text-white">Buy Now <FaArrowRight className='ml-2'/></button>
    </div>
  </div>
</div>
    );
};

export default ProductCard;