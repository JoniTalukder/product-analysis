import React from 'react';
import useReviews from '../../hooks/useReviews';
import HomeReview from '../HomeReview/HomeReview';

const Home = (props) => {
    const [reviews, setReviews] = useReviews();
    return (
        <div>
            <h2 className='text-4xl m-10'>Customer Reviews(3)</h2>
            <div className='flex justify-center'>
                {
                    reviews.slice(0, 3).map(product => <HomeReview
                        key={product.id}
                        product={product}
                    ></HomeReview>)
                }

                
            </div>
            <button>See All Reviews</button>
        </div>
    );
};

export default Home;