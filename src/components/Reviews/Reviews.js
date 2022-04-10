import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Reviews.css';


const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='reviews'>
            {
                reviews.map(product => <ReviewItems
                    key={product.id}
                    product={product}
                ></ReviewItems>)
            }
            
        </div>
    );
};

export default Reviews;


