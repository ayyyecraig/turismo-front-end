import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { GetReviewById, UpdateReview, DeleteReview } from '../services/ReviewServices';

const ReviewDetails = ({ user, authenticated }) => {


    const [ formValues, setFormValues ] = useState({
        rating: '',
        content: ''
    });

    let navigate = useNavigate();
    let { id } = useParams();

    const [review, setReview] = useState({})

    const handleReview = async () => {
        const data = await GetReviewById(id)
        console.log(data)
        setReview(data)
        setFormValues({ rating: review.rating, content: review.content })
    }

    useEffect(() =>{
        handleReview()
    }, [review.rating])

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const deleteReview = async (review) => {
        await DeleteReview(review.id)
        navigate(`/parts/${review.partId}`)
    }

    const updateReview = async () => {
        await UpdateReview(review.id, parseInt(formValues.rating), formValues.content)
        navigate(`/parts/${review.partId}`)
    }

    return (
        <div className="update-review-form">
            <input
                className="update-review-input"
                type="number"
                name="rating"
                value={formValues.rating}
                placeholder={formValues.rating}
                onChange={handleChange}
                required
            />
            <textarea
                className="update-review-content"
                type="text"
                name="content"
                value={formValues.content}
                placeholder={formValues.content}
                onChange={handleChange}
            ></textarea>
            {
                user.id === review.ownerId ?
                <div className="review-options">
                    <button className="review-update" onClick={() => updateReview()}>Update</button>
                    <button className="review-delete" onClick={() => deleteReview(review)}>Delete</button>
                </div>
                : ''
            }
        </div>
    )
}

export default ReviewDetails