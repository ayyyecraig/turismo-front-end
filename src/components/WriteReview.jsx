import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NewReview } from '../services/ReviewServices';

const WriteReview = (props) => {
    const [ formValues, setFormValues ] = useState({
        rating: '',
        content: ''
    });

    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await NewReview(formValues.rating, formValues.content, props.user.id, props.part.id)
        navigate(`/parts/${props.part.id}`)
        setFormValues({...formValues, rating: '', content: ''})
    }
    return (
        <div className="write-review-form">
            <input
                className="review-input"
                type="number"
                name="rating"
                value={formValues.rating}
                placeholder="Your Rating"
                onChange={handleChange}
                required
            />
            <textarea
                className="reviewBox"
                type="text"
                name="content"
                value={formValues.content}
                placeholder="Your Thoughts"
                onChange={handleChange}
            ></textarea>
            <button className="submit-button" type="submit" onClick={handleSubmit} disabled={!formValues.rating}>Submit Review</button>
        </div>
    )
}

export default WriteReview