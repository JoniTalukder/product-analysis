import React from 'react';
import './ReviewItems.css';

const ReviewItems = (props) => {
    const { name, review, rating, img } = props.product;
    return (
        <div className='review-item'>
            <img className='img mr-10' src={img} alt="" />
            <div className='review-item-details'>
                <h2>Name: {name}</h2>
                <p>Review: {review}</p>
                <p>Rating: <span className='rating'>{rating}</span> (out of 5)</p>
            </div>
        </div>
    );
};

export default ReviewItems;