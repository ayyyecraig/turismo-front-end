import React, { useState, useEffect } from 'react'

const Reviews = () => {

    const [review, setReview] = useState('')
    useEffect(() => {console.log(review)}, [review])

    // const [newReview, setNewReview] = useState()
    // const submitReview = {setNewReview}

    return (
        <div>
            <form className="reviews">
                <input type="text" value={review} onChange={e => setReview(e.target.value)} className="reviewBox"/>
                <button>Submit</button>
            </form>
            {/* Have this appear after hitting submit */}
            <h4>Your Review:</h4>
            <p>Example text</p>
        </div>
    )

}

export default Reviews