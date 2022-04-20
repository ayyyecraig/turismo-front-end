import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { ReviewUpdate} from '../services/ReviewServices';

const UpdateReview = (props) => {


    const [ formValues, setFormValues ] = useState({
        // rating: review.rating,
        // content: review.content
    });

    let navigate = useNavigate();
    let { id } = useParams();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await ReviewUpdate(id, formValues.rating, formValues.content)
        navigate(`/parts`)
        setFormValues({...formValues, rating: '', content: ''})
    }

    useEffect(() => {

    }, [])

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
            <button className="submit-button" type="submit" onClick={handleSubmit}>Update Review</button>
        </div>
    )
}

export default UpdateReview