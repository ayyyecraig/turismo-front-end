import { useState } from 'react';
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
        navigate(`/parts`)
        setFormValues({...formValues, rating: '', content: ''})
    }
    return (
        <div className="write-review-form">
            <h3>Review this Product</h3>
            <textarea
                className="reviewBox"
                type="text"
                name="content"
                value={formValues.content}
                placeholder="Your Thoughts"
                onChange={handleChange}
            ></textarea>
            <form>
                <fieldset>
                    <span class="star-group">
                    <input type="radio" id="rating-5" name="rating" value="5" onChange={handleChange} />
                    <label for="rating-5">5</label>
                    <input type="radio" id="rating-4" name="rating" value="4"  onChange={handleChange} />
                    <label for="rating-4">4</label>
                    <input type="radio" id="rating-3" name="rating" value="3" onChange={handleChange} />
                    <label for="rating-3">3</label>
                    <input type="radio" id="rating-2" name="rating" value="2" onChange={handleChange} />
                    <label for="rating-2">2</label>
                    <input type="radio" id="rating-1" name="rating" value="1" onChange={handleChange} />
                    <label for="rating-1">1</label>
                    <input type="radio" id="rating-0" name="rating" value="0" class="star-cb-clear" onChange={handleChange} />
                
                    </span>
             </fieldset>
            </form>
            <button className="submit-button" type="submit" onClick={handleSubmit} disabled={!formValues.rating}>Submit Review</button>
        </div>
    )
}

export default WriteReview