import React from 'react';

const ReviewCard = ({review}) => {
    const {picture,name,rating, comment} = review;
    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-2xl border-secondary border">
  <div class="avatar mx-auto mt-3">
  <div class="w-24 rounded-full">
    <img src={picture} alt="img"/>
  </div>
</div>
  <div class="card-body items-center text-center">
    <h2 class="card-title text-accent">Rating: {rating}</h2>
    <h2 class="card-title text-xl font-semibold">{name}</h2>
    <p>{comment}</p>
    
  </div>
</div>
    );
};

export default ReviewCard;