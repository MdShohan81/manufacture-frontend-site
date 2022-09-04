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
//         <div class="card  bg-base-200 shadow-xl">
//   <figure>
//     <img src={img} alt="Shoes" class="rounded-xl" />
//   </figure>
//   <div class="card-body">
//     <h2 class="card-title">{name}</h2>
//     <p>{description}</p>
//     <div class="flex justify-between items-center my-2">
//     <h1 className='text-secondary text-lg'>minQuantity: ${minquantity}</h1>
//     <h1 className='text-secondary text-lg'>Available: ${availablequantity}</h1>
//     </div>
//     <div class="flex justify-between items-center">
//     <h1 className='text-secondary text-lg'>Price: ${price}</h1>
//       <button onClick={() => navigateToProductDetail(_id)} class="btn btn-secondary text-white">Buy Now <FaArrowRight className='ml-2'/></button>
//     </div>
//   </div>
// </div>
<div class="card w-full bg-base-100 shadow-xl">
        <figure><img src={img} alt="img" /></figure>
        <div class="card-body lg:mx-0 sm:mx-auto">
            <h2 class="text-xl font-semibold">{name}</h2>
            <p className='text-md text-neutral'>{description}</p>
            <p className='flex justify-between'>
            <span className='text-secondary font-bold text-xl'> MinQnty: {minquantity}</span> 
            <span className='text-secondary font-bold text-xl'>stock: {availablequantity}</span>
            </p>
            <div class="flex justify-between items-center my-4">
            <h3 className='text-neutral font-semibold text-xl'>Price$: {price}</h3>
            <button onClick={() => navigateToProductDetail(_id)} class="btn btn-md btn-secondary">Buy Now</button>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;