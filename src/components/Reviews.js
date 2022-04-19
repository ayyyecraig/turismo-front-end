import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { GetReviews, DeleteReview } from '../services/ReviewServices';

const Reviews = ({ user }) => {

    const [reviews, setReviews] = useState([])

    let { id } = useParams();

    const deleteReview = async (review) => {
        await DeleteReview(review.id)
    }

    const updateReview = (review) => {
        console.log('update this sucka')
    }

    useEffect(() => {
        const handleReviews = async () => {
            const data = await GetReviews(id)
            setReviews(data)
        }
        handleReviews()
    }, [reviews])

    return (
        <div className="previous-reviews">
           {
            reviews.map((review) => (
                <div className="review-item" key={review.id}>
                    {
                        user.id === review.ownerId ?
                        <div className="review-options">
                            <button className="review-update" onClick={() => updateReview(review)}>Update</button>
                            <button className="review-delete" onClick={() => deleteReview(review)}>Delete</button>
                        </div>
                        : ''
                    }
                    <p className="review-rating">{review.rating}</p>
                    <p className="review-content">{review.content}</p>
                </div>  
            ))
           }
        </div>
    )

}

export default Reviews