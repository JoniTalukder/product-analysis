import React from 'react';

const HomeReview = (props) => {
    const { name, review, rating, img } = props.product;
    return (
        <div className='review-item'>
            <img className='img mr-10' src={img} alt="" />
            <div>
                <h2>Name:{name}</h2>
                <p>Review:{review}</p>
                <p>Rating: {rating} (out of 5)</p>
            </div>
        </div>
    );
};

export default HomeReview;