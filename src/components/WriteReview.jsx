import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const WriteReview = (props) => {
    const [ formValues, setFormValues ] = useState({
        username: '',
        rating: null,
        content: ''
    });

    const [ reviewSent, setReviewSent ] = useState(false)

    let navigate = useNavigate();

    const handleChange = (e) => {
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/reviews/${props.owner_id}/${props.part_id}`, {
            username: formValues.username,
            rating: formValues.rating,
            content: formValues.content,
            owner_id: props.owner_id,
            part_id: props.part_id
        })
        .then(function (res) {
            setReviewSent(true)
            console.log(res)
            navigate(`/parts/${props.part_id}`)
        })
        .catch(function (error) {
            throw error
        });
    }

    useEffect(()=> {
        return () => {
            setReviewSent(false)
        }
    }, [reviewSent])

    return (
        <div className="write-review-form">
            <input
                className="review-input"
                type="text"
                name="username"
                value={formValues.username}
                placeholder="Your Name"
                onChange={handleChange}
                required
            />
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
                className="review-input"
                type="text"
                name="content"
                value={formValues.content}
                placeholder="Your Thoughts"
                onChange={handleChange}
            ></textarea>
            <button className="submit-button" type="submit" onClick={handleSubmit} disabled={!formValues.username || !formValues.rating}>Submit Review</button>
        </div>
    )
}

export default WriteReview