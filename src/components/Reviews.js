import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetReviews } from '../services/ReviewServices';

const Reviews = () => {

    const [reviews, setReviews] = useState([])

    let { id } = useParams();

    useEffect(() => {
        const handleReviews = async () => {
            const data = await GetReviews(id)
            setReviews(data)
        }
        handleReviews()
    }, [])

    return (
        <div className="previous-reviews">
           {
            reviews.map((review) => (
                <div className="review-item" key={review.id}>
                    <p className="review-rating">{review.rating}</p>
                    <p className="review-content">{review.content}</p>
                </div>  
            ))
           }
        </div>
    )

}

export default Reviews