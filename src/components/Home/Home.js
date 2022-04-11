import React from 'react';
import useReviews from '../../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';
import './Home.css';

const Home = (props) => {
    const [reviews] = useReviews();
    return (
        <div>
            <div className='header flex'>
                <div className='mr-10'>
                    <h1 className='text-4xl text-left font-bold text-blue-500 mb-5'>Welcome to my new Web Site</h1>
                    <p className='text-xl'>Here is lots of reviews and have new chart. When you learn need to know lots of thing.</p>
                </div>
                <img className='header-img' src="https://hips.hearstapps.com/ghk.h-cdn.co/assets/16/08/gettyimages-464163411.jpg?crop=1.0xw:1xh;center,top&resize=980:*" alt="" />

            </div>
            <h2 className='text-4xl m-10'>Customer Reviews(3)</h2>
            <div>
                {
                    reviews.slice(0, 3).map(product => <HomeReview
                        key={product.id}
                        product={product}
                    ></HomeReview>)
                }


            </div>
            <button className='bg-indigo-500 font-bold text-white p-6 m-10 rounded-xl'>See All Reviews</button>
        </div>
    );
};

export default Home;