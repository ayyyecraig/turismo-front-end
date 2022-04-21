import React, { useState, useEffect } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { GetReviews } from '../services/ReviewServices';
import { useNavigate } from 'react-router-dom';

const Reviews = ({ user }) => {

    const [reviews, setReviews] = useState([])

    let { id } = useParams();
    let navigate = useNavigate();

    const viewReview = (review) => {
        navigate(`/reviews/${review.id}`)
    }

    useEffect(() => {
        const handleReviews = async () => {
            const data = await GetReviews(id)
            let selectedReviews = []
            data.forEach((review) => {
                if(review.partId === parseInt(id)) {
                    selectedReviews.push(review)
                }
            })
            setReviews(selectedReviews)
            console.log(data)
        }
        handleReviews()
    }, [reviews.id])

    return (
        <div className="previous-reviews">
           {
            reviews.map((review) => (
                <div className="review-item" key={review.id} onClick={() => viewReview(review)}>
                    <p className="review-username">{review.User.username}</p>
                    <p className="review-rating">Rating: {review.rating}/5</p>
                    <p className="review-content"> Details: {review.content}</p>
                </div>  
            ))
           }
        </div>
    )

}

export default Reviews