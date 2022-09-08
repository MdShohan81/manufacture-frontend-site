import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';


const Review = () => {
    const [reviews, setReviews] = useState([]);
    useEffect( () => {
        fetch('https://tranquil-everglades-72932.herokuapp.com/review')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])

    return (
        <div className='my-16 lg:mx-12'>
           <h1 className='text-center lg:text-5xl font-bold mb-8'>Client's <span className='text-secondary'>Review</span></h1>

           <div className='grid lg:grid-cols-3 grid-cols-1 gap-8'>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard
                    key={review._id}
                    review={review}
                    ></ReviewCard>)
                }
           </div>
        </div>
    );
};

export default Review;