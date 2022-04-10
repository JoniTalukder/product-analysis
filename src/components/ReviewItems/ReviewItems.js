import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { name, review, rating, img } = props.product;
    return (
        <div className='review-item text-center'>
            <img className='img' src={img} alt="" />
            <h2>Name:{name}</h2>
            <p>Review:{review}</p>
            <p>Rating: {rating} (out of 5)</p>
        </div>
    );
};

export default ReviewItems;