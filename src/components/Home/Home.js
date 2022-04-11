import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import ReviewItems from '../ReviewItems/ReviewItems';
import './Home.css';

const Home = (props) => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const showAllReviews = () => {
        const path = `/reviews`;
        navigate(path);
    }
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
            <div className='reviews'>
                {
                    reviews.slice(0, 3).map(product => <ReviewItems
                        key={product.id}
                        product={product}
                    ></ReviewItems>)
                }

            </div>
            <button onClick={showAllReviews} className='bg-indigo-500 font-bold text-white p-6 m-10 rounded-xl'>See All Reviews</button>
        </div>
    );
};

export default Home;